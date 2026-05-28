import { SectionReveal } from "./SectionReveal";

export function Education({ profile }) {
  return (
    <SectionReveal id="education" className="edu">
      <div className="container">
        <h2 className="section-title">Education & certifications</h2>
        <div className="edu__layout">
          <div>
            <h3 className="edu__h">Education</h3>
            <ul className="edu__list">
              {profile.education.map((e, i) => (
                <li key={i} className="card edu__card">
                  <strong>{e.degree}</strong>
                  <p className="edu__school">{e.school}</p>
                  <p className="edu__meta">
                    {e.period} · {e.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="edu__h">Certifications</h3>
            <ul className="edu__certs">
              {profile.certifications.map((c, i) => (
                <li key={i} className="card edu__cert">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style>{`
        .edu {
          background: var(--bg);
        }
        .edu__layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: start;
        }
        @media (max-width: 768px) {
          .edu__layout { grid-template-columns: 1fr; }
        }
        .edu__h {
          font-family: "Outfit", sans-serif;
          font-size: 1.1rem;
          margin: 0 0 1rem;
        }
        .edu__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .edu__card strong {
          display: block;
          font-size: 1rem;
          margin-bottom: 0.35rem;
        }
        .edu__school {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.92rem;
        }
        .edu__meta {
          margin: 0.5rem 0 0;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .edu__certs {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .edu__cert {
          font-size: 0.92rem;
          color: var(--text-muted);
        }
      `}</style>
    </SectionReveal>
  );
}
