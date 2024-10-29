import React, { useContext } from "react";
import { CartContext } from "../../components/contex/CartContext";

export default function Lifestyle() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <div className="d-flex flex-row justify-content-center">
        <h2>Cart Items</h2>
      </div>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="d-flex flex-column align-items-center">
          {cart.map((item, index) => (
            <div
              key={index}
              className="d-flex flex-column justify-content-center align-items-center m-2"
              style={{ width: "200px" }} // Set a fixed width for uniformity
            >
              <h5>{item.title}</h5>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100px" }}
              />
              <p>{item.description}</p>
              <p>{item.price}</p>
              <div>
                <button className="btn btn-danger">ADD</button>
              </div>
              <div>
                <button className="btn btn-primary">SHOP NOW</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
