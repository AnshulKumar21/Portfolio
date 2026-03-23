// ============================================================
// Vercel Serverless Function: /api/contact
// POST /api/contact → sends email via Gmail + Nodemailer
// ============================================================

const nodemailer = require("nodemailer");

// ── Basic input validator ──────────────────────────────────
function validateInput({ name, email, subject, message }) {
  if (!name || name.trim().length < 2) return "Name must be at least 2 characters.";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Invalid email address.";
  if (!subject || subject.trim().length < 3) return "Subject must be at least 3 characters.";
  if (!message || message.trim().length < 10) return "Message must be at least 10 characters.";
  return null;
}

// ── Serverless handler ─────────────────────────────────────
module.exports = async function handler(req, res) {
  // CORS headers (safe for portfolio)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight
  if (req.method === "OPTIONS") return res.status(200).end();

  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed." });
  }

  const { name, email, subject, message } = req.body || {};

  // Validate
  const validationError = validateInput({ name, email, subject, message });
  if (validationError) {
    return res.status(400).json({ success: false, error: validationError });
  }

  // ── Nodemailer transporter using Gmail ───────────────────
  // Uses Gmail App Password (NOT your regular Gmail password)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,       // your Gmail address
      pass: process.env.GMAIL_APP_PASS,   // Gmail App Password (16 chars)
    },
  });

  try {
    // ── 1. Send notification email TO YOU ───────────────────
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,           // lands in YOUR inbox
      replyTo: email,                        // ← reply goes directly to the user!
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #7c3aed; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
            📬 New Contact Form Message
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555; width: 100px;">Name:</td>
              <td style="padding: 8px; color: #222;">${name}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px; color: #222;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Subject:</td>
              <td style="padding: 8px; color: #222;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 14px; background: #f5f5f5; border-left: 4px solid #7c3aed; border-radius: 4px;">
            <p style="font-weight: bold; color: #555; margin: 0 0 8px;">Message:</p>
            <p style="color: #333; margin: 0; line-height: 1.6; white-space: pre-line;">${message}</p>
          </div>
          <p style="margin-top: 20px; color: #888; font-size: 12px;">
            💡 Hit "Reply" to respond directly to ${name} at ${email}
          </p>
        </div>
      `,
    });

    // ── 2. Send confirmation email TO THE USER ──────────────
    await transporter.sendMail({
      from: `"Anshul Kumar" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}! ✉️`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #7c3aed;">Hey ${name}, thanks for your message! 👋</h2>
          <p style="color: #444; line-height: 1.7;">
            I received your message and will get back to you as soon as possible — usually within 24 hours.
          </p>
          <div style="padding: 14px; background: #f5f5f5; border-left: 4px solid #06b6d4; border-radius: 4px; margin: 16px 0;">
            <p style="font-weight: bold; color: #555; margin: 0 0 4px;">Your message:</p>
            <p style="color: #333; margin: 0; line-height: 1.6; white-space: pre-line;">${message}</p>
          </div>
          <p style="color: #444; line-height: 1.7;">
            In the meantime, feel free to check out my 
            <a href="https://github.com/AnshulKumar21" style="color: #7c3aed;">GitHub</a> or connect on 
            <a href="https://linkedin.com/in/anshu121" style="color: #7c3aed;">LinkedIn</a>.
          </p>
          <p style="color: #888; font-size: 12px; margin-top: 20px; border-top: 1px solid #eee; padding-top: 12px;">
            — Anshul Kumar | Full Stack Developer
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: "Message sent successfully!" });

  } catch (err) {
    console.error("Email error:", err.message);
    return res.status(500).json({ success: false, error: "Failed to send email. Please try again later." });
  }
};
