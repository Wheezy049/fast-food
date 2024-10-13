import React from "react";
import "./foodCard.scss";

function FoodCard({ food }) {
  const { title, text, price, imageUrl } = food;

  return (
    <div className="food-container">
      <div className="image-wrapper">
        <img src={imageUrl} alt="food" />
      </div>
      <div className="food-text">
        <h3>{title}</h3>
        <p>{text}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default FoodCard;
