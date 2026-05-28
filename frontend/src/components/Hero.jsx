const PHOTO_SRC = "/portfolio-photo.png";
const PHOTO_FALLBACK =
  "https://avatars.githubusercontent.com/u/154400979?v=4&s=400";

export function Hero({ profile }) {
  return (
    <section id="top" className="hero section">
      <div className="hero__blobs" aria-hidden>
        <span className="hero__blob hero__blob--1" />
        <span className="hero__blob hero__blob--2" />
        <span className="hero__blob hero__blob--3" />
      </div>
      <div className="hero__shine" aria-hidden />
      <div className="container hero__grid">
        <div className="hero__content animate-in">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden />
            Hello, I&apos;m
          </p>
          <h1 className="hero__title">
            <span className="hero__title-gradient">{profile.name}</span>
          </h1>
          <p className="hero__tagline">{profile.tagline}</p>
          <p className="hero__location">
            <span className="hero__pin" aria-hidden>
              ◉
            </span>
            {profile.location}
          </p>
          <p className="hero__summary">{profile.summary}</p>
          <div className="hero__actions">
            <a className="btn btn-primary" href="#contact">
              Get in touch
            </a>
            <a
              className="btn btn-ghost"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="btn btn-ghost"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__avatar-float">
            <div className="hero__avatar-shell">
              <div className="hero__avatar-inner">
                <img
                  src={PHOTO_SRC}
                  alt={`Portrait of ${profile.name}`}
                  className="hero__photo"
                  width={280}
                  height={280}
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    if (e.currentTarget.src !== PHOTO_FALLBACK) {
                      e.currentTarget.src = PHOTO_FALLBACK;
                      e.currentTarget.onerror = null;
                    }
                  }}
                />
              </div>
            </div>
            <div className="hero__avatar-glow" aria-hidden />
          </div>
        </div>
      </div>
      <style>{`
        .hero {
          padding-top: 2.75rem;
          padding-bottom: 3.5rem;
          position: relative;
          background: var(--hero-gradient);
          background-size: 200% 200%;
          animation: gradient-shift 20s ease infinite;
          overflow: hidden;
        }
        .hero__shine {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 55%;
          height: 90%;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 255, 255, 0.45) 0%,
            transparent 65%
          );
          pointer-events: none;
          opacity: 0.55;
        }
        [data-theme="dark"] .hero__shine {
          background: radial-gradient(
            ellipse at center,
            rgba(96, 165, 250, 0.08) 0%,
            transparent 60%
          );
          opacity: 1;
        }
        .hero__blobs {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .hero__blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(56px);
          animation: float 14s ease-in-out infinite;
        }
        .hero__blob--1 {
          width: 300px;
          height: 300px;
          background: var(--blob-1);
          top: -50px;
          right: 8%;
        }
        .hero__blob--2 {
          width: 240px;
          height: 240px;
          background: var(--blob-2);
          bottom: 8%;
          left: 3%;
          animation-delay: -5s;
        }
        .hero__blob--3 {
          width: 180px;
          height: 180px;
          background: var(--blob-2);
          top: 40%;
          left: 35%;
          animation-delay: -2s;
          opacity: 0.7;
        }
        .hero__grid {
          display: grid;
          grid-template-columns: 1fr min(300px, 78vw);
          gap: 3rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .hero__grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero__actions {
            justify-content: center;
            flex-wrap: wrap;
          }
          .hero__visual {
            order: -1;
          }
          .hero__avatar-float {
            margin: 0 auto;
          }
          .hero__summary {
            margin-left: auto;
            margin-right: auto;
          }
        }
        .hero__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--accent);
          margin: 0 0 0.5rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .hero__eyebrow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent);
          box-shadow: 0 0 14px var(--accent);
          animation: pulse-dot 2.2s ease-in-out infinite;
        }
        .hero__title {
          font-family: "Outfit", sans-serif;
          font-size: clamp(2.35rem, 5.5vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          margin: 0 0 0.5rem;
          line-height: 1.08;
        }
        .hero__title-gradient {
          background: linear-gradient(
            105deg,
            var(--text) 0%,
            var(--accent) 42%,
            #38bdf8 88%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero__tagline {
          font-size: 1.22rem;
          color: var(--text-muted);
          margin: 0 0 0.4rem;
          font-weight: 500;
        }
        .hero__location {
          margin: 0 0 1.35rem;
          font-size: 0.95rem;
          color: var(--text-muted);
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }
        @media (max-width: 900px) {
          .hero__location {
            justify-content: center;
            width: 100%;
          }
        }
        .hero__pin {
          color: var(--accent);
          font-size: 0.75rem;
          opacity: 0.9;
        }
        .hero__summary {
          margin: 0 0 1.85rem;
          max-width: 38rem;
          color: var(--text-muted);
          font-size: 1.04rem;
          line-height: 1.65;
        }
        .hero__actions {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
        }
        .hero__visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        /* Floating wrapper */
        .hero__avatar-float {
          position: relative;
          width: min(280px, 78vw);
          height: min(280px, 78vw);
          animation: avatar-float 5.5s ease-in-out infinite;
        }
        /* Rotating gradient ring (outer) */
        .hero__avatar-shell {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          padding: 5px;
          background: conic-gradient(
            from 0deg,
            var(--accent),
            #38bdf8,
            #818cf8,
            #c084fc,
            var(--accent)
          );
          animation: avatar-ring-spin 12s linear infinite;
          box-shadow:
            0 28px 70px rgba(37, 99, 235, 0.22),
            0 0 0 1px rgba(255, 255, 255, 0.1) inset;
        }
        [data-theme="dark"] .hero__avatar-shell {
          box-shadow:
            0 28px 70px rgba(0, 0, 0, 0.45),
            0 0 40px rgba(96, 165, 250, 0.12);
        }
        /* Counter-rotate inner so the portrait stays upright */
        .hero__avatar-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: var(--bg-elevated);
          animation: avatar-ring-spin 12s linear infinite reverse;
          border: 3px solid var(--bg-elevated);
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.18),
            inset 0 -24px 44px rgba(15, 23, 42, 0.2);
        }
        .hero__photo {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          /* Passport-style portrait: slightly top-focused crop feels balanced */
          object-position: center 18%;
          transform: scale(1.07);
          filter: saturate(1.05) contrast(1.04);
          transition: transform 300ms ease;
        }
        .hero__avatar-float:hover .hero__photo {
          transform: scale(1.1);
        }
        .hero__avatar-glow {
          position: absolute;
          inset: -12%;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(37, 99, 235, 0.28) 0%,
            transparent 68%
          );
          z-index: -1;
          animation: glow-pulse 4s ease-in-out infinite;
        }
        [data-theme="dark"] .hero__avatar-glow {
          background: radial-gradient(
            circle,
            rgba(96, 165, 250, 0.2) 0%,
            transparent 68%
          );
        }
        @keyframes avatar-float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes avatar-ring-spin {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes pulse-dot {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.65;
            transform: scale(1.15);
          }
        }
        @keyframes glow-pulse {
          0%,
          100% {
            opacity: 0.85;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero__avatar-shell,
          .hero__avatar-inner,
          .hero__avatar-float,
          .hero__blob,
          .hero__eyebrow-dot,
          .hero__avatar-glow {
            animation: none !important;
          }
          .hero {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
