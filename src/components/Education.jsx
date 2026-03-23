import { motion } from "framer-motion";
import { educationData } from "../constants";

const cardVariant = (i) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } },
});

const Education = () => {
  return (
    <section id="education" className="education-section section-padding">
      <div className="container">
        {/* ── Section Header ── */}
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Academic Background</p>
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            My academic journey from school to university — building a strong foundation in Computer Science.
          </p>
          <div className="divider" />
        </motion.div>

        {/* ── Education Timeline ── */}
        <div className="edu-timeline">
          {educationData.map((ed, i) => (
            <motion.div
              key={i}
              className="edu-timeline-item"
              variants={cardVariant(i)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div className="edu-timeline-dot">
                <span className="edu-dot-inner" />
              </div>

              {/* Card */}
              <div className="edu-card">
                <div className="edu-card-top">
                  <div className="edu-icon-wrap">
                    <span>{ed.icon}</span>
                  </div>
                  <div className="edu-info">
                    <h3 className="edu-institution">{ed.institution}</h3>
                    <p className="edu-degree">{ed.degree}</p>
                    <div className="edu-meta-row">
                      <span className="edu-score">{ed.score}</span>
                      <span className="edu-location">📍 {ed.location}</span>
                    </div>
                  </div>
                  <span className="edu-period-badge">{ed.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
