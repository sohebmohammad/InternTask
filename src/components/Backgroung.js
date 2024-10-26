import s from "./Frame 18.png";

function Background() {
  return (
    <>
      <div className="d-flex flex-row bg-dark text-light py-5">
        {/* Left Section */}
        <div className="col-6 d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="mb-3">FASHION</h1>
          <p className="mb-4" style={{ fontSize: "1.2rem" }}>
            Complete your style with awesome clothes from us.
          </p>
          <img src={s} className="img-fluid" alt="Fashion Banner" />
        </div>

        {/* Right Section */}
        <div className="col-6 d-flex justify-content-around">
          {/* First Column */}
          <div className="d-flex flex-column">
            <h4 className="mb-3">Company</h4>
            <a href="#" className="text-decoration-none text-light mb-2">
              About
            </a>
            <a href="#" className="text-decoration-none text-light mb-2">
              Contact Us
            </a>
            <a href="#" className="text-decoration-none text-light mb-2">
              Support
            </a>
            <a href="#" className="text-decoration-none text-light mb-2">
              Careers
            </a>
          </div>

          {/* Second Column */}
          <div className="d-flex flex-column">
            <h4 className="mb-3">Services</h4>
            <a href="#" className="text-decoration-none text-light mb-2">
              Order Tracking
            </a>
            <a href="#" className="text-decoration-none text-light mb-2">
              Shipping & Returns
            </a>
            <a href="#" className="text-decoration-none text-light mb-2">
              FAQs
            </a>
            <a href="#" className="text-decoration-none text-light mb-2">
              Size Guide
            </a>
          </div>

          {/* Third Column */}
          <div className="d-flex flex-column">
            <h4 className="mb-3">Follow Us</h4>
            <a href="#" className="text-decoration-none text-light mb-2">
              Facebook
            </a>
            <a href="#" className="text-decoration-none text-light mb-2">
              Instagram
            </a>
            <a href="#" className="text-decoration-none text-light mb-2">
              Twitter
            </a>
            <a href="#" className="text-decoration-none text-light mb-2">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Background;
