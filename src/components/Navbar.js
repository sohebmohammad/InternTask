import React from "react";
import logo from "./brandLogo.png";
class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <>
        <nav className="d-flex flex-row justify-content-evenly align-items-center">
          <div className="col-6">
            <img src={logo}></img>
          </div>

          <a href="#" class="text-decoration-none text-dark">
            CATALOUGE
          </a>
          <a href="#" class="text-decoration-none text-dark">
            FASHION
          </a>
          <a href="#" class="text-decoration-none text-dark">
            FAVORATE
          </a>
          <a href="#" class="text-decoration-none text-dark">
            LIFESTYEL
          </a>
          <button className="btn btn-dark">SIGN UP</button>
        </nav>
      </>
    );
  }
}

export default Navbar;
