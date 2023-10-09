import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import Classes from "../Components/Navbar.module.css";
import Paul from "../assets/ike.jpg";
import Chibuu from "../assets/chibuu.jpg";
import Franklin from "../assets/Franklin.jpg";
import "../index.css";

const reviewData = [
  {
    image: Chibuu,
    name: "David Chibueze",
    Job: "Software Engineer",
    comment: `"This is the best Platform to shorten Link"`,
  },
  {
    image: Paul,
    name: "Paul Ikenna",
    Job: "Front-end Web Developer",
    comment: `"This is the best Platform to shorten Link"`,
  },
  {
    image: Franklin,
    name: "Franklin Isaac",
    Job: "Software Engineer",
    comment: `"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, modi sapiente, dolorem corporis tempora vero, autem hic ratione"`,
  },
];

const Carousel = () => {
  const [count, setCount] = useState(0);
  const style = { color: "#111135", fontWeight: "bold" };
  const style2 = { color: "#d44817", fontWeight: "bold" };

  const nextBtn = () => {
    setCount(count + 1);
    if (count > reviewData.length - 2) {
      setCount(2);
    }
  };

  const preViewbtn = () => {
    setCount(count - 1);
    if (count < reviewData.length - 2) {
      setCount(0);
    }
  };

  return (
    <React.Fragment>
      <section className=" section">
        <div className={`container has-text-centered containerSub `}>
          <div className="column">
            <h3
              className="is-size-3-desktop is-size-5-mobile mb-3"
              style={style}
            >
              What SnapUrl Customers Are Saying
            </h3>
            <div className={`card box ${Classes.review}`}>
              <img
                className="is-rounded"
                src={reviewData[count].image}
                width={100}
              />

              <h1 style={style}>{reviewData[count].name}</h1>
              <h2 style={style2} className="is-size-5">
                {reviewData[count].Job}
              </h2>
              <p className="mb-3">{reviewData[count].comment}</p>
              <button
                className="mr-3"
                onClick={preViewbtn}
                style={{ border: "none", cursor: "pointer" }}
              >
                <FaAngleLeft size={30} color="#d44817" />
              </button>
              <button
                className="ml-3"
                onClick={nextBtn}
                style={{ border: "none", cursor: "pointer" }}
              >
                <FaAngleRight size={30} color="#d44817" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Carousel;
