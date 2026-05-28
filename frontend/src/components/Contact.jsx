import { useState } from "react";
import { SectionReveal } from "./SectionReveal";

export function Contact({ profile }) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [serverMessage, setServerMessage] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };
    if (!payload.message) {
      setError("Please enter a message.");
      return;
    }
    setError("");
    setServerMessage("");
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setServerMessage(
          data.message ||
            "Could not send your message. Try again or email directly.",
        );
        return;
      }
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setServerMessage(
        "Could not reach the server. Try again or use the email link on the left.",
      );
    }
  }

  return (
    <SectionReveal id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-lead">
          Send a message — it is delivered to my inbox via the portfolio API
          (Gmail SMTP).
        </p>
        <div className="contact__grid">
          <div className="card contact__card">
            <h3 className="contact__h">Direct</h3>
            <p>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
            <p className="muted">{profile.phone}</p>
            <p>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              {" · "}
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </p>
          </div>
          <form className="card contact__form" onSubmit={onSubmit}>
            <label className="contact__label">
              Name
              <input name="name" type="text" autoComplete="name" />
            </label>
            <label className="contact__label">
              Email
              <input name="email" type="email" autoComplete="email" />
            </label>
            <label className="contact__label">
              Message
              <textarea name="message" rows={4} required />
            </label>
            {error && <p className="contact__err">{error}</p>}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            {status === "sent" && (
              <p className="contact__ok">Thanks — your message was received.</p>
            )}
            {status === "error" && (
              <p className="contact__err">
                {serverMessage ||
                  "Something went wrong. Try again or use the email link on the left."}
              </p>
            )}
          </form>
        </div>
      </div>
      <style>{`
        .contact__grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 1.5rem;
          align-items: start;
        }
        @media (max-width: 800px) {
          .contact__grid { grid-template-columns: 1fr; }
        }
        .contact__h {
          font-family: "Outfit", sans-serif;
          margin: 0 0 0.75rem;
        }
        .contact__card p {
          margin: 0.35rem 0;
          color: var(--text-muted);
          font-size: 0.95rem;
        }
        .contact__card .muted { font-size: 0.9rem; }
        .contact__label {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          font-size: 0.88rem;
          font-weight: 600;
          margin-bottom: 0.85rem;
        }
        .contact__label input,
        .contact__label textarea {
          font: inherit;
          padding: 0.6rem 0.75rem;
          border-radius: 0.65rem;
          border: 1px solid var(--border);
          background: var(--bg);
          color: var(--text);
        }
        .contact__label input:focus,
        .contact__label textarea:focus {
          outline: 2px solid var(--accent-soft);
          border-color: var(--accent);
        }
        .contact__ok {
          color: #059669;
          font-size: 0.9rem;
          margin: 0.5rem 0 0;
        }
        .contact__err {
          color: #dc2626;
          font-size: 0.9rem;
          margin: 0 0 0.5rem;
        }
      `}</style>
    </SectionReveal>
  );
}
