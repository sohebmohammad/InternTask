import React, { useContext } from "react";
import { CartContext } from "../../components/contex/CartContext";

export default function Card({ product }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div
      className="card d-flex flex-column justify-content-between"
      style={{ width: "18rem", height: "100%" }} // Fixed card height
    >
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "200px" }} // Container for image with fixed height
      >
        <img
          className="card-img-top"
          src={product.image}
          alt="Product"
          style={{ height: "150px", width: "150px", objectFit: "contain" }} // Adjust image to fit container
        />
      </div>
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{product.title}</h5>
        <div className="card-title">
          <p className="fs-2">price:{product.price}$</p>
        </div>

        <a
          href="#"
          className="btn btn-primary mt-auto"
          onClick={() => addToCart(product)}
        >
          AddToCart
        </a>
      </div>
    </div>
  );
}
