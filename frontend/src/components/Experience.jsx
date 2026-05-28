import { SectionReveal } from "./SectionReveal";

export function Experience({ profile }) {
  return (
    <SectionReveal id="experience" className="exp">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-lead">
          Product engineering and one-on-one teaching experience.
        </p>
        <ol className="exp__timeline">
          {profile.experience.map((job, i) => (
            <li key={i} className="exp__item card">
              <div className="exp__header">
                <div>
                  <h3 className="exp__role">{job.role}</h3>
                  <p className="exp__company">{job.company}</p>
                </div>
                <span className="exp__period">{job.period}</span>
              </div>
              <p className="exp__stack">{job.stack}</p>
              <ul className="exp__highlights">
                {job.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
      <style>{`
        .exp { background: var(--bg); }
        .exp__timeline {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .exp__header {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          align-items: flex-start;
        }
        .exp__role {
          font-family: "Outfit", sans-serif;
          font-size: 1.15rem;
          margin: 0 0 0.2rem;
        }
        .exp__company {
          margin: 0;
          color: var(--accent);
          font-weight: 600;
          font-size: 0.95rem;
        }
        .exp__period {
          font-size: 0.88rem;
          color: var(--text-muted);
          white-space: nowrap;
        }
        .exp__stack {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: 0.75rem 0 0.75rem;
        }
        .exp__highlights {
          margin: 0;
          padding-left: 1.15rem;
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .exp__highlights li { margin-bottom: 0.4rem; }
      `}</style>
    </SectionReveal>
  );
}
