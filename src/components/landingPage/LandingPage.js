import React from "react";
import "./landingPage.scss";
import Food from "../foods/Food";
import HowItWorks from "../howItsWorks/HowItWorks";
import Hero from "../hero/Hero";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";

function LandingPage() {
  const foods = [
    {
      id: 1,
      title: "Food",
      text: "Rice, chicken",
      price: 500,
      imageUrl: "/food-2.svg",
    },
    {
      id: 2,
      title: "Food",
      text: "Rice, chicken",
      price: 500,
      imageUrl: "/food-2.svg",
    },
    {
      id: 3,
      title: "Food",
      text: "Rice, chicken",
      price: 500,
      imageUrl: "/food-2.svg",
    },
    {
      id: 4,
      title: "Food",
      text: "Rice, chicken",
      price: 500,
      imageUrl: "/food-2.svg",
    },
    {
      id: 5,
      title: "Food",
      text: "Rice, chicken",
      price: 500,
      imageUrl: "/food-2.svg",
    },
    {
      id: 6,
      title: "Food",
      text: "Rice, chicken",
      price: 500,
      imageUrl: "/food-2.svg",
    },
  ];

  return (
    <>
      <div className="landing-page">
        <div className="hero">
          <h3>
            Enjoy the Taste of <span>Nigeria,</span> Delivered Freshly within
            minutes
          </h3>
          <img src="/food-1.svg" alt="food" />
        </div>
        <Food foods={foods} />
        <div style={{ backgroundColor: "#F1F1F1", width: "100%" }}>
          <div className="hero-2">
            <img src="/food-5.svg" alt="food" />
          </div>
          <HowItWorks />
          <Hero />
          <Footer />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default LandingPage;
