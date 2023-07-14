import React, { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import Classes from "./Navbar.module.css";
import { FaGripfire } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import { FaQrcode } from "react-icons/fa";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(false);
  };
  const style = { color: "#d44817" };
  return (
    <React.Fragment>
      <nav className={`navbar is-fixed-top ${Classes.navigation}`}>
        <div className="navbar-brand">
          <Link
            to="/"
            className="navbar-item"
            style={style}
            onClick={handleClick}
          >
            <span>
              <FaGripfire size={25} />
            </span>
            <span className="is-size-4">SnapUrl</span>
          </Link>
          <a
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            style={{ color: "#d44817" }}
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
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
                  <Link to="/linkmanager" onClick={handleClick}>
                    Link Management
                  </Link>
                </a>
                <hr className="divider" />
                <a className="navbar-item">
                  <span>
                    <FaQrcode />
                  </span>
                  <Link to="/qrcode" onClick={handleClick}>
                    QR Code Generator
                  </Link>
                </a>
              </div>
            </div>
            <NavLink
              activeClassName={Classes.active}
              to="/pricing"
              className={`navbar-item ${Classes.navItem}`}
              onClick={handleClick}
            >
              Pricing
            </NavLink>
            <NavLink
              activeClassName={Classes.active}
              to="/resources"
              className={`navbar-item ${Classes.navItem}`}
              onClick={handleClick}
            >
              Resources
            </NavLink>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <button className="button" type="submit" onClick={handleClick}>
                Login
              </button>
            </div>
            <div className="navbar-item">
              <button
                className={`button ${Classes.btnheader}`}
                onClick={handleClick}
              >
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
