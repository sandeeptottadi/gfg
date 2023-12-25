import React from "react";

export default function Footer() {
  return (
    <footer
      className="text-center text-lg-start text-dark"
      style={{ backgroundColor: "#fff" }}
    >
      <section
        className="p-4 text-white text-center"
        style={{ backgroundColor: "#1f1f1f" }}
      >
        <div>
          <span>Made with ❤️ By GFGSC-LIET</span>
        </div>
        <div className="footer-socials">
          <a href="https://twitter.com/GFGSCLIET" className="me-4">
            <i className="text-white fab fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com/@gfgsc-liet" className="me-4">
            <i className="text-white fab fa-youtube"></i>
          </a>
          <a href="https://www.instagram.com/gfgsc_liet/" className="me-4">
            <i className="text-white fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/gfgsc-liet/mycompany/"
            className="me-4"
          >
            <i className="text-white fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/GFGSC-LIET" className="me-4">
            <i className="text-white fab fa-github"></i>
          </a>
        </div>
      </section>
    </footer>
  );
}
