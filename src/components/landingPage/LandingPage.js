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
      title: "White Rice",
      text: "Rice, stew and chicken",
      price: 2300,
      imageUrl: "https://i.ibb.co/XXLmjtN/image.png",
    },
    {
      id: 2,
      title: "Vegetable with Beef",
      text: "Vegetable soup with beef",
      price: 1700,
      imageUrl: "https://i.ibb.co/VvhF4b3/image-3.png",
    },
    {
      id: 3,
      title: "Amala",
      text: "Amala with ewedu soup",
      price: 2000,
      imageUrl: "https://i.ibb.co/t4kxrG2/image-5.png",
    },
    {
      id: 4,
      title: "Nkwobi",
      text: "Delicious nkwobi",
      price: 1300,
      imageUrl: "https://i.ibb.co/VtFw8bb/image-6.png",
    },
    {
      id: 5,
      title: "Coca cola",
      text: "Soft drink",
      price: 550,
      imageUrl: "https://i.ibb.co/sRLdnDp/image-7.png",
    },
    {
      id: 6,
      title: "Fish",
      text: "Grilled cat fish",
      price: 1400,
      imageUrl: "https://i.ibb.co/y8tY5bc/image-9.png",
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
