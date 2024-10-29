import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../common_components/card/Card";

export default function Fashion() {
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

  return (
    <div>
      <div className="d-flex flex-row justify-content-center">
        <h1>Fashion Products</h1>
      </div>

      <div className="d-flex flex-row flex-wrap justify-content-center">
        {data.map((product) => (
          <div key={product.id} className="m-2">
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
