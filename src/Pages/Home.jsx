import React, { useState, useRef, useEffect } from "react";
import Classes from "../Components/Navbar.module.css";
import headerImage from "../assets/backgroundImage-removebg-preview.png";
import UrlShortner from "../Components/UrlShortner";
import Cards from "../Components/Cards";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import "../Pages/Home.css";
import Offer from "../Components/Offer";

const Home = () => {
  const [isIntersecting, setIntersecting] = useState(false);
  const [link, setLink] = useState("");
  const ref = useRef(null);

  const getValue = (val) => {
    setLink(val);
    console.log(`link is located at the home component`);
  };
  console.log(link);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: "-100px",
      }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.add("slide-in");
      });
    } else {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove("slide-in");
      });
    }
  }, [isIntersecting]);

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
          <div className={`columns pt-6 ${Classes.remove}`} ref={ref}>
            <div className="column has-text-centered-mobile">
              <h1
                className="is-size-2-desktop is-size-4-mobile has-text-weight-bold has-text-centered-mobile"
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
              <button className={`button is-medium mt-5  ${Classes.btnheader}`}>
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
        <UrlShortner getValue={getValue} />
        <Cards />
        <Carousel />
        <Offer />
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default Home;
