import React from "react";
import { useCart } from "react-use-cart";
import { Rating } from "./ratting";
import { Link } from "react-router-dom";
function Cart() {
  const {
    items,
    isEmpty,
    removeItem,
    totalUniqueItems,
    updateItemQuantity,
    cartTotal,                           
  } = useCart();
  if (isEmpty) {
    return (
      <>
        <div className="cart">
          <p>No items update......</p>
        </div>
        <div className="home">
          <Link to="/shop">
            <button>
              <i class="fa-solid fa-arrow-right fa-rotate-180"></i> Back
            </button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="unique">
        <h1>Cart Quantity ({totalUniqueItems}).........</h1>
        <Link to={"/home"}>
          <button>
            {" "}
            <i class="fa-solid fa-arrow-right fa-rotate-180"></i>Home
          </button>
        </Link>
        <Link to={"/about"}>
          <button>
            {" "}
            <i class="fa-solid fa-arrow-right fa-rotate-180"></i>About
          </button>
        </Link>
        <Link to={"/shop"}>
          <button>
            {" "}
            <i class="fa-solid fa-arrow-right fa-rotate-180"></i>Shop
          </button>
        </Link>
      </div>
      <div className="product-cards">
        {items.map((card) => {
          if (card.quantity >= card.available) {
            return (
              <>
                <div className="pro-cart" key={card.id}>
                  <div className="pro-img">
                    <h1>Sold Out</h1>
                    <img src={card.img} alt="img" style={{ opacity: "0.3" }} />
                  </div>
                  <div className="pro-cart-lite">
                    <h4>{card.snack}</h4>
                    <h1>{card.name}</h1>
                    <p>{card.detail}</p>
                    <Rating />
                    <h6>{card.nest}</h6>
                    <div className="card-price">
                      <div className="all-rate">
                        <div className="main-price">
                          <h5 id="dolar">$</h5>
                          <h5>{card.price * card.quantity}</h5>
                        </div>
                        <strike>
                          <h6>{card.dis}</h6>
                        </strike>
                      </div>
                      <span>{card.quantity}</span>
                      <button
                        id="decre"
                        onClick={() => {
                          updateItemQuantity(card.id, card.quantity - 1);
                        }}
                      >
                        -
                      </button>
                      <button
                        id="cart"
                        onClick={() => {
                          removeItem(card.id);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          }
          return (
            <>
              <div className="pro-cart" key={card.id}>
                <div className="pro-img">
                  <img src={card.img} alt="img" />
                </div>
                <div className="pro-cart-lite">
                  <h4>{card.snack}</h4>
                  <h1>{card.name}</h1>
                  <p>{card.detail}</p>
                  <Rating />
                  <h6>{card.nest}</h6>
                  <div className="cart-price">
                    <div className="all-rate">
                      <div className="main-price">
                        <h5 id="dolar">$</h5>
                        <h5>{card.price * card.quantity}</h5>
                      </div>
                      <strike>
                        <h6>{card.dis}</h6>
                      </strike>
                    </div>

                    <button
                      id="incr"
                      onClick={() => {
                        updateItemQuantity(card.id, card.quantity + 1);
                      }}
                    >
                      +
                    </button>
                    <span>{card.quantity}</span>
                    <button
                      id="decre"
                      onClick={() => {
                        updateItemQuantity(card.id, card.quantity - 1);
                      }}
                    >
                      -
                    </button>
                    <button
                      id="cart"
                      onClick={() => {
                        removeItem(card.id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="total">
        <h2>
          Total price....... <h1> $ {cartTotal}</h1>
        </h2>
      </div>
      <div className="bt">
        <Link to="/pay">
          <button>
            payment <i class="fa-solid fa-arrow-right"></i>
          </button>
        </Link>
      </div>
    </>
  );
}
export { Cart };
