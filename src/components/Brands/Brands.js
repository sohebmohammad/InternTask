import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.png";
import b3 from "../../assets/b3.png";
import b4 from "../../assets/b4.png";
import b5 from "../../assets/b5.png";
import b6 from "../../assets/b6.png";
import "./Brands.css"; // Assuming you are storing CSS in Brands.css

function Brands() {
  return (
    <>
      <div
        className="d-flex justify-content-around align-items-center col-12 py-4"
        style={{ backgroundColor: "#f4d84f" }}
      >
        <div className="col-1">
          <img className="w-100 brand-img" src={b1} alt="Brand 1"></img>
        </div>
        <div className="col-1">
          <img className="w-100 brand-img" src={b2} alt="Brand 2"></img>
        </div>
        <div className="col-1">
          <img className="w-100 brand-img" src={b3} alt="Brand 3"></img>
        </div>
        <div className="col-1">
          <img className="w-100 brand-img" src={b4} alt="Brand 4"></img>
        </div>
        <div className="col-1">
          <img className="w-100 brand-img" src={b5} alt="Brand 5"></img>
        </div>
        <div className="col-1">
          <img className="w-100 brand-img" src={b6} alt="Brand 6"></img>
        </div>
      </div>
    </>
  );
}

export default Brands;
