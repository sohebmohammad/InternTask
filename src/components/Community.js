import c from "./c.png";

function Community() {
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center p-4"
        style={{ backgroundColor: "#f4d84f", minHeight: "50vh" }}
      >
        <img className="w-50 mb-4" src={c} alt="Community"></img>

        <p className="mb-4" style={{ fontSize: "1.2rem", fontWeight: "500" }}>
          Type your email down below and be part of the young wild generation
        </p>

        <div className="d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Add your email here"
            style={{ width: "250px", borderRadius: "5px" }}
          />
          <button className="btn btn-dark px-4">SEND</button>
        </div>
      </div>
    </>
  );
}

export default Community;
