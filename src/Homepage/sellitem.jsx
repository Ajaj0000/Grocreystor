import React from "react";
import simg1 from "../images/cat-1 - Copy.png";
import simg2 from "../images/cat-11 - Copy.png";
import simg3 from "../images/cat-12 - Copy.png";
import simg4 from "../images/cat-13 - Copy.png";
import { Rating } from "../common/ratting";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

function Selliteam() {
  const { addItem, inCart } = useCart();
  const sell = [
    {
      id: 1,
      simg: `${simg1}`,
      snack: "Snack",
      name: "seed of change organic quites",
      nest: "Nest food",
      price: 65,
      available: 5,
      dollar: "$ 65.00",
      dollar1: "$ 70.00",
      pbtn: "Add to cart",
    },
    {
      id: 2,
      simg: `${simg2}`,
      snack: "Snack",
      name: "seed of change organic quites",
      nest: "Nest food",
      price: 55,
      available: 8,
      dollar: "$ 55.00",
      dollar1: "$ 60.00",
      pbtn: "Add to cart",
    },
    {
      id: 3,
      simg: `${simg3}`,
      snack: "Snack",
      name: "seed of change organic quites",
      nest: "Nest food",
      price: 40,
      available: 7,
      dollar: "$ 40.00",
      dollar1: "$ 45.00",
      pbtn: "Add to cart",
    },
    {
      id: 4,
      simg: `${simg4}`,
      snack: "Snack",
      name: "seed of change organic quites",
      nest: "Nest food",
      price: 35,
      available: 4,
      dollar: "$ 35.00",
      dollar1: "$ 40.00",
      pbtn: "Add to cart",
    },
  ];
  return (
    <>
      {sell.map((scard) => {
        return (
          <>
            <div className="sell-card" key={scard.id}>
              <div className="pos-item">
                <h2>New</h2>
              </div>

              <div className="main-sel">
                <div className="pro-img">
                  <img src={scard.simg} alt="" />
                </div>
                <h5>{scard.snack}</h5>
                <h1>{scard.name}</h1>
                <Rating />
                <h6>{scard.nest}</h6>
                <div className="s-price">
                  <h3>{scard.dollar}</h3>
                  <strike>
                    <h3>{scard.dollar1}</h3>
                  </strike>
                </div>
                <div className="sbtn">
                  <button>Add to cart</button>
                  {/* {inCart(scard.id)? <Link to={"/cart"}><button>Added</button></Link>: <button onClick={()=>{addItem(scard)}}>Add to cart</button>} */}
                  {/* <Link to={inCart(scard.id)?"/cart":""}><button onClick={()=>{addItem(scard)}}>{inCart(scard.id)?"Added":"Add to cart"}</button></Link> */}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
export { Selliteam };
