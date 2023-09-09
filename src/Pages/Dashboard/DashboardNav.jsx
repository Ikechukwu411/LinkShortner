import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import AuthContext from "../../../Context/AuthContext";
import "../../App.css";

const DashboardNav = () => {
  const { signOut } = useContext(AuthContext);

  const signOutHandler = () => {
    signOut();
  };

  return (
    <div>
      <nav
        className="navbar has-shadow"
        style={{ borderBottom: "1px solid rgb(208, 204, 204)" }}
      >
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-left">
              <Link
                to="/dashboard"
                className="navbar-item"
                style={{
                  color: "#FF6116",
                  fontWeight: "bold",
                  fontSize: "24px",
                }}
              >
                SnapUrl{" "}
              </Link>
            </div>
            <label htmlFor="menu-toggle" className="navbar-burger">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <input type="checkbox" id="menu-toggle" className="is-hidden" />
          <div className="navbar-end navbar-menu">
            <Link
              className="navbar-item is-tab is-hidden-tablet"
              to="/dashboard"
            >
              Home
            </Link>
            <Link className="navbar-item is-tab is-hidden-tablet" to="/link">
              Link
            </Link>
            <Link className="navbar-item is-tab is-hidden-tablet" to="/qrcode2">
              QRCode
            </Link>
            <Link className="navbar-item is-tab is-hidden-tablet" to="/bio">
              Bio
            </Link>
            <Link
              className="navbar-item is-tab is-hidden-tablet"
              to="/campaigns"
            >
              Campaigns
            </Link>
            <Link className="navbar-item is-tab is-hidden-tablet" to="/custom">
              customs
            </Link>
            <Link className="navbar-item is-tab is-hidden-tablet">
              Settings
            </Link>
            <Link to="/settings" className="navbar-item is-tab is-active">
              <span className="icon">
                <FaUserAlt />
              </span>
            </Link>
            <a className="navbar-item is-tab">
              <span className="icon">
                <FaSignOutAlt onClick={signOutHandler} />
              </span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashboardNav;
