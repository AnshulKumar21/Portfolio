import { motion } from "framer-motion";
import { certificatesData } from "../constants";

const cardVariant = (i) => ({
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" } },
});

const Certificates = () => {
  return (
    <section id="certificates" className="certificates-section section-padding">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Professional Credentials</p>
          <h2 className="section-title">
            My <span className="gradient-text">Certificates</span>
          </h2>
          <p className="section-subtitle">
            Industry-recognized certifications that validate my skills in cloud, AI, and programming.
          </p>
          <div className="divider" />
        </motion.div>

        {/* Certificate Cards Grid */}
        <div className="certs-grid">
          {certificatesData.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="cert-card"
              variants={cardVariant(i)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="cert-card-glow" />
              <div className="cert-icon-wrap">
                <span className="cert-icon">{cert.icon}</span>
              </div>
              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-dot">•</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </div>
              {cert.link !== "#" && (
                <div className="cert-verify-badge">Verify ↗</div>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
