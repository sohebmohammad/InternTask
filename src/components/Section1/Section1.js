import img1 from "../../assets/img1.png";
function Section1() {
  return (
    <>
      <div className="d-flex flex-row bg-light text-dark ">
        <div className="d-flex flex-column justify-content-center align-items-center col-6">
          <h1>LET’S </h1>
          <h1>EXPLORE</h1>
          <h1>UNIQUE </h1>
          <h1>CLOTHES.</h1>
          <div className="text-sm">
            Live for Influential and Innovative fashion!
          </div>
          <button className="btn btn-dark">Shop Now</button>
        </div>
        <div className="container bg-light col-6">
          <img className="col-6" src={img1}></img>
        </div>
      </div>
    </>
  );
}

export default Section1;
