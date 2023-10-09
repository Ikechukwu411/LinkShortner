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
            <div className="columns  box">
              <div
                className="column mr-2  mb-3 is-full-mobile has-text-centered"
                style={{ border: "1px solid gray" }}
              >
                <div className="columns">
                  <span
                    className="column is-3"
                    style={{ background: "#F3F9FE" }}
                  >
                    <img src={image1} alt="" width={250} />
                  </span>
                  <span className="column">
                    <p>Make It Short</p>
                    <Link to="/link" className="button mt-2 is-link is-light">
                      Go to Link
                    </Link>
                  </span>
                </div>
              </div>
              <div
                className="column mr-2  mb-3 is-full-mobile has-text-centered"
                style={{ border: "1px solid gray" }}
              >
                <div className="columns">
                  <span className="column">
                    <img src={image1} alt="" width={250} />
                  </span>
                  <span className="column">
                    <p>Make It Short</p>
                    <Link to="/link" className="button mt-2 is-link is-light">
                      Go to Link
                    </Link>
                  </span>
                </div>
              </div>
              <div
                className="column mr-2  mb-3 is-full-mobile has-text-centered"
                style={{ border: "1px solid gray" }}
              >
                <div className="columns">
                  <span className="column">
                    <img src={image1} alt="" width={250} />
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
            <div className="columns mt-6">
              <div className="column box mx-3">
                <h3
                  className="is-size-5 has-text-weight-bold"
                  style={{ color: "#273144" }}
                >
                  Usage This Month
                </h3>
                <div className="columns is-mobile mt-3">
                  <div className="column ">
                    <p>Short Links</p>
                  </div>
                  <div className="column has-text-weight-bold ">
                    <p>1 0f 10used</p>
                  </div>
                </div>
                <progress className="progress is-link" value="10" max="100">
                  30%
                </progress>
              </div>
              <div className="column box mx-3"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
