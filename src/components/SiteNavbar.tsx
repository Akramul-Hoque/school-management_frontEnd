import { useEffect, useState } from "react";

export default function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${
        scrolled ? "glass-panel py-2" : "navbar-dark bg-transparent py-3"
      }`}
      style={{ transition: "all 0.3s ease" }}
    >
      <div className="container">
        <div className="d-flex align-items-center">
          <img
            src="/src/assets/logo/logo.png"
            alt="CHJPHS Logo"
            className="me-2"
            style={{ height: "40px", width: "auto" }}
          />
          <a className={`navbar-brand fw-bold ${scrolled ? "text-dark" : "text-white"}`} href="#">
            CHJPHS
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {["Home", "About", "Admissions", "Contact"].map((item) => (
              <li className="nav-item" key={item}>
                <a 
                  className={`nav-link px-3 fw-medium ${scrolled ? "text-dark" : "text-white"}`} 
                  href={`#${item.toLowerCase()}`}
                  style={{ position: "relative" }}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-3">
              <a 
                className={`btn btn-sm rounded-pill px-4 fw-semibold ${
                  scrolled ? "btn-primary" : "btn-light text-primary"
                }`} 
                href="#login"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
