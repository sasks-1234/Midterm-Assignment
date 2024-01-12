import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../Reducer/Createslice";
import "../Style/cart.css";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-items">
        <h2>Cart Items</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={item.title}
              className="cart-item-image"
            />
            <div className="cart-item-details">
              <p>{item.title.slice(0, 20)}</p>
              <p>Price: ${item.price}</p>
              <div className="btnForAdd">
                <button
                  onClick={() => handleDecreaseQuantity(item.id)}
                  className="giveSize"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleIncreaseQuantity(item.id)}
                  className="giveSize"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="forRemove"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>
              {item.title.slice(0, 20)} - ${item.price * item.quantity}
            </p>
          </div>
        ))}
        <div className="total-price">
          <h3>Total: ${totalPrice}</h3>
        </div>
      </div>
    </div>
  );
}

export default Cart;
