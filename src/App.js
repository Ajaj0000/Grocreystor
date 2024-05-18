import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./login/login";
import { Home } from "./Home/home";
import { About } from "./about/about";
import { CartProvider } from "react-use-cart";
import { Cart } from "./common/cart";
import { Error } from "./common/error";
import { Shope } from "./shopepage/shope";
import { Pay } from "./payment/paymentmethod";
import { Payment } from "./payment/payment";
import { Detail } from "./payment/paydetail";
import { Otp } from "./login/otp";
import { Mainlogin } from "./otp/firebasemani";
import { Face } from "./login/face";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/mn" element={<Mainlogin />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/face" element={<Face />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path='/cart' element={<Cart2/>}></Route> */}
            <Route path="*" element={<Error />} />
            <Route path="/shop" element={<Shope />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}
export { App };
