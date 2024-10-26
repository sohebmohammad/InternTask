import paydayImg from "./paydayImg.png";
import paylogo from "./payllogo.png";
function Payday() {
  return (
    <>
      <div className="d-flex flex-row">
        <div className="col-3">
          <img className="col-6" src={paydayImg}></img>
        </div>
        <div className="container col-6">
          <p>
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>
          <p>1 June - 10 June 2021</p>
          <p>*Terms & Conditions apply</p>
          <button>SHOP NOW</button>
        </div>
      </div>
    </>
  );
}

export default Payday;
