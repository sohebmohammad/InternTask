import name from "./name.png";
import m1 from "./m1.png";
import m2 from "./m2.png";
import m3 from "./m3.png";

function NewArraivals() {
  return (
    <>
      <div className="container-fluid bg-light">
        <img src={name} className="col-2"></img>
        <div className="d-flex flex-row gap-3">
          <div className="card">
            <img className="card-img-top" src={m1}></img>
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={m2}></img>
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={m3}></img>
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArraivals;
