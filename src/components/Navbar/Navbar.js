import React, { useState, useEffect } from "react";
import logo from "../../assets/brandLogo.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
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

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    myFunction(inputValue);
  };

  const myFunction = (arg) => {
    console.log("Input value:", arg);
    const filteredProducts = data.filter((product) =>
      product.title.toLowerCase().includes(arg.toLowerCase())
    );
  };

  return (
    <>
      <nav className="d-flex flex-row justify-content-evenly align-items-center">
        <div className="col-6 d-flex flex-row justify-content-center">
          <img className="col-3" src={logo} alt="Brand Logo" />

          <input
            type="text"
            className="form-control m-3"
            onChange={handleInputChange}
            placeholder="Search for products..."
          />
          <div className="d-flex flex-row justify-content-center align-items-center">
            <button className="btn btn-dark" onClick={handleButtonClick}>
              Search
            </button>
          </div>
        </div>

        <Link to="/" className="text-decoration-none text-dark">
          HOME
        </Link>

        <Link to="/catalouge" className="text-decoration-none text-dark">
          CATALOUGE
        </Link>
        <Link to="/fashion" className="text-decoration-none text-dark">
          FASHION
        </Link>
        <Link to="/favorate" className="text-decoration-none text-dark">
          FAVORATE
        </Link>
        <Link to="/lifestyle" className="text-decoration-none text-dark">
          CART
        </Link>
        <Link to="/signup" className="text-decoration-none text-dark">
          <button className="btn btn-dark">SIGN UP</button>
        </Link>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
