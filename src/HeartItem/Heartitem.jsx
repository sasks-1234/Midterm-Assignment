// Heartitem.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Style/heartitem.css";
import { addToCart, removeFromWishlist } from "../Reducer/Createslice";

function Heartitem() {
  const dispatch = useDispatch();

  const heartItems = useSelector((state) => state.cart.heartItems);
  
  const addTocart = (item) => {
    dispatch(addToCart(item)); 
  };
  
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromWishlist({ id }));
  };

  return (
    <div>
      <h2>Heart Items</h2>
      <div className="heart-items-container" style={{ display: "flex" }}>
        {heartItems.map((item) => (
          <div key={item.id} className="heart-item">
            <img
              src={item.image}
              alt={item.title}
              className="heart-item-image"
            />
            <p className="heart-item-title">{item.title.slice(0, 20)}</p>
            <p className="heart-item-price">Price: ${item.price}</p>
            <div className="heart-item-buttons">
              <button className="add-to-cart-btn" onClick={() => addTocart(item)}>
                Add to Cart
              </button>
              <button className="remove-wishlist-btn"  onClick={() => handleRemoveFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Heartitem;
