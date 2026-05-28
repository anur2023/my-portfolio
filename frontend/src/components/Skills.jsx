import { SectionReveal } from "./SectionReveal";

export function Skills({ profile }) {
  return (
    <SectionReveal id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-lead">
          Tools and stacks I use across backend, frontend, data, and DevOps.
        </p>
        <div className="skills__grid">
          {profile.skills.map((group) => (
            <div key={group.category} className="card skills__group">
              <h3 className="skills__cat">{group.category}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item} className="skills__pill">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .skills__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1rem;
        }
        .skills__cat {
          font-family: "Outfit", sans-serif;
          font-size: 1rem;
          margin: 0 0 0.85rem;
        }
        .skills__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .skills__pill {
          font-size: 0.82rem;
          padding: 0.35rem 0.65rem;
          border-radius: 999px;
          background: var(--accent-soft);
          color: var(--text);
          font-weight: 500;
        }
      `}</style>
    </SectionReveal>
  );
}
