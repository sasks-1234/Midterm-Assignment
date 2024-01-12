import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../Reducer/Createslice";

function CategoryProducts() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isWishlisted, setIsWishlisted] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // Initialize the isWishlisted array with false for each product
        setIsWishlisted(Array(data.length).fill(false));
      });
  }, [category]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); 
  };

  const handleAddToWishlist = (product, index) => {
    if (!isWishlisted[index]) {
      dispatch(addToWishlist(product));
      // Update the isWishlisted array to mark the product as wishlisted
      setIsWishlisted((prev) => {
        const updatedWishlisted = [...prev];
        updatedWishlisted[index] = true;
        return updatedWishlisted;
      });
    }
  };

  return (
    <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product, index) => (
        <div
          key={product.id}
          style={{
            width: "200px",
            marginBottom: "20px",
            marginLeft: "17px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
              height: "320px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ marginBottom: "auto" }}>
              <button
                onClick={() => handleAddToWishlist(product, index)}
                className="borderMake"
              >
                {isWishlisted[index] ? "❤️" : "🖤"}
              </button>
            </div>
            <img
              src={product.image}
              alt=""
              style={{
                maxWidth: "100%",
                maxHeight: "149px",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            />
            <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <h3
                className="product-title"
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                {product.title.slice(0, 20)}
              </h3>
              <p className="product-price" style={{ fontSize: "14px", marginBottom: "10px" }}>
                Price: ${product.price}
              </p>
              <button
                onClick={() => handleAddToCart(product)}
                style={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryProducts;
