import React from "react";
import FoodCard from "../card/foodCard";
import "./foods.scss";

function Food({ foods }) {
  return (
    <div className="container">
      <h1>What we have on today’s menu</h1>
      <div className="foods-container">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}

export default Food;
