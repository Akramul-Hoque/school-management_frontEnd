export default function Features() {
  const features = [
    {
      title: "Academic Excellence",
      description: "Strong programs, experienced faculty, and vibrant research opportunities that challenge and inspire.",
      icon: "bi-mortarboard",
      color: "primary",
      link: "#"
    },
    {
      title: "Student Life",
      description: "A vibrant community with diverse clubs, events, and activities that foster personal growth.",
      icon: "bi-people",
      color: "success",
      link: "#"
    },
    {
      title: "Admissions",
      description: "Join our next intake. We welcome students from all backgrounds to apply and join our family.",
      icon: "bi-file-earmark-text",
      color: "info",
      link: "#admissions"
    }
  ];

  return (
    <div className="row g-4">
      {features.map((feature, index) => (
        <div className="col-md-4" key={index}>
          <div 
            className="card h-100 border-0 shadow-sm hover-card" 
            style={{ 
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              borderRadius: "1rem",
              overflow: "hidden"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "var(--shadow-lg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "var(--shadow-sm)";
            }}
          >
            <div className="card-body p-4 text-center">
              <div 
                className={`d-inline-flex align-items-center justify-content-center mb-4 rounded-circle bg-${feature.color} bg-opacity-10 text-${feature.color}`}
                style={{ width: "80px", height: "80px", fontSize: "2rem" }}
              >
                <i className={`bi ${feature.icon}`}></i>
              </div>
              <h3 className="card-title h4 fw-bold mb-3">{feature.title}</h3>
              <p className="card-text text-muted mb-4">
                {feature.description}
              </p>
              <a href={feature.link} className={`btn btn-outline-${feature.color} rounded-pill px-4`}>
                Learn more
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
