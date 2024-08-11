import React from "react";
import ContactCard from "../ContactCard/ContactCard";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <h2 className="title">Contact Information</h2>
      <div className="grid">
        <ContactCard
          title="Warden"
          name="John Doe"
          email="warden@university.edu"
          phone="+1 (123) 456-7890"
        />
        <ContactCard
          title="Superintendent"
          name="Jane Smith"
          email="superintendent@university.edu"
          phone="+1 (987) 654-3210"
        />
        <ContactCard
          title="Hostel Representative"
          name="Michael Johnson"
          email="carpenter@university.edu"
          phone="+1 (456) 789-0123"
        />
      </div>
    </section>
  );
};

export default ContactInfo;
