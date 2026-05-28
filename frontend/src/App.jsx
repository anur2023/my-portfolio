import { useEffect, useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { profile as staticProfile } from "./data/profile";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";

function Shell({ profile }) {
  return (
    <div className="page-wrap">
      <ScrollToTop />
      <div className="bg-grid" aria-hidden />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer profile={profile} />
    </div>
  );
}

export default function App() {
  const [profile, setProfile] = useState(staticProfile);

  useEffect(() => {
    fetch("/api/profile", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        /* Ignore stale API payloads missing project slugs (detail pages need them). */
        if (Array.isArray(data?.projects) && data.projects[0]?.slug) {
          setProfile(data);
        }
      })
      .catch(() => {
        /* use bundled profile when API unavailable */
      });
  }, []);

  return (
    <Routes>
      <Route element={<Shell profile={profile} />}>
        <Route index element={<HomePage profile={profile} />} />
        <Route
          path="project/:slug"
          element={<ProjectDetailPage profile={profile} />}
        />
      </Route>
    </Routes>
  );
}
