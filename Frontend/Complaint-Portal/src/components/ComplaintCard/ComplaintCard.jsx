import React from "react";
import "./ComplaintCard.css";
const ComplaintCard = ({
  title,
  description,
  status,
  statusColor,
  assignedTo,
  completedOn,
}) => (
  <div className="card">
    <div className="card-header">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
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
