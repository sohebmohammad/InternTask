import youngs from "../../assets/youngs.png";
import i1 from "../../assets/i1.png";
import i2 from "../../assets/i2.png";

function YongsFav() {
  return (
    <>
      <div className="col-12">
        <img src={youngs} className="col-2" alt="Young's Favorite" />
        <div className="col-8"></div>
      </div>
      <div className="d-flex flex-row justify-content-center">
        <div className="card col-5">
          <img className="card-img-top" src={i1} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="card col-5">
          <img className="card-img-top" src={i2} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default YongsFav;
