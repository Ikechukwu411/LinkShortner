import React from "react";
import { FaGripfire } from "react-icons/fa";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer" style={{ backgroundColor: "#111135" }}>
        <div>
          <span>
            <FaGripfire size={25} color="white" />
          </span>
          <span className="is-size-4" style={{ color: "white" }}>
            SnapUrl
          </span>
        </div>
        <p style={{ color: "white" }}>&copy; 2023 SnapUrl.com</p>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
