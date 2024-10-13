import React from "react";
import "./how.scss";

const data = [
  {
    id: 1,
    title: "Choose Your Favorite Dish",
    text: "Browse our menu and pick from Nigeria's most loved dishes.",
    imageUrl: "/BowlSteam.svg",
  },
  {
    id: 2,
    title: "Place Your Order",
    text: "Order in seconds and pick your preferred delivery time.",
    imageUrl: "/Cherries.svg",
  },
  {
    id: 3,
    title: "Enjoy your Delicious Food",
    text: "Sit back as we deliver hot, authentic Nigerian food to you!",
    imageUrl: "/Hamburger.svg",
  },
];

function HowItWorks() {
  return (
    <div className="general">
      <h1>
        Here's How Ordering on <span>FastFood</span> Works
      </h1>
      <div className="wrapper">
        {data.map((item) => (
          <div key={item.id} className="wrapper-box">
            <img src={item.imageUrl} alt="icon" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
