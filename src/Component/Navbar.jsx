import React from "react";
import logo from "../Assist/logo.jpg";
import cart from "../Assist/cart.png";
import login from"../Assist/login.jpg";
import favorite from"../Assist/favorite.png";
import "../Style/Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const CartCount = useSelector((state) => {
    return state.cart.cartCount;
  });

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
    
            Home
          </a>
        </li>
        <li>
          <a href="/products" className="nav-link">
         
            <Link to="/product">Products</Link>
          </a>
        </li>
        <li>
          <a  href="/"className="nav-link">
            <Link to="/heartitem"> FavoriteItem </Link>
          </a>
        </li>
        




      </ul>

{/*       
   <span class="hearitem">
    <Link to="/heartitem"> Favorite 
   
        </Link>
        </span> */}
       
         
       
      
        {/* <span class="input-group-text btn  btn btn" id="basic-addon3">
          <Link to="/login">Login</Link>
        </span> */}

<div className='buttons'>
        <button className='btn'>
           <a href='/login'className='btn btn-outline-dark'>
            <i className='fa fa-sign-in me-1'></i>Login</a>               
             <a href='/Register'className='btn btn-outline-dark ms-2'>
            <i className='fa fa-user-plus me-1'></i>Sign Up</a>
            {/* <a href='/heartitem'className='btn btn-outline-dark ms-2'>
            <i className='fa fa-user-plus me-1'></i>Favorite</a>
            */}
  </button>
  </div>





        <div className="cart-container">
        <Link to="/cart">
          <img src={cart} alt="Cart" className="cart-icon" />
          <span className="cart-count">{CartCount}</span>
        </Link>
      </div>
    

      
        
      

     
    </nav>
  );
};

export default Navbar;

