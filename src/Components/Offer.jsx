import React from "react";
import Classes from "../Components/Navbar.module.css";

const Offer = () => {
  const offerText = `More than a free link shortener`;

  return (
    <React.Fragment>
      <section className="section" style={{ backgroundColor: "#D8EFF4" }}>
        <div className="container has-text-centered">
          <h3
            className="is-size-3-desktop is-size-4-mobile pb-4"
            style={{ color: "#111135", fontWeight: "bold" }}
          >
            {offerText}
          </h3>
          <button className={`button ${Classes.btnheader}`}>
            Get Started For Free
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Offer;
