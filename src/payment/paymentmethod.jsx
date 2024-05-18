import React from "react";
import { Link } from "react-router-dom";
import { Payment } from "./payment";

function Pay(){ 
    return<>
    <div className="pae">
    <div className="pay-a">
    <div className="pay-c">
    <h1>Payment Method</h1>
    </div>
    <div className="pay-b">
       <input type="checkbox" />
       <Link to="/detail"className="a" ><h4>Credit Card</h4></Link>
    </div>
    <div className="pay-b">
       <input type="checkbox" />
       <Link to="/payment" className="p"><h4>QR Code</h4></Link>
    </div>
    <div className="pay-b">
       <input type="checkbox" />
       <h4>Cash & Delivery</h4>
    </div>
    </div>
    </div>
    </>
}
export{Pay}