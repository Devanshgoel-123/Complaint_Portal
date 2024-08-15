import React from "react";
import "./ContactCard.css";

interface ContactCardProps {
  title?: string;
  name: string;
  email: string;
  phone: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  name,
  email,
  phone,
}) => {
  return (
    <div className="contact-card">
      {title && (
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
        </div>
      )}
      <div className="card-content">
        <div className="card-content-inner">
          <div className="card-details">
            <div className="card-name">{name}</div>
            <div className="card-email">{email}</div>
            <div className="card-phone">{phone}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
