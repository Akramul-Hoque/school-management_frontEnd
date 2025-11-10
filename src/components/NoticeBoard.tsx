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
    <section className="notice-board py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-4">
              <i className="bi bi-bell me-2"></i>
              Notice Board
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="table-responsive notice-table">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th style={{ width: "120px" }}>Date</th>
                    <th style={{ width: "120px" }}>Category</th>
                    <th>Title & Details</th>
                    <th style={{ width: "100px" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {SAMPLE_NOTICES.map((notice) => (
                    <tr key={notice.id} className="notice-row">
                      <td className="text-nowrap">{formatDate(notice.date)}</td>
                      <td>
                        <span
                          className={`badge bg-${getCategoryColor(
                            notice.category
                          )}`}
                        >
                          {notice.category}
                        </span>
                      </td>
                      <td>
                        <h6 className="mb-1">{notice.title}</h6>
                        <p className="mb-0 text-muted small">
                          {notice.content}
                        </p>
                      </td>
                      <td className="text-center">
                        <button
                          className="btn btn-sm btn-outline-primary"
                          title="Read More"
                        >
                          <i className="bi bi-arrow-right"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-end mt-3">
              <a href="#notices" className="btn btn-primary">
                View All Notices
              </a>
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
