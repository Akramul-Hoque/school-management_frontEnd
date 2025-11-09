export default function SiteFooter() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <strong>My University</strong>
          <div className="small">123 Campus Drive, City</div>
        </div>
        <div className="text-end small">
          <div>© {new Date().getFullYear()} My University</div>
          <div>
            <a className="text-white me-2" href="#">
              Privacy
            </a>
            <a className="text-white" href="#">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
