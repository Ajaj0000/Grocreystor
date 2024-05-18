import React from "react";

function Slide() {
  return (
    <>
      <div className="slider">
        <div className="slider-text">
          <div className="slider-head">
            <h1>Fresh Vegetable</h1>
            <h1>Big discount</h1>
            <div className="text">
              <h3>
                Save upto <span> 50% </span> on your first order
              </h3>
            </div>
            <div className="text-a">
              <input type="text" placeholder="Enter your email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { Slide };
