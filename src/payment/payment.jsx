import React, { useState } from "react";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

function Payment() {
  const { cartTotal } = useCart();
  const [pay, setpay] = useState(cartTotal * 89);

  return (
    <>
      <div className="mai">
        <div className="tex">
          <h1>Scan here for payment</h1>
          <QRCode
            style={{ width: "335px" }}
            value={`upi://pay?pa=9982236403@ybl&pn=Intellemo&tn=cftrhwetaw4gta&am=${pay}`}
          />
          <br />
          <div className="b">
            <Link to={"/cart"}>
              <button id="b">
                <i class="fa-solid fa-arrow-right fa-rotate-180"></i>Back to
                edit cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export { Payment };
