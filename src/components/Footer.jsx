import { socials } from "../constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">{"<"}AK{"/>"}</div>

        <p className="footer-text">
          © {year} Anshul Kumar. Built with ❤️ using React &amp; Three.js
        </p>

        <div className="footer-socials">
          {socials.map((s, i) => (
            <a
              key={i}
              className="social-btn"
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              title={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
