import React, { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import { IoPersonAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import face from "../images/face.png";
import { MdEmail } from "react-icons/md";
import faceIO from "@faceio/fiojs";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";

function Face() {
  const nav = useNavigate();
  const [faceio , setfaceio] = useState()
  useEffect(() => {
    setfaceio(new faceIO("fioaba2a"))
  }, [])

  const register = async () => {
    try {
      let facedata = await faceio.enroll({
        locale: "auto",
        payload: {
          email: "f@gmail.com",
          pin: "1234",
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const login = async () => {
    try {
      let log = await faceio.authenticate({
        locale: "auto",
      });
      nav("/home");
    } catch (e) {
      console.log(e);
    }
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
      ) : (
        <>
          <Toaster />
          <div className="mainotp">
            <div className="secotp">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div className="t">
                <h1>Face Recognition</h1>

                <div className="main-in">
                  <img src={face} alt="" />
                </div>
                <button onClick={register}>Register</button>
                <button onClick={login}>Login</button>
              </div>
              <div className="ico">
                <div className="icon-a">
                  <Link to="/Login">
                    {" "}
                    <i class="fa-brands fa-google"></i>
                  </Link>
                </div>
                <div className="icon-b">
                  <IoPersonAdd />
                </div>
                <div className="icon-c">
                  <Link to="/otp">
                    {" "}
                    <MdEmail />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export { Face };
