import React from "react";
import Classes from "../Components/Navbar.module.css";
import headerImage from "../assets/backgroundImage-removebg-preview.png";
import UrlShortner from "../Components/UrlShortner";
import Cards from "../Components/Cards";

const Home = () => {
  const style = { color: "#111135" };
  const heroMessage = `Simplify Links, Maximize Engagement`;
  const description = `We understand the value of simplicity and efficiency when it
  comes to sharing links. That's why we offer a user-friendly
  platform that allows you to shorten long, cumbersome URLs into
  concise, easy-to-share links.`;
  const btnText = `Get Started For Free`;
  return (
    <React.Fragment>
      <header className={`Hero pt-5 ${Classes.header}`}>
        <div className="container">
          <div className="columns pt-6">
            <div className="column">
              <h1
                className="is-size-2 has-text-weight-bold has-text-centered-mobile"
                style={style}
              >
                {heroMessage}
              </h1>
              <p
                style={style}
                className="mt-5 is-size-5 has-text-centered-mobile"
              >
                {description}
              </p>
              <button
                className={`button is-medium mt-5 has-text-centered-mobile ${Classes.btnheader}`}
              >
                {btnText}
              </button>
            </div>
            <div className="column">
              <img src={headerImage} alt="" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <UrlShortner />
        <Cards />
      </main>
    </React.Fragment>
  );
};

export default Home;
