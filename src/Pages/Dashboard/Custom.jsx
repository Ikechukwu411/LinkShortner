import React from "react";
import DashboardNav from "./DashboardNav";
import SideBar from "./SideBar";
import "../../App.css";
const Custom = () => {
  return (
    <div id="app">
      <DashboardNav />
      <section className="main-content columns is-fullheight">
        <SideBar />
        <div
          className="container column is-10"
          style={{ background: "#F4F6FA" }}
        >
          <div className="section">
            <div className="card">
              <div className="card-header">
                <p className="card-header-title">Header</p>
              </div>
              <div className="card-content">
                <div className="content">Content</div>
              </div>
            </div>
            <br />

            {/* Repeat the card sections as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Custom;
