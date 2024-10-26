import brands from "./brands.png";
import b1 from "./b1.png";
import b2 from "./b2.png";
import b3 from "./b3.png";
import b4 from "./b4.png";
import b5 from "./b5.png";
import b6 from "./b6.png";

function Brands() {
  return (
    <>
      <div
        className="d-flex justify-content-around align-items-center col-12 py-4"
        style={{ backgroundColor: "#f4d84f" }}
      >
        <div className="col-1">
          <img className="w-100" src={b1} alt="Brand 1"></img>
        </div>
        <div className="col-1">
          <img className="w-100" src={b2} alt="Brand 2"></img>
        </div>
        <div className="col-1">
          <img className="w-100" src={b3} alt="Brand 3"></img>
        </div>
        <div className="col-1">
          <img className="w-100" src={b4} alt="Brand 4"></img>
        </div>
        <div className="col-1">
          <img className="w-100" src={b5} alt="Brand 5"></img>
        </div>
        <div className="col-1">
          <img className="w-100" src={b6} alt="Brand 6"></img>
        </div>
      </div>
    </>
  );
}

export default Brands;
