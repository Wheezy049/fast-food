import React, { useContext, useState } from "react";
import "./menu.scss";
import InputForm from "../inputForm/InputForm";
import { UserContext } from "../context/context";

const menuItems = [
  {
    id: 1,
    title: "White Rice",
    text: "Rice, stew and chicken",
    price: 2300,
    imageUrl: "https://i.ibb.co/XXLmjtN/image.png",
    category: "Rice Dishes",
  },
  {
    id: 2,
    title: "Vegetable with Beef",
    text: "Vegetable soup with beef",
    price: 1700,
    imageUrl: "https://i.ibb.co/VvhF4b3/image-3.png",
    category: "Soup",
  },
  {
    id: 3,
    title: "Amala",
    text: "Amala with ewedu soup",
    price: 2000,
    imageUrl: "https://i.ibb.co/t4kxrG2/image-5.png",
    category: "Swallow"
  },
  {
    id: 4,
    title: "Pounded Yam",
    text: "Pounded yam and efo riro",
    price: 3500,
    imageUrl: "https://i.ibb.co/VtFw8bb/image-6.png",
    category: "Swallow",
  },
  {
    id: 5,
    title: "Nkwobi",
    text: "Delicious nkwobi",
    price: 1300,
    imageUrl: "https://i.ibb.co/sRLdnDp/image-7.png",
    category: "Soup",
  },
  {
    id: 6,
    title: "Jollof Rice",
    text: " Party jollof rice, chicken",
    price: 4000,
    imageUrl: "https://i.ibb.co/y8tY5bc/image-9.png",
    category: "Rice Dishes",
  },
  {
    id: 7,
    title: "Semo",
    text: "Delicious semolina",
    price: 2700,
    imageUrl: "https://i.ibb.co/S7kQm01/image10.png",
    category: "Small Chops",
  },
  {
    id: 8,
    title: "Coca cola",
    text: "Soft drink",
    price: 550,
    imageUrl: "https://i.ibb.co/2W3Yrk3/image-11.png",
    category: "Drinks",
  },
  {
    id: 8,
    title: "Fish",
    text: "Grilled cat fish",
    price: 1400,
    imageUrl: "https://i.ibb.co/SRHgMSX/fish.png",
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
