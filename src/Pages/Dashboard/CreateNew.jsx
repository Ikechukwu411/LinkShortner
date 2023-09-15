import DashboardNav from "./DashboardNav";
import SideBar from "./SideBar";
import "../../App.css";
import { useState } from "react";

const CreateNew = () => {
  const [isSubmitted, setisSubmitted] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    setisSubmitted(true);
  };

  return (
    <div id="app">
      <DashboardNav />
      <section className="main-content columns is-fullheight">
        <SideBar />
        <div className="container column is-10" style={{ background: "#fff" }}>
          <div className="section">
            <div className="container" style={{ width: "70%" }}>
              {!isSubmitted && (
                <form action="" onSubmit={handlesubmit}>
                  <div>
                    <p className="title mb-3" style={{ color: "#273144" }}>
                      Create New
                    </p>
                    <label htmlFor="destination">Destination</label>
                    <input
                      type="text"
                      className="input"
                      id="destination"
                      placeholder="https://anylink.com"
                    />
                    <p className="my-5">You can create 8 more link</p>
                    <label htmlFor="destination">Title (optional)</label>
                    <input
                      type="text"
                      className="input"
                      id="destination"
                      placeholder="https://anylink.com"
                    />
                  </div>
                  <button className="button my-3 is-info "> Create</button>
                </form>
              )}
              {isSubmitted && (
                <div>
                  {" "}
                  <p>Helllo</p>{" "}
                </div>
              )}
            </div>

            {/* <div className="card">
              <div className="card-header">
                <p className="card-header-title">Header</p>
              </div>
              <div className="card-content">
                <div className="content">Content</div>
              </div>
            </div>
            <br /> */}

            {/* Repeat the card sections as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateNew;
