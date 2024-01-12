
import React from "react";
import "../Style/Product.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../Reducer/Createslice";

function StructureProduct(props) {
  const dispatch = useDispatch();

  const { title, image, price, id } = props.object;

  const [isWishlisted, setIsWishlisted] = useState(false);

  const wishlist = () => {
    if (!isWishlisted) {
      setIsWishlisted(true);
      dispatch(addToWishlist({ title, image, price, id }))
    }
  };

  const SendItem = () => {
    dispatch(addToCart({ title, image, price, id }));
  };

  return (
    <div className="product-card">
      <button onClick={wishlist} className="borderMake">
        {isWishlisted ? "❤️" : "🖤"}
      </button>
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{title.slice(0, 20)}</h3>
        <p className="product-price">Price: ${price}</p>
        <button className="add-to-cart-btn" onClick={SendItem}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default StructureProduct;
