import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-logo">
          <span className="site-logo__mark">AK</span>
          <span className="site-logo__text">Portfolio</span>
        </Link>
        <nav className="site-nav" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="site-nav__link">
              {l.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(14px);
          background: var(--nav-bg);
          border-bottom: 1px solid var(--border);
        }
        .site-header__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.85rem 0;
          flex-wrap: wrap;
        }
        .site-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text);
          text-decoration: none !important;
          font-weight: 700;
          font-family: "Outfit", sans-serif;
        }
        .site-logo__mark {
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 0.65rem;
          background: linear-gradient(135deg, var(--accent), #38bdf8);
          color: #fff;
          display: grid;
          place-items: center;
          font-size: 0.85rem;
        }
        .site-logo__text { font-size: 1rem; }
        .site-nav {
          display: flex;
          gap: 0.35rem 1.15rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .site-nav__link {
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none !important;
          padding: 0.35rem 0;
          border-bottom: 2px solid transparent;
          transition: color 0.2s, border-color 0.2s;
        }
        .site-nav__link:hover {
          color: var(--accent);
          border-bottom-color: var(--accent-soft);
        }
        .theme-toggle {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.6rem 0.35rem 0.35rem;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--bg-elevated);
          color: var(--text);
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 600;
          font-family: inherit;
        }
        .theme-toggle__track {
          position: relative;
          width: 3.25rem;
          height: 1.65rem;
          border-radius: 999px;
          background: var(--accent-soft);
          display: block;
        }
        .theme-toggle__thumb {
          position: absolute;
          top: 3px;
          left: 3px;
          width: calc(1.65rem - 6px);
          height: calc(1.65rem - 6px);
          border-radius: 50%;
          background: var(--accent);
          transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }
        [data-theme="dark"] .theme-toggle__thumb {
          transform: translateX(1.45rem);
        }
        .theme-toggle__icon {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: grid;
          place-items: center;
          color: var(--text-muted);
          opacity: 0.85;
        }
        .theme-toggle__icon--sun { left: 6px; }
        .theme-toggle__icon--moon { right: 5px; }
        .theme-toggle__label {
          min-width: 2.75rem;
          text-align: left;
          color: var(--text-muted);
        }
        @media (max-width: 720px) {
          .site-nav { order: 3; width: 100%; justify-content: flex-start; }
          .theme-toggle { margin-left: auto; }
        }
      `}</style>
    </header>
  );
}
