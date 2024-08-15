import React from "react";
import "./ComplaintCard.css";

// Define the types for the props
interface ComplaintCardProps {
  title: string;
  description: string;
  status: string;
  statusColor: string;
  assignedTo: string;
  completedOn: string;
}

// Use the defined types in your functional component
const ComplaintCard: React.FC<ComplaintCardProps> = ({
  title,
  description,
  status,
  statusColor,
  assignedTo,
  completedOn,
}) => (
  <div className="complaint-card">
    <div className="card-header">
      <span>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </span>
      <span className="otp">
        <p>6358</p>
      </span>
    </div>
    <div className="card-content">
      <div className="card-info">
        <span>Status:</span>
        <span className={`status-text ${statusColor}`}>{status}</span>
      </div>
      <div className="card-info">
        <span>Assigned To:</span>
        <span>{assignedTo}</span>
      </div>
      <div className="card-info">
        <span>Completed On:</span>
        <span>{completedOn}</span>
      </div>
      {status === "Completed" && (
        <button className="feedback-button">Provide Feedback</button>
      )}
    </div>
  </div>
);

export default ComplaintCard;
