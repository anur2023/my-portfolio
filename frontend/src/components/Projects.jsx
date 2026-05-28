import { Link } from "react-router-dom";
import { SectionReveal } from "./SectionReveal";

export function Projects({ profile }) {
  return (
    <SectionReveal id="projects" className="proj">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-lead">
          Twelve builds from{" "}
          <a
            href="https://github.com/anur2023"
            target="_blank"
            rel="noreferrer"
          >
            github.com/anur2023
          </a>{" "}
          — open a card for the full story, or jump straight to the repo.
        </p>
        <div className="proj__grid">
          {profile.projects.map((p) => (
            <article key={p.slug} className="card proj__card">
              <span className="proj__cat">{p.category}</span>
              <div className="proj__top">
                <h3 className="proj__title">{p.title}</h3>
                <p className="proj__subtitle">{p.subtitle}</p>
              </div>
              <p className="proj__desc">{p.description}</p>
              <p className="proj__stack">{p.stack}</p>
              <div className="proj__footer">
                <Link className="proj__cta" to={`/project/${p.slug}`}>
                  View project details
                </Link>
                <a
                  className="proj__link proj__link--secondary"
                  href={p.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub repository →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        .proj {
          background: linear-gradient(
            180deg,
            var(--bg) 0%,
            var(--bg-elevated) 100%
          );
        }
        .proj__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
        }
        .proj__cat {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }
        .proj__card {
          display: flex;
          flex-direction: column;
          min-height: 100%;
        }
        .proj__title {
          font-family: "Outfit", sans-serif;
          font-size: 1.15rem;
          margin: 0 0 0.25rem;
        }
        .proj__subtitle {
          margin: 0;
          font-size: 0.85rem;
          color: var(--accent);
          font-weight: 600;
        }
        .proj__desc {
          flex: 1;
          margin: 0.85rem 0;
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .proj__stack {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin: 0 0 1rem;
          font-family: ui-monospace, monospace;
        }
        .proj__footer {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: auto;
        }
        .proj__cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.55rem 1rem;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.92rem;
          background: var(--accent);
          color: #fff !important;
          text-decoration: none !important;
          box-shadow: 0 8px 22px var(--accent-soft);
          transition: transform 0.2s ease, filter 0.2s ease;
        }
        .proj__cta:hover {
          transform: translateY(-2px);
          filter: brightness(1.05);
        }
        .proj__link {
          font-weight: 600;
          font-size: 0.88rem;
        }
        .proj__link--secondary {
          color: var(--text-muted) !important;
          font-weight: 500;
        }
        .proj__link--secondary:hover {
          color: var(--accent) !important;
        }
      `}</style>
    </SectionReveal>
  );
}
