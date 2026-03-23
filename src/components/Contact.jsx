import { useState, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import { contactData } from "../constants";
import ContactCanvas from "./canvas/ContactCanvas";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      // Check content-type before parsing — locally Vite returns HTML for missing routes
      const contentType = res.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        // API not available (local dev) → fallback to mailto
        throw new Error("API_UNAVAILABLE");
      }

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 6000);

    } catch (err) {
      setLoading(false);
      // Fallback to mailto when running locally without serverless API
      const isUnavailable =
        err.message === "API_UNAVAILABLE" ||
        err.message.includes("Failed to fetch") ||
        err.message.includes("NetworkError");

      if (isUnavailable) {
        window.open(
          `mailto:${contactData.links[0].value}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`,
          "_blank"
        );
        setSent(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSent(false), 6000);
      } else {
        setError(err.message);
      }
    }
  };



  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? Drop me a message!
          </p>
          <div className="divider" />
        </motion.div>

        {/* 3D Earth */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "3rem" }}
        >
          <Suspense fallback={null}>
            <ContactCanvas />
          </Suspense>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3>
              Let's <span className="gradient-text">Connect</span>
            </h3>
            <p>{contactData.description}</p>

            <div className="contact-links">
              {contactData.links.map((link, i) => (
                <motion.a
                  className="contact-link-item"
                  key={i}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="contact-link-icon"
                    style={{ background: link.iconBg }}
                  >
                    {link.icon}
                  </div>
                  <div className="contact-link-text">
                    <div className="label">{link.label}</div>
                    <div className="value">{link.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {sent ? (
              <div className="form-success">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
                <h3 style={{ marginBottom: "0.5rem" }}>Message Sent!</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </div>

                {error && (
                  <p style={{ color: "#ef4444", fontSize: "0.85rem", marginBottom: "0.75rem" }}>
                    {error}
                  </p>
                )}

                <button type="submit" className="form-submit" disabled={loading}>
                  {loading ? (
                    <>
                      <span style={{ animation: "spin 1s linear infinite", display: "inline-block" }}>⟳</span>
                      Sending...
                    </>
                  ) : (
                    <>Send Message ✉️</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
};

export default Contact;
