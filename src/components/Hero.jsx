import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { heroData } from "../constants";
import HeroCanvas from "./canvas/HeroCanvas";

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = heroData.roles[roleIndex];
    const speed = isDeleting ? 50 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
        if (charIdx + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
        if (charIdx - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((r) => (r + 1) % heroData.roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="home" className="hero">
      <div className="hero-canvas">
        <HeroCanvas />
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="tag" variants={itemVariants}>
            <span className="dot" />
            {heroData.greeting}
          </motion.div>

          <motion.h1 className="hero-name" variants={itemVariants}>
            Hi, I'm{" "}
            <span className="gradient-text">{heroData.name}</span>
          </motion.h1>

          <motion.div className="hero-role" variants={itemVariants}>
            I'm a{" "}
            <span className="typed-role">
              {displayed}
              <span className="cursor" style={{ animation: "blink 1s infinite", color: "#06b6d4" }}>|</span>
            </span>
          </motion.div>

          <motion.p className="hero-desc" variants={itemVariants}>
            {heroData.description}
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a className="btn-primary" href="#projects" onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}>
              View My Work
              <span>→</span>
            </a>
            <a className="btn-glass" href={heroData.resumeViewLink} target="_blank" rel="noreferrer">
              View CV
              <span>👁️</span>
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            {heroData.stats.map((s, i) => (
              <div className="stat" key={i}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-3d"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Additional 3D decorative element (the canvas is in the bg) */}
          <div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "1.5rem",
            position: "relative",
          }}>
            <div style={{
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, rgba(124,58,237,0.35) 0%, rgba(6,182,212,0.1) 60%, transparent 80%)",
              border: "1.5px solid rgba(124,58,237,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 80px rgba(124,58,237,0.2)",
              fontSize: "7rem",
              animation: "float 4s ease-in-out infinite",
            }}>
              👨‍💻
            </div>
            {/* Orbit ring decoration */}
            <div style={{
              position: "absolute",
              width: "340px",
              height: "340px",
              borderRadius: "50%",
              border: "1px dashed rgba(124,58,237,0.25)",
              animation: "spin 12s linear infinite",
            }} />
            <div style={{
              position: "absolute",
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              border: "1px dashed rgba(6,182,212,0.15)",
              animation: "spin 20s linear infinite reverse",
            }} />
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>

      <style>{`
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-18px); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
};

export default Hero;
