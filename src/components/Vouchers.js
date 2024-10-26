import v1 from "./v1.png";
import m from "./Rectangle 18.png";
import m2 from "./Rectangle 55.png";
import mobile from "./Mobile app.png";

function Vouchers() {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center">
          {/* Left Column */}
          <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-start gap-4 p-4">
            <div>
              <img src={v1} alt="Voucher Banner" className="img-fluid" />
            </div>
            <div>
              <p className="text-body fs-5">
                Get 30% off for first transaction using Rondovision mobile app
                for now.
              </p>
            </div>
            <div className="d-flex gap-3">
              <button className="btn btn-outline-dark">
                <img src={m} alt="App Store" className="img-fluid" />
              </button>
              <button className="btn btn-outline-dark">
                <img src={m2} alt="Play Store" className="img-fluid" />
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 col-md-12 d-flex justify-content-center justify-content-lg-end p-4">
            <img src={mobile} alt="Mobile App" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Vouchers;
