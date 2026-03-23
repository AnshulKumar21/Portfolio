import { motion } from "framer-motion";
import { aboutData } from "../constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const About = () => {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="section-label">Who I Am</p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="divider" />
        </motion.div>

        <div className="about-grid">
          {/* Image */}
          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="about-image-placeholder">
              <span style={{ position: "relative", zIndex: 1 }}>{aboutData.emoji}</span>
              <span className="about-badge">✨ Available for Work</span>
            </div>

            <div className="about-info-cards">
              {aboutData.details.map((detail, i) => (
                <motion.div
                  className="info-card"
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="icon">{detail.icon}</span>
                  <div>
                    <div className="label">{detail.label}</div>
                    <div className="value">{detail.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
          >
            <p className="section-label">My Story</p>
            <h2 className="section-title" style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
              Turning Ideas Into{" "}
              <span className="gradient-text">Reality</span>
            </h2>

            {aboutData.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <motion.div
              style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <a
                className="btn-primary"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get In Touch →
              </a>
              <a
                className="btn-outline"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                See Projects
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
