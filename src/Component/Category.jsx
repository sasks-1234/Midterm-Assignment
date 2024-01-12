import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import "../Style/category.css"
function Category() {
  const [data, updateData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((data) => {
        updateData(data);
        // console.log(data);
      });
  }, []);
  console.log(data);

  return (
    <div className="categoryname">
      <h2 className="fontHeading">Latest-Poducts</h2>
      <div className="middleheading">
        {data.map((element, index) => (
          <div key={element.id}>
            <Link to={`/myproduct/${element.toLowerCase()}`}>
              <h2>{element.toUpperCase()}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
