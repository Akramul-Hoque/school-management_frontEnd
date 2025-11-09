import { useEffect, useState } from "react";

// ✅ Default gradient fallbacks
const DEFAULT_BACKGROUNDS: string[] = [
  "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
  "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
  "linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)",
];

export default function Hero() {
  // ✅ Load any images placed in src/assets/hero
  const imagesRecord = import.meta.glob("/src/assets/hero/*.{jpg,png,webp}", {
    eager: true,
    query: "?url",
    import: "default",
  }) as Record<string, string>;

  // ✅ Extract URLs and initialize slides
  const [slidesRaw, setSlidesRaw] = useState<string[]>(() => {
    const urls = Object.values(imagesRecord || {});
    return urls.length > 0 ? urls : DEFAULT_BACKGROUNDS;
  });

  // ✅ Check for public images only if no imported images exist
  useEffect(() => {
    if (slidesRaw !== DEFAULT_BACKGROUNDS) {
      return;
    }

    let mounted = true;
    const publicCandidate = "/hero/unnamed.webp";

    fetch(publicCandidate, { method: "HEAD" })
      .then((r) => {
        if (!mounted) return;
        if (r.ok) setSlidesRaw([publicCandidate]);
      })
      .catch(() => {
        // Keep using DEFAULT_BACKGROUNDS if fetch fails
      });

    return () => {
      mounted = false;
    };
  }, []);

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

  // ✅ Auto-slide logic
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slidesRaw.length <= 1) return;
    const t = setInterval(
      () => setCurrent((c) => (c + 1) % slidesRaw.length),
      6000
    );
    return () => clearInterval(t);
  }, [slidesRaw.length]);

  // ✅ Render
  return (
    <header id="home" className="hero-section">
      <div className="hero-slides">
        {slidesRaw.map((s, idx) => {
          const isUrl =
            s.startsWith("/") ||
            s.startsWith("http") ||
            s.match(/\.(jpg|png|webp)$/i);
          const bg = isUrl ? `url('${s}') center/cover no-repeat` : s;
          return (
            <div
              key={idx}
              className={`hero-slide ${idx === current ? "active" : ""}`}
              style={{ background: bg }}
            />
          );
        })}
      </div>

      <div className="hero-content container text-white">
        <h1 className="display-4 fw-bold">Welcome to CHJPHS</h1>
        <p className="lead">A place to learn, innovate and grow</p>
        <div className="mt-4">
          <a className="btn btn-light btn-lg me-2" href="#admissions">
            Apply Now
          </a>
          <a className="btn btn-outline-light btn-lg" href="#about">
            Learn More
          </a>
        </div>
      </div>
    </header>
  );
}
