import React, { useState } from "react";
import Classes from "./Navbar.module.css";
import "../Components/UrlShortner.css";

const UrlShortner = ({ getValue }) => {
  const [value, setValue] = useState("");
  const style = { color: "#111135", fontWeight: "bold" };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    getValue(value);
    setValue("");
  };

  return (
    <React.Fragment>
      <section className="section">
        <div className="container has-text-centered">
          <div className="card">
            <p className="is-size-4 mb-5 pt-5" style={style}>
              Shorten a long link
            </p>
            <form action="" onSubmit={submitHandle}>
              <div className="columns px-5">
                <div className="column is-four-fifths">
                  <input
                    onChange={onChangeHandler}
                    value={value}
                    type="text"
                    className="input is-medium"
                    placeholder="https://Example.shorten-a-long-link.shorten.it"
                  />
                </div>
                <div className="column auto">
                  <button className={`button is-medium ${Classes.btnheader}`}>
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
