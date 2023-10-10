import React, { useState, useRef, useEffect, useContext } from "react";
import Classes from "../Components/Navbar.module.css";
import headerImage from "../assets/backgroundImage-removebg-preview.png";
import UrlShortner from "../Components/UrlShortner";
import Cards from "../Components/Cards";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import "../Pages/Home.css";
import "animate.css";
import Offer from "../Components/Offer";
import { Link } from "react-router-dom";
import ScrollSwiper from "../Components/ScrollSwiper";

// import MovableSlider from "../Components/MovableSlider";

const Home = () => {
  // const [isIntersecting, setIntersecting] = useState(false);

  const [link, setLink] = useState("");
  const ref = useRef(null);

  const getValue = (val) => {
    setLink(val);
    console.log(`link is located at the home component`);
  };
  console.log(link);

  useEffect(() => {
    const allsection = document.querySelectorAll(".section");
    const revealSection = function (entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      entry.target.classList.remove("section-hidden");
      observer.unobserve(entry.target);
    };
    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.09,
    });

    allsection.forEach((section) => {
      sectionObserver.observe(section);
      section.classList.add("section-hidden");
    });
  }, []);

  const style = { color: "#111135" };
  const heroMessage = `Simplify Links, Maximize Engagement`;
  const description = `We understand the value of simplicity and efficiency when it
  comes to sharing links. That's why we offer a user-friendly
  platform that allows you to shorten long, cumbersome URLs into
  concise, easy-to-share links.`;
  const btnText = `Get Started For Free`;
  return (
    <React.Fragment>
      <div>
        <header className={`Hero pt-5 ${Classes.header}`}>
          <div className="container">
            <div className={`columns pt-6 m-3 ${Classes}`} ref={ref}>
              <div className="column has-text-centered-mobile animate__animated animate__backInLeft animate__slow 2s">
                <h1
                  className="is-size-2-desktop is-size-5-mobile has-text-weight-bold "
                  style={style}
                >
                  {heroMessage}
                </h1>
                <p
                  style={style}
                  className="mt-5 is-size-5  is-size-6-mobile has-text-centered-mobile"
                >
                  {description}
                </p>
                <Link
                  to="/login"
                  className={`button is-medium is-responsive mt-5  ${Classes.btnheader}`}
                >
                  {btnText}
                </Link>
              </div>
              <div className="column animate__animated animate__backInRight animate__slow 2s">
                <img src={headerImage} alt="" />
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="up has-text-centered-mobile section ">
            <UrlShortner getValue={getValue} />
          </div>
          <div className="up has-text-centered-mobile section ">
            <Cards />
          </div>
          <div className=" up has-text-centered-mobile section ">
            <Carousel />
          </div>
          <div className="up has-text-centered-mobile section ">
            <Offer />
          </div>
          <div>{/* <ScrollSwiper /> */}</div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Home;
