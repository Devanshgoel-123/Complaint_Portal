import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <h3>
        Made with{" "}
        <span>
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "red", fontSize: "1rem", paddingInline: "0.3rem" }}
          />
        </span>{" "}
        by Devansh & Rohan
      </h3>
    </div>
  );
};

export default Footer;
