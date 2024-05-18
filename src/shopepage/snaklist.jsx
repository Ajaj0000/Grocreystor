import React from "react";
import snimg from "../images/snackbg.png";
function Snack() {
  const snacklist = [
    {
      name: "Cobbage",
      path: "/cobbage",
    },
    {
      name: "Brocolli",
      path: "brocolli",
    },
    {
      name: "Artichoke",
      path: "artichoke",
    },
    {
      name: "Clery",
      path: "clery",
    },
    {
      name: "Snipch",
      path: "snipch",
    },
  ];
  return (
    <>
      <div className="main-a">
        {/* <div className="imgq">
          <img src={snimg} alt="" />
        </div> */}
        <div className="mainsnak">
          <div className="txt">
            <h1>Snack List</h1>
            <h2>Try this 50% off on your first order....</h2>
          </div>
          <ul>
            {snacklist.map((list) => {
              return (
                <>
                  <div className="maintext">
                    <div className="maintextb">
                      <div className="list">
                        <li>
                          <h3>
                            <i class="fa-solid fa-xmark"></i>
                            {list.name}
                          </h3>
                        </li>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
export { Snack };
