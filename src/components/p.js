import paydayImg from "./paydayImg.png";
import paylogo from "./payllogo.png";

function Payday() {
  return (
    <>
      <div
        className="d-flex  flex-row col-12 text-light"
        style={{ backgroundColor: "#f4d84f" }}
      >
        <div className="col-6">
          <img className="w-100" src={paydayImg} alt="Payday"></img>
        </div>
        <div className="d-flex col-6 justify-content-center flex-column align-items-center text-dark">
          <img className="w-100" src={paylogo} alt="Pay Logo"></img>
          <p>
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>
          <p>1 June - 10 June 2021</p>
          <p>*Terms & Conditions apply</p>
          <button className="btn btn-dark">SHOP NOW</button>
        </div>
      </div>
    </>
  );
}

export default Payday;
