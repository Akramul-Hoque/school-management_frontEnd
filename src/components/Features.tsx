export default function Features() {
  return (
    <div className="row g-4">
      <div className="col-md-4">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">Academic Excellence</h5>
            <p className="card-text">
              Strong programs, experienced faculty, and vibrant research.
            </p>
            <a href="#" className="btn btn-primary">
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">Student Life</h5>
            <p className="card-text">
              Clubs, events, and a welcoming campus community.
            </p>
            <a href="#" className="btn btn-primary">
              See events
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">Admissions</h5>
            <p className="card-text">
              Join our next intake — apply online or visit campus.
            </p>
            <a href="#admissions" className="btn btn-primary">
              Apply
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
