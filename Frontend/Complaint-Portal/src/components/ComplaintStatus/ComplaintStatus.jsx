import React from "react";
import "./ComplaintStatus.css"; // Import the CSS file
import ComplaintCard from "../ComplaintCard/ComplaintCard"; // Import the ComplaintCard component
const ComplaintStatus = () => (
  <section className="complaint-status-section">
    <h2 className="section-title">Complaint Status</h2>
    <div className="card-grid">
      <ComplaintCard
        title="Furniture Repair"
        description="Hostel A, Room 101"
        status="Completed"
        statusColor="green"
        assignedTo="John Doe"
        completedOn="2023-05-15"
      />
      <ComplaintCard
        title="Plumbing Issues"
        description="Hostel B, Room 205"
        status="Pending"
        statusColor="yellow"
        assignedTo="Jane Smith"
        completedOn="2023-05-12"
      />
      <ComplaintCard
        title="Electrical Issues"
        description="Hostel C, Room 301"
        status="Pending"
        statusColor="red"
        assignedTo="Michael Johnson"
        completedOn="2023-05-10"
      />
      <ComplaintCard
        title="Electrical Issues"
        description="Hostel C, Room 301"
        status="Completed"
        statusColor="green"
        assignedTo="Michael Johnson"
        completedOn="2023-05-10"
      />
    </div>
  </section>
);

export default ComplaintStatus;
