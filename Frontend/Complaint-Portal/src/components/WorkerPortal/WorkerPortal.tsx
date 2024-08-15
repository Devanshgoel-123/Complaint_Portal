import React from "react";
import "./WorkerPortal.css"; // Ensure you create this CSS file for styling

interface ComplaintCardProps {
  title: string;
  description: string;
  status: string;
  date: string;
}

interface CompletedComplaintCardProps {
  title: string;
  description: string;
  completedDate: string;
  rating: number;
}

const ComplaintCard: React.FC<ComplaintCardProps> = ({
  title,
  description,
  status,
  date,
}) => {
  return (
    <div className="card">
      <div className="worker-card-header">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-content">
        <div className="card-detail">
          <span>Status:</span>
          <span className={`status-${status.toLowerCase()}`}>{status}</span>
        </div>
        <div className="card-detail">
          <span>Submitted On:</span>
          <span>{date}</span>
        </div>
        <button className="card-button" onClick={() => {}}>
          Complete Complaint
        </button>
      </div>
    </div>
  );
};

const CompletedComplaintCard: React.FC<CompletedComplaintCardProps> = ({
  title,
  description,
  completedDate,
  rating,
}) => {
  return (
    <div className="card">
      <div className="worker-card-header">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-content">
        <div className="card-detail">
          <span>Status:</span>
          <span className="status-completed">Completed</span>
        </div>
        <div className="card-detail">
          <span>Completed On:</span>
          <span>{completedDate}</span>
        </div>
        <div className="card-detail">
          <span>Rating:</span>
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                className={`star ${index < rating ? "filled" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const WorkerPortal: React.FC = () => {
  return (
    <div className="container">
      <main className="main">
        <div className="content">
          <section className="section">
            <h2 className="section-title">Pending Complaints</h2>
            <div className="card-grid">
              <ComplaintCard
                title="Furniture Repair"
                description="John Doe, Hostel A, Room 101"
                status="Pending"
                date="2023-05-12"
              />
              <ComplaintCard
                title="Plumbing Issues"
                description="Jane Smith, Hostel B, Room 205"
                status="Pending"
                date="2023-05-10"
              />
              <ComplaintCard
                title="Electrical Issues"
                description="Michael Johnson, Hostel C, Room 301"
                status="Pending"
                date="2023-05-08"
              />
            </div>
          </section>
          <section className="section">
            <h2 className="section-title">Completed Complaints</h2>
            <div className="card-grid">
              <CompletedComplaintCard
                title="Furniture Repair"
                description="John Doe, Hostel A, Room 101"
                completedDate="2023-05-15"
                rating={4}
              />
              <CompletedComplaintCard
                title="Plumbing Issues"
                description="Jane Smith, Hostel B, Room 205"
                completedDate="2023-05-14"
                rating={3}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default WorkerPortal;
