import React, { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import { auth } from "../otp/firebase";
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import  {toast, Toaster } from "react-hot-toast";
import { IoPersonAdd } from "react-icons/io5";
import { LuScanFace } from "react-icons/lu";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

function Otp() {
  const [mynumber, setnumber] = useState("+91");
  const [otp, setotp] = useState("");
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");

  const signin = () => {
    if (mynumber === "" || mynumber.length < 10) return;
    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");

    auth.signInWithPhoneNumber(mynumber, verify)
      .then((result) => {
        setfinal(result);
        toast.success("Code Successfully sent to your number");
        setshow(true);
      })
      .catch((err) => {
        toast.error(err);
        window.location.reload();
      });
  };
  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        toast.success("Login sucessfully....");
      })
      .catch((err) => {
        toast.error("Enter valid OTP....");
      });
  };

  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1300);
  }, []);
  return (
    <>
     {loading ? (
        <>
          <div
            className="center"
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <ReactLoading
                type="bubbles"
                color="green"
                height={"10%"}
                width={"100%"}
              />
              <h1 style={{ color: "green" }}>Loading.......</h1>
            </div>
          </div>
        </>
      ) :(
        <>
      <Toaster />
      <div className="mainotp">
        <div className="secotp">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="te" style={{ display: !show ? "block" : "none" }}>
            <h1>Enter your phone number to continue</h1>

            <div className="main-in">
              <input
                value={mynumber}
                onChange={(e) => {
                  setnumber(e.target.value);
                }}
                placeholder="phone number"
              />
            </div>
            <button onClick={signin}>Sign in</button>
          </div>
              <div className="ico">
                <div className="icon-a">
                <Link to="/Login"> <i class="fa-brands fa-google"></i></Link>
                </div>
                <div className="icon-b">
                <IoPersonAdd />
                </div> 
                <div className="icon-c">
                <Link to="/face"><LuScanFace /></Link>
                </div>
              </div>     
          <div
            style={{
              display: show ? "block" : "none",
            }}
          >
            <input
              type="text"
              placeholder={"Enter your OTP"}
              onChange={(e) => {
                setotp(e.target.value);
              }}
            ></input>
            <br />
            <br />
            <button onClick={ValidateOtp}>Verify</button>
          </div>
        </div>
      </div>
      </>
      )}
    </>
  );
}
export { Otp };
