import React from "react";
import Classes from "./Navbar.module.css";

const UrlShortner = () => {
  const style = { color: "#111135", fontWeight: "bold" };
  return (
    <React.Fragment>
      <section className="section">
        <div className="container has-text-centered">
          <div className="card">
            <p className="is-size-4 mb-5 pt-5" style={style}>
              Shorten a long link
            </p>
            <form action="">
              <div className="columns px-5">
                <div className="column is-four-fifths">
                  <input
                    type="text"
                    className="input is-medium"
                    placeholder="https://Example.shorten-a-long-link.shorten.it"
                  />
                </div>
                <div className="column auto">
                  <button className={`button is-medium ${Classes.btnSignUp}`}>
                    Shorten URL
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default UrlShortner;
