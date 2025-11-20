import { useEffect, useState } from "react";
import heroBg from "../assets/hero/unnamed.webp";

// ✅ Default gradient fallbacks
const DEFAULT_BACKGROUNDS: string[] = [
  heroBg, // Use the imported image as the first default
  "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
  "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
  "linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)",
];

export default function Hero() {
  // ✅ Load any images placed in src/assets/hero
  const imagesRecord = import.meta.glob("../assets/hero/*.{jpg,png,webp}", {
    eager: true,
    as: "url",
  }) as Record<string, string>;

  // ✅ Extract URLs and initialize slides
  const [slidesRaw] = useState<string[]>(() => {
    const urls = Object.values(imagesRecord || {});
    // If glob finds images, use them. Otherwise use DEFAULT_BACKGROUNDS which now includes the explicit import.
    return urls.length > 0 ? urls : DEFAULT_BACKGROUNDS;
  });

  // ✅ Preload images for smooth transitions
  useEffect(() => {
    slidesRaw.forEach((s) => {
      if (
        s.startsWith("/") ||
        s.startsWith("http") ||
        s.match(/\.(jpg|png|webp)$/i)
      ) {
        const img = new Image();
        img.src = s;
      }
    });
  }, [slidesRaw]);

  // ✅ Auto-slide logic with previous slide tracking
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(slidesRaw.length - 1);

  useEffect(() => {
    if (slidesRaw.length <= 1) return;
    const t = setInterval(() => {
      setPrev(current);
      setCurrent((c) => (c + 1) % slidesRaw.length);
    }, 5000);
    return () => clearInterval(t);
  }, [slidesRaw.length, current]);

  // ✅ Render
  return (
    <header id="home" className="hero-section position-relative overflow-hidden" style={{ height: "100vh" }}>
      <div className="hero-slides position-absolute w-100 h-100 top-0 start-0">
        {slidesRaw.map((s, idx) => {
          const isUrl =
            s.startsWith("/") ||
            s.startsWith("http") ||
            s.match(/\.(jpg|png|webp)$/i) ||
            s.includes("data:image"); // Handle imported assets which might be base64 or paths
            
          const bg = isUrl ? `url('${s}') center/cover no-repeat` : s;
          return (
            <div
              key={idx}
              className={`hero-slide position-absolute w-100 h-100 top-0 start-0 transition-opacity duration-1000 ${
                idx === current ? "opacity-100" : "opacity-0"
              }`}
              style={{ 
                background: bg,
                transition: "opacity 1s ease-in-out",
                zIndex: idx === current ? 1 : 0
              }}
            />
          );
        })}
        {/* Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(0,0,0,0.5)", zIndex: 2 }}></div>
      </div>

      <div className="hero-content container position-relative d-flex flex-column justify-content-center h-100 text-white" style={{ zIndex: 3 }}>
        <div className="row">
          <div className="col-lg-8">
            <h1 className="display-3 fw-bold mb-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Welcome to <span className="text-gradient" style={{ background: "linear-gradient(45deg, #4cc9f0, #4361ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>CHJPHS</span>
            </h1>
            <p className="lead mb-5 fs-4 animate-slide-up" style={{ animationDelay: "0.4s", maxWidth: "600px" }}>
              A place to learn, innovate, and grow. We nurture the leaders of tomorrow with excellence in education and character.
            </p>
            <div className="d-flex gap-3 animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <a 
                className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-lg fw-semibold" 
                href="#admissions"
                style={{ background: "var(--primary-color)", border: "none" }}
              >
                Apply Now
              </a>
              <a 
                className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-semibold glass-panel" 
                href="#about"
                style={{ backdropFilter: "blur(5px)" }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
