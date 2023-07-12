import React from "react";
import Classes from "./Navbar.module.css";
import CardContainer from "./CardContainer";

const cardsData = [
  {
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
    name: "Pricing",
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
          <div className="columns">{newData}</div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Cards;
