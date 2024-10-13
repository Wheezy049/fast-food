import React, { useContext, useState } from "react";
import "./menu.scss";
import InputForm from "../inputForm/InputForm";
import { UserContext } from "../context/context";

const menuItems = [
  {
    id: 1,
    title: "Jollof Rice",
    text: "Rice, chicken",
    price: 500,
    imageUrl: "/food-2.svg",
    category: "Rice Dishes",
  },
  {
    id: 2,
    title: "Doughnut",
    text: "Rice, chicken",
    price: 500,
    imageUrl: "/food-2.svg",
    category: "Small chops",
  },
  {
    id: 3,
    title: "Amala",
    text: "Rice, chicken",
    price: 500,
    imageUrl: "/food-2.svg",
    category: "Soup",
  },
  {
    id: 4,
    title: "Soda",
    text: "Rice, chicken",
    price: 500,
    imageUrl: "/food-2.svg",
    category: "Drink",
  },
  {
    id: 5,
    title: "Wings",
    text: "Rice, chicken",
    price: 500,
    imageUrl: "/food-2.svg",
    category: "Chicken",
  },
  {
    id: 6,
    title: "Semo",
    text: "Rice, chicken",
    price: 500,
    imageUrl: "/food-2.svg",
    category: "Grilled & Fried",
  },
];

function Menu(item) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { addToCart } = useContext(UserContext);

  const categories = [
    "All",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  const filteredItems = menuItems.filter(
    (item) =>
      (selectedCategory === "All" || item.category === selectedCategory) &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu">
      <div className="menu-search">
        <h2>Explore Our Menu</h2>
        <InputForm
          type="text"
          name="searchTerm"
          placeholder="Enter food to search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-4" style={{ display: "flex" }}>
        {filteredItems.map((item) => (
          <div key={item.id} className="food-container">
            <div className="image-wrapper">
              <img src={item.imageUrl} alt="food" />
            </div>
            <div className="food-text">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="flex-5">
                <span>{item.price}</span>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
