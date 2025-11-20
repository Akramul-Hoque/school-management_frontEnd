export default function SiteFooter() {
  return (
    <footer className="bg-dark text-white py-5 mt-auto">
      <div className="container">
        <div className="row gy-4 mb-5">
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3 text-white">CHJPHS</h5>
            <p className="text-white-50 mb-4">
              Empowering students to achieve their full potential through excellence in education and character development.
            </p>
            <div className="d-flex gap-3">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "36px", height: "36px" }}
                >
                  <i className={`bi bi-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3 text-white">Quick Links</h6>
            <ul className="list-unstyled">
              {["Home", "About Us", "Admissions", "Academics", "Contact"].map((item) => (
                <li className="mb-2" key={item}>
                  <a href="#" className="text-white-50 text-decoration-none hover-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3 text-white">Contact Us</h6>
            <ul className="list-unstyled text-white-50">
              <li className="mb-3 d-flex">
                <i className="bi bi-geo-alt me-2 mt-1"></i>
                <span>123 Campus Drive<br />Education City, ST 12345</span>
              </li>
              <li className="mb-3 d-flex">
                <i className="bi bi-telephone me-2 mt-1"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="d-flex">
                <i className="bi bi-envelope me-2 mt-1"></i>
                <span>info@chjphs.edu</span>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3 text-white">Newsletter</h6>
            <p className="text-white-50 mb-3 small">Subscribe to get the latest news and updates.</p>
            <form className="d-flex gap-2">
              <input 
                type="email" 
                className="form-control form-control-sm bg-dark border-secondary text-white" 
                placeholder="Your email"
              />
              <button className="btn btn-primary btn-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-top border-secondary pt-4">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0 text-white-50 small">
                © {new Date().getFullYear()} CHJPHS. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <ul className="list-inline mb-0 small">
                <li className="list-inline-item">
                  <a href="#" className="text-white-50 text-decoration-none">Privacy Policy</a>
                </li>
                <li className="list-inline-item mx-2 text-white-50">|</li>
                <li className="list-inline-item">
                  <a href="#" className="text-white-50 text-decoration-none">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
