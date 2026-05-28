import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ status: "error", message: "Method not allowed" });
  }

  const { name = "", email = "", message = "" } = req.body ?? {};
  const trimmedMessage = String(message).trim();
  const trimmedName = String(name).trim().slice(0, 120);
  const trimmedEmail = String(email).trim().slice(0, 254);

  if (!trimmedMessage) {
    return res.status(400).json({ status: "error", message: "Message is required" });
  }
  if (trimmedEmail && !EMAIL_RE.test(trimmedEmail)) {
    return res.status(400).json({ status: "error", message: "Invalid email" });
  }
  if (trimmedMessage.length > 8000) {
    return res.status(400).json({ status: "error", message: "Message is too long" });
  }

  const mailUsername = process.env.MAIL_USERNAME;
  const mailPassword = process.env.MAIL_PASSWORD;
  const inbox = process.env.PORTFOLIO_CONTACT_INBOX || mailUsername;

  if (!mailUsername || !mailPassword) {
    return res.status(503).json({
      status: "error",
      message:
        "Email is not configured. Set MAIL_USERNAME and MAIL_PASSWORD in Vercel project settings.",
    });
  }

  const when = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  const subject = `[Portfolio] ${trimmedName ? `Message from ${trimmedName}` : "New message"}`;
  const text = `New message from your portfolio contact form

Time: ${when}

Name: ${trimmedName || "(not provided)"}
Email: ${trimmedEmail || "(not provided)"}

Message:
${trimmedMessage}`;

  try {
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: { user: mailUsername, pass: mailPassword },
    });

    await transport.sendMail({
      from: mailUsername,
      to: inbox,
      subject,
      text,
      replyTo: trimmedEmail || undefined,
    });

    return res.status(200).json({ status: "ok" });
  } catch {
    return res.status(503).json({
      status: "error",
      message: "Could not send email. Check Gmail App Password and network.",
    });
  }
}
