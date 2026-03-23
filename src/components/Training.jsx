import { motion } from "framer-motion";
import { trainingData } from "../constants";

const cardVariant = (i) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" } },
});

const Training = () => {
  return (
    <section id="training" className="training-section section-padding">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Hands-On Experience</p>
          <h2 className="section-title">
            My <span className="gradient-text">Training</span>
          </h2>
          <p className="section-subtitle">
            Structured programs and internships that sharpened my technical expertise.
          </p>
          <div className="divider" />
        </motion.div>

        {/* Training Cards */}
        <div className="training-timeline">
          {trainingData.map((t, i) => (
            <motion.div
              key={i}
              className="training-card"
              variants={cardVariant(i)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Left accent line */}
              <div className="training-accent-line" />

              <div className="training-card-inner">
                <div className="training-card-header">
                  <div className="training-icon-wrap">
                    <span className="training-icon">{t.icon}</span>
                  </div>
                  <div className="training-meta">
                    <h3 className="training-title">{t.title}</h3>
                    <p className="training-org">
                      {t.org}
                      <span className="training-grade"> &nbsp;•&nbsp; Grade: {t.grade}</span>
                    </p>
                  </div>
                  <span className="training-period-badge">{t.period}</span>
                </div>

                <p className="training-desc">{t.desc}</p>

                {t.bullets && t.bullets.length > 0 && (
                  <ul className="training-bullets">
                    {t.bullets.map((b, j) => (
                      <li key={j} className="training-bullet-item">
                        <span className="bullet-arrow">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {t.certLink && t.certLink !== "#" && (
                  <a
                    href={t.certLink}
                    target="_blank"
                    rel="noreferrer"
                    className="training-cert-link"
                  >
                    View Certificate ↗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
