import React, { useState, useEffect } from "react";
import Card from "../../common_components/card/Card";
import axios from "axios";

export default function Favorate() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  // Filter men and women products
  const menProducts = data.filter((product) =>
    product.title.toLowerCase().includes("mens")
  );

  const womenProducts = data.filter((product) =>
    product.title.toLowerCase().includes("women")
  );

  return (
    <div>
      <div className="d-flex flex-row justify-content-center">
        <h1>MENS FAVORATE</h1>
      </div>

      <div className="d-flex flex-row flex-wrap justify-content-center">
        {menProducts.map((product) => (
          <div key={product.id} className="m-2">
            <Card product={product} />
          </div>
        ))}
      </div>

      <div className="d-flex flex-row justify-content-center">
        <h1>WOMENS FAVORATE</h1>
      </div>

      <div className="d-flex flex-row flex-wrap justify-content-center">
        {womenProducts.map((product) => (
          <div key={product.id} className="m-2">
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
