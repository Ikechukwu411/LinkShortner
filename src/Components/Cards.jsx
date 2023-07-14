import React from "react";
import Classes from "./Navbar.module.css";
import CardContainer from "./CardContainer";
import { FaQrcode } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { ImPriceTags } from "react-icons/im";

const cardsData = [
  {
    icon: <AiOutlineLink />,
    name: "Link Management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus nesciunt sequi? Sequi, magnam veritatis.",
    description2: "Popular Link Management Features",
    li1: "Url Shortening at scale",
    li2: "Custom links with your brand",
    li3: "Url Redirects",
    li4: "Advanced Analytics & tracking",
  },
  {
    icon: <FaQrcode />,
    name: "QR Codes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus nesciunt sequi? Sequi, magnam veritatis.",
    description2: "Popular QR Code Features",
    li1: "Fully customizable QR Codes",
    li2: "Dynamic QR Codes",
    li3: "QR Code types & destination options",
    li4: "Advanced analytics & tracking",
  },
  {
    icon: <ImPriceTags />,
    name: "Link Sharing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus nesciunt sequi? Sequi, magnam veritatis.",
    description2: "Lorem ipsum dolor sit",
    li1: "Url Shortening at scale",
    li2: "Custom links with your brand",
    li3: "Url Redirects",
    li4: "Advanced Analytics & tracking",
  },
];

const Cards = () => {
  const [datas, setData] = React.useState(cardsData);

  const newData = datas.map(function (data, index) {
    return <CardContainer key={index} {...data} />;
  });
  return (
    <React.Fragment>
      <section className={`section ${Classes.header}`}>
        <div className="container">
          <div
            className="is-size-4 has-text-centered pb-3"
            style={{ color: "#111135", fontWeight: "bold" }}
          >
            Our Services
          </div>
          <div className="columns">{newData}</div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Cards;
