import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, projectCategories } from "../constants";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      layout
    >
      <div className="project-img">
        <span style={{ position: "relative", zIndex: 1 }}>{project.emoji}</span>
        <div className="project-overlay">
          <a
            className="project-link-btn code"
            href={project.codeLink}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            View Code →
          </a>
        </div>
      </div>

      <div className="project-body">
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span className="project-tech-tag" key={i}>
              {tag}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.4rem" }}>
          <h3 className="project-title" style={{ marginBottom: 0 }}>{project.title}</h3>
          {project.type && (
            <span style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              padding: "0.2rem 0.7rem",
              borderRadius: "50px",
              background: project.type === "DSA Project"
                ? "rgba(245,158,11,0.12)"
                : project.type === "Academic Project"
                ? "rgba(6,182,212,0.12)"
                : "rgba(124,58,237,0.12)",
              color: project.type === "DSA Project"
                ? "var(--accent)"
                : project.type === "Academic Project"
                ? "var(--secondary)"
                : "var(--primary-light)",
              border: `1px solid ${project.type === "DSA Project"
                ? "rgba(245,158,11,0.3)"
                : project.type === "Academic Project"
                ? "rgba(6,182,212,0.3)"
                : "rgba(124,58,237,0.3)"}`,
              whiteSpace: "nowrap",
            }}>
              {project.type}
            </span>
          )}
        </div>
        <p className="project-desc">{project.description}</p>

        {/* CV Bullet Points */}
        {project.bullets && project.bullets.length > 0 && (
          <ul style={{
            marginTop: "0.85rem",
            paddingLeft: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
          }}>
            {project.bullets.map((b, i) => (
              <li key={i} style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6, listStyleType: "none", paddingLeft: "0", display: "flex", alignItems: "flex-start", gap: "0.4rem" }}>
                <span style={{ color: "var(--primary-light)", flexShrink: 0, marginTop: "2px" }}>▸</span>
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Here are some of the things I've built. Each project is a unique
            challenge that helped me grow as a developer.
          </p>
          <div className="divider" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="projects-filter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
