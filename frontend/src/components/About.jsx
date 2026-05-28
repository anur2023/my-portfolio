import { SectionReveal } from "./SectionReveal";

export function About({ profile }) {
  return (
    <SectionReveal id="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <p className="section-lead">
          Full-stack engineer focused on clean APIs, solid React UIs, and
          practical AI features — from NLP pipelines to production Spring Boot
          services.
        </p>
        <div className="about-grid">
          <div className="card about-card">
            <h3 className="about-card__title">Currently</h3>
            <p className="about-card__text">
              Software Engineer at <strong>HCL Technologies</strong>, building
              with Java, Spring Boot, and modern web stacks.
            </p>
          </div>
          <div className="card about-card">
            <h3 className="about-card__title">Focus</h3>
            <p className="about-card__text">
              REST design, microservices patterns, React frontends, MySQL data
              modeling, and MLOps-style integrations where they add value.
            </p>
          </div>
          <div className="card about-card">
            <h3 className="about-card__title">Reach me</h3>
            <p className="about-card__text">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <br />
              <span className="muted">{profile.phone}</span>
            </p>
          </div>
        </div>
      </div>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.25rem;
        }
        .about-card__title {
          font-family: "Outfit", sans-serif;
          font-size: 1.1rem;
          margin: 0 0 0.5rem;
        }
        .about-card__text {
          margin: 0;
          color: var(--text-muted);
          font-size: 0.98rem;
        }
        .about-card__text .muted { color: var(--text-muted); }
      `}</style>
    </SectionReveal>
  );
}
