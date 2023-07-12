import React from "react";
import { Outlet, Link } from "react-router-dom";
import Classes from "./Navbar.module.css";
import { FaGripfire } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import { FaQrcode } from "react-icons/fa";

const Navbar = () => {
  const style = { color: "#d44817" };
  return (
    <React.Fragment>
      <nav className={`navbar is-fixed-top ${Classes.navigation}`}>
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" style={style}>
            <span>
              <FaGripfire size={25} />
            </span>
            <span className="is-size-4">SnapUrl</span>
          </Link>
          <a className="navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <div
              className={`navbar-item has-dropdown is-hoverable ${Classes.navItem}`}
            >
              <a className={`navbar-link ${Classes.navItem}`}>Product</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  <span>
                    <BiLinkAlt />
                  </span>
                  <Link to="/linkmanager">Link Management</Link>
                </a>
                <hr className="divider" />
                <a className="navbar-item">
                  <span>
                    <FaQrcode />
                  </span>
                  <Link to="/qrcode">QR Code Generator</Link>
                </a>
              </div>
            </div>
            <Link to="/pricing" className={`navbar-item ${Classes.navItem}`}>
              Pricing
            </Link>
            <Link to="/resources" className={`navbar-item ${Classes.navItem}`}>
              Resources
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <button className="button" type="submit">
                Login
              </button>
            </div>
            <div className="navbar-item">
              <button className={`button ${Classes.btnSignUp}`}>
                {" "}
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </React.Fragment>
  );
};

export default Navbar;
