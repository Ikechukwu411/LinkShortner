import React from "react";
import DashboardNav from "./DashboardNav";
import SideBar from "./SideBar";
import "../../../src/App.css";
import image1 from "../../assets/dashboard_lib.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div id="app">
      <DashboardNav />
      <section className="main-content columns is-fullheight">
        <SideBar />
        <div
          className="container column is-10"
          style={{ background: "#F4F6FA" }}
        >
          <h1 className="title ml-6 mt-4" style={{ color: "#273144" }}>
            Your Connections Platform
          </h1>
          <div className="section ">
            <div className="columns box">
              <div className="column" style={{ border: "1px solid gray" }}>
                <div className="columns">
                  <span className="column" style={{ background: "#F3F9FE" }}>
                    <img src={image1} alt="" />
                  </span>
                  <span className="column">
                    <p>Make It Short</p>
                    <Link to="/link" className="button mt-2 is-link is-light">
                      Go to Link
                    </Link>
                  </span>
                </div>
              </div>
              <div className="column" style={{ border: "1px solid gray" }}>
                <div className="columns">
                  <span className="column">
                    <img src={image1} alt="" />
                  </span>
                  <span className="column">
                    <p>Make It Short</p>
                    <Link to="/link" className="button mt-2 is-link is-light">
                      Go to Link
                    </Link>
                  </span>
                </div>
              </div>
              <div className="column" style={{ border: "1px solid gray" }}>
                <div className="columns">
                  <span className="column">
                    <img src={image1} alt="" />
                  </span>
                  <span className="column">
                    <p>Make It Short</p>
                    <Link to="/link" className="button mt-2 is-link is-light">
                      Go to Link
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            {/* Repeat the card sections as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
