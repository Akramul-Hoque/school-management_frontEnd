interface Notice {
  id: number;
  title: string;
  date: string;
  category: string;
  content: string;
}

const SAMPLE_NOTICES: Notice[] = [
  {
    id: 1,
    title: "2025-26 Academic Year Registration",
    date: "2025-11-10",
    category: "Academic",
    content:
      "Registration for the new academic year will begin on December 1st. Early registration discounts available until December 15th.",
  },
  {
    id: 2,
    title: "Annual Sports Day",
    date: "2025-11-08",
    category: "Events",
    content:
      "Annual Sports Day will be held on November 25th. All students are encouraged to participate.",
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting",
    date: "2025-11-07",
    category: "Meeting",
    content:
      "Quarterly parent-teacher meeting scheduled for November 15th from 9 AM to 3 PM.",
  },
  {
    id: 4,
    title: "Science Fair Projects Due",
    date: "2025-11-05",
    category: "Academic",
    content:
      "Final submission for Science Fair projects is due by November 20th. Submit your projects to respective department heads.",
  },
];

export default function NoticeBoard() {
  return (
    <section className="notice-board py-5 bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 fw-bold mb-3">
              <i className="bi bi-bell-fill text-primary me-3"></i>
              Notice Board
            </h2>
            <p className="lead text-muted">Stay updated with the latest announcements and events</p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-lg overflow-hidden rounded-4">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="py-3 ps-4" style={{ width: "150px" }}>Date</th>
                        <th className="py-3" style={{ width: "120px" }}>Category</th>
                        <th className="py-3">Title & Details</th>
                        <th className="py-3 pe-4 text-end" style={{ width: "100px" }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SAMPLE_NOTICES.map((notice, index) => (
                        <tr key={notice.id} className="notice-row" style={{ cursor: "pointer" }}>
                          <td className="ps-4 py-4">
                            <div className="d-flex flex-column">
                              <span className="fw-bold text-dark">{formatDate(notice.date).split(',')[0]}</span>
                              <span className="text-muted small">{formatDate(notice.date).split(',')[1]}</span>
                            </div>
                          </td>
                          <td>
                            <span
                              className={`badge rounded-pill bg-${getCategoryColor(
                                notice.category
                              )} bg-opacity-10 text-${getCategoryColor(notice.category)} px-3 py-2`}
                            >
                              {notice.category}
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center mb-1">
                              <h6 className="mb-0 fw-bold text-dark">{notice.title}</h6>
                              {index === 0 && (
                                <span className="badge bg-danger ms-2 animate-fade-in">NEW</span>
                              )}
                            </div>
                            <p className="mb-0 text-muted small text-truncate" style={{ maxWidth: "400px" }}>
                              {notice.content}
                            </p>
                          </td>
                          <td className="pe-4 text-end">
                            <button
                              className="btn btn-icon btn-light rounded-circle text-primary"
                              title="Read More"
                              style={{ width: "36px", height: "36px" }}
                            >
                              <i className="bi bi-arrow-right"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer bg-white p-3 text-center border-top-0">
                <a href="#notices" className="btn btn-link text-decoration-none fw-bold">
                  View All Notices <i className="bi bi-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getCategoryColor(category: string): string {
  switch (category.toLowerCase()) {
    case "academic":
      return "primary";
    case "events":
      return "success";
    case "meeting":
      return "info";
    default:
      return "secondary";
  }
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
