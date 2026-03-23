import { Suspense } from "react";
import { motion } from "framer-motion";
import { skillsData } from "../constants";
import SkillsCanvas from "./canvas/SkillsCanvas";

const Skills = () => {
  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="section-label">What I Know</p>
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            I've worked with a range of technologies in the web development ecosystem.
            From frontend frameworks to backend services and cloud infrastructure.
          </p>
          <div className="divider" />
        </motion.div>

        {/* 3D Tech Balls */}
        <motion.div
          className="skills-3d-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Suspense fallback={
            <div style={{ height: "350px", display: "flex", alignItems: "center", justifyContent: "center", color: "#aab4be" }}>
              Loading 3D scene...
            </div>
          }>
            <SkillsCanvas />
          </Suspense>
        </motion.div>

        {/* Skill Category Cards */}
        <div className="skills-grid">
          {skillsData.map((cat, i) => (
            <motion.div
              className="skill-category-card"
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="skill-cat-icon">{cat.icon}</div>
              <h3 className="skill-cat-title">{cat.title}</h3>
              <div className="skill-tags">
                {cat.tags.map((tag, j) => (
                  <span className={`skill-tag ${tag.type}`} key={j}>
                    {tag.label}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
