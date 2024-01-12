import React, { useEffect, useState } from "react";
import StructureProduct from "./StructureProduct";
import "../Style/Product.css"

function MyProduct() {
  const [products, updateProducts] = useState([]);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        updateProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="product-container">
      <div className="product">
        <div className="row">
          {products.map((product, index) => (
            <StructureProduct object={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyProduct;
