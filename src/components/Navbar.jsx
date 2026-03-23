import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Highlight active nav link based on scroll position
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        if (!section) return;
        if (
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActive(id);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          {"<"}AK{"/>"}
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                className={active === link.id ? "active" : ""}
                onClick={() => scrollTo(link.id)}
                href={`#${link.id}`}
              >
                {link.title}
              </a>
            </li>
          ))}
          <li>
            <a
              className="nav-cta"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
            >
              Hire Me
            </a>
          </li>
        </ul>

        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            style={{
              transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
            }}
          />
          <span
            style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? "scale(0)" : "none" }}
          />
          <span
            style={{
              transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
