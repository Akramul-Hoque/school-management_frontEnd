import SiteNavbar from "../components/SiteNavbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import NoticeBoard from "../components/NoticeBoard";
import SiteFooter from "../components/SiteFooter";
import "../styles/landing.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <SiteNavbar />
      <main>
        <Hero />
        <NoticeBoard />
        <section className="container my-5">
          <Features />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
