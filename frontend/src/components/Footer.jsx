export function Footer({ profile }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>
          © {year} {profile.name}. Built with React & Spring Boot.
        </p>
        <p className="site-footer__links">
          <a href={profile.github}>GitHub</a>
          <span aria-hidden> · </span>
          <a href={profile.linkedin}>LinkedIn</a>
        </p>
      </div>
      <style>{`
        .site-footer {
          border-top: 1px solid var(--border);
          padding: 2rem 0 2.5rem;
          background: var(--bg-elevated);
        }
        .site-footer__inner {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 1rem;
          align-items: center;
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .site-footer__links a {
          color: var(--text-muted);
        }
        .site-footer__links a:hover {
          color: var(--accent);
        }
      `}</style>
    </footer>
  );
}
