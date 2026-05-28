import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Education } from "../components/Education";
import { Contact } from "../components/Contact";

export function HomePage({ profile }) {
  return (
    <>
      <Hero profile={profile} />
      <About profile={profile} />
      <Experience profile={profile} />
      <Projects profile={profile} />
      <Skills profile={profile} />
      <Education profile={profile} />
      <Contact profile={profile} />
    </>
  );
}
