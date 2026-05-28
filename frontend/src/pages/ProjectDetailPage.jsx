import { Link, Navigate, useParams } from "react-router-dom";
import { getProjectBySlug } from "../lib/projects";

export function ProjectDetailPage({ profile }) {
  const { slug } = useParams();
  const project = getProjectBySlug(profile, slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const d = project.detail;

  return (
    <article className="project-detail">
      <div className="project-detail__hero">
        <div className="container">
          <nav className="project-detail__crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden> / </span>
            <Link to="/#projects">Projects</Link>
            <span aria-hidden> / </span>
            <span className="project-detail__crumb-current">{project.title}</span>
          </nav>
          <span className="project-detail__badge">{project.category}</span>
          <h1 className="project-detail__title">{project.title}</h1>
          <p className="project-detail__subtitle">{project.subtitle}</p>
          <div className="project-detail__actions">
            <a
              className="btn btn-primary"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open repository on GitHub
            </a>
            <Link className="btn btn-ghost" to="/#projects">
              ← All projects
            </Link>
          </div>
        </div>
      </div>

      <div className="container project-detail__body">
        <div className="project-detail__grid">
          <div className="project-detail__main">
            <section className="project-detail__card">
              <h2>Overview</h2>
              <p>{d.overview}</p>
            </section>
            {d.problem && (
              <section className="project-detail__card">
                <h2>Problem</h2>
                <p>{d.problem}</p>
              </section>
            )}
            {d.solution && (
              <section className="project-detail__card">
                <h2>Approach</h2>
                <p>{d.solution}</p>
              </section>
            )}
            <section className="project-detail__card">
              <h2>What&apos;s inside</h2>
              <ul className="project-detail__list">
                {d.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </section>
            {d.highlights?.length > 0 && (
              <section className="project-detail__card project-detail__card--accent">
                <h2>Portfolio highlights</h2>
                <ul className="project-detail__list">
                  {d.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
          <aside className="project-detail__aside">
            <div className="project-detail__card project-detail__sticky">
              <h3>Tech stack</h3>
              <ul className="project-detail__tags">
                {d.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p className="project-detail__stack-line">{project.stack}</p>
              <a
                className="project-detail__gh"
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                github.com/anur2023 →
              </a>
            </div>
          </aside>
        </div>
      </div>
      <style>{`
        .project-detail {
          padding-bottom: 4rem;
        }
        .project-detail__hero {
          padding: 2rem 0 3rem;
          background: var(--hero-gradient);
          background-size: 200% 200%;
          border-bottom: 1px solid var(--border);
        }
        .project-detail__crumb {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
        }
        .project-detail__crumb a {
          color: var(--accent);
          text-decoration: none !important;
          font-weight: 500;
        }
        .project-detail__crumb a:hover {
          text-decoration: underline !important;
        }
        .project-detail__crumb-current {
          color: var(--text-muted);
        }
        .project-detail__badge {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 0.35rem 0.75rem;
          border-radius: 999px;
          background: var(--accent-soft);
          color: var(--accent);
          margin-bottom: 0.75rem;
        }
        .project-detail__title {
          font-family: "Outfit", sans-serif;
          font-size: clamp(1.85rem, 4vw, 2.75rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          margin: 0 0 0.5rem;
          line-height: 1.15;
        }
        .project-detail__subtitle {
          font-size: 1.15rem;
          color: var(--text-muted);
          margin: 0 0 1.75rem;
          max-width: 42rem;
        }
        .project-detail__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .project-detail__body {
          padding-top: 2.5rem;
        }
        .project-detail__grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 2rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .project-detail__grid {
            grid-template-columns: 1fr;
          }
          .project-detail__aside {
            order: -1;
          }
          .project-detail__sticky {
            position: static !important;
          }
        }
        .project-detail__main {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .project-detail__card {
          background: var(--card-glass);
          backdrop-filter: blur(14px);
          border: 1px solid var(--border);
          border-radius: 1.125rem;
          padding: 1.5rem 1.75rem;
          box-shadow: var(--shadow);
        }
        .project-detail__card--accent {
          border-color: rgba(37, 99, 235, 0.25);
          background: linear-gradient(
            135deg,
            var(--card-glass),
            var(--accent-soft)
          );
        }
        .project-detail__card h2 {
          font-family: "Outfit", sans-serif;
          font-size: 1.2rem;
          margin: 0 0 0.85rem;
        }
        .project-detail__card h3 {
          font-family: "Outfit", sans-serif;
          font-size: 1.05rem;
          margin: 0 0 0.75rem;
        }
        .project-detail__card p {
          margin: 0;
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 1.02rem;
        }
        .project-detail__list {
          margin: 0;
          padding-left: 1.2rem;
          color: var(--text-muted);
          line-height: 1.65;
        }
        .project-detail__list li {
          margin-bottom: 0.5rem;
        }
        .project-detail__sticky {
          position: sticky;
          top: 5.5rem;
        }
        .project-detail__tags {
          list-style: none;
          margin: 0 0 1rem;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .project-detail__tags li {
          font-size: 0.82rem;
          padding: 0.35rem 0.65rem;
          border-radius: 999px;
          background: var(--accent-soft);
          font-weight: 500;
        }
        .project-detail__stack-line {
          font-size: 0.8rem;
          font-family: ui-monospace, monospace;
          color: var(--text-muted);
          margin: 0 0 1rem;
          line-height: 1.5;
        }
        .project-detail__gh {
          font-weight: 600;
          font-size: 0.95rem;
          word-break: break-all;
        }
      `}</style>
    </article>
  );
}
