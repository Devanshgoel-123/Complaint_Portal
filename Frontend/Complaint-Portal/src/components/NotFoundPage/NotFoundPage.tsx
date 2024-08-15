import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="not-found-description">
          It might have been removed, or you might have mistyped the address.
        </p>
        <div className="btn-grp">
          <Link to="/student" className="not-found-button">
            Go to Student Portal
          </Link>
          <Link to="/worker" className="not-found-button">
            Go to Worker Portal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
