import React, { useState } from "react";
import "./foodCard.scss";
import { Plus, Minus, X } from 'lucide-react';

function FoodCard({ food }) {
  const { title, text, price, imageUrl } = food;
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    // <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="food-card-wrapper">
    <div className="food-container">
      <div className="image-wrapper">
        <img src={imageUrl} alt="food" />
      </div>
      <div className="food-text">
        <h3>{title}</h3>
        <p>{text}</p>
        <span>₦{price}</span>
      </div>
    </div>

    // {/* {isHovered && (
    //       <div className="popup-overlay">
    //         <div className="popup-content">
    //           <button className="close-button" onClick={() => setIsHovered(false)}>
    //             <X size={20} />
    //           </button>
              
    //           <h3>{title}</h3>
    //           <div className="orders-info">
    //             <span className="dot">•</span>
    //             <p>42 Orders today</p>
    //           </div>

    //           <div className="food-image">
    //             <img src={imageUrl} alt={title} />
    //           </div>

    //           <p className="description">{text}</p>

    //           <div className="purchase-controls">
    //             <div className="price">₦{price}</div>
    //             <div className="quantity-controls">
    //               <button onClick={() => setQuantity(prev => Math.max(1, prev - 1))}>
    //                 <Minus size={16} />
    //               </button>
    //               <span>{quantity}</span>
    //               <button onClick={() => setQuantity(prev => prev + 1)}>
    //                 <Plus size={16} />
    //               </button>
    //             </div>
    //             <button className="add-to-cart">Add to cart</button>
    //           </div>
    //         </div>
    //       </div>
    //     )} */}
    // {/* </div> */}
  );
}

export default FoodCard;
