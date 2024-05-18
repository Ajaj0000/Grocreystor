import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";
import { LuScanFace } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import ReactLoading from "react-loading";
import { login } from "../emailverify/emailauth";

function Login() {
  // const loginpath = useNavigate();
  // const [name, setname] = useState("");
  // const [pass, setpass] = useState("");

  // const user = [
  //   {
  //     id: 1,
  //     user: "fk",
  //     password: 123,
  //   },
  //   {
  //     id: 1,
  //     user: "aj",
  //     password: 1234,
  //   },
  //   {
  //     id: 1,
  //     user: "smr",
  //     password: 1235,
  //   },
  // ];
  // const myid = user.find((itm) => itm.user === name && itm.password == pass);
  // const ref = useRef(null);

  // const changename = (a) => {
  //   setname(a.target.value);
  // };
  // const changepassword = (a) => {
  //   setpass(a.target.value);
  // };
  // const Click = (a) => {
  //    a.preventDefault()

  //    if(myid){
  //     toast.success(`${name}User Sucessfully login`)
  //             setTimeout(() => {
  //                 loginpath("/home")
  //             }, 2000);
  //    }else{
  //     toast.error("user not found..")
  //    }

  //   if (myid) {
  //     if (myid) {
  //       toast.success(`${name}User Sucessfully login`);
  //       setTimeout(() => {
  //         loginpath("/home");
  //       }, 2000);
  //     } else {
  //       toast.error("please fill correct password");
  //     }
  //   } else {
  //     toast.error("User not found");
  //   }
  // };
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(form);
  };
  const InputFields = {
    padding: "0.5rem",
    margin: "0.8rem",
    borderRadius: "4px",
  };
  const ButtonStyle = {
    borderRadius: "4px",
    padding: "0.7rem",
    margin: "0.5rem",
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
          <LoadingBar color="#f11946" />
          <ToastContainer position="top-center" />
          <div className="main">
            <div className="login-main">
              <div className="text">
                <h1>Login</h1>
                <p>
                  Don't have an account?{" "}
                  <span>
                    <Link to="/ergister">Create Account</Link>
                  </span>
                </p>
                <form action="" onSubmit={handleSubmit}>
                  <input
                    type="Email"
                    placeholder="Enter username"
                    // onChange={changename}
                    style={InputFields}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    // onChange={changepassword}
                    style={InputFields}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                  />
                  <div className="forget">
                    <div className="forget-a">
                      <Link>
                        <h4>Forget your password?</h4>
                      </Link>
                      <Link>
                        <h4>Sing up</h4>
                      </Link>
                    </div>
                  </div>

                  <button
                    // onClick={() => {
                    //   Click();
                    //   ref.current.continuousStart();
                    // }}
                    style={ButtonStyle}
                  >
                    <i class="fa-solid fa-right-from-bracket"> Login</i>
                  </button>
                </form>
                <div className="main-icon">
                  <div className="text-b">
                    <h1>Login With</h1>
                  </div>
                  <div className="icon">
                    <div className="icon-a">
                      <Link to="/otp">
                        <MdEmail />
                      </Link>
                    </div>
                    <div className="icon-b">
                      <IoPersonAdd />
                    </div>
                    <div className="icon-c">
                      <Link to="/face">
                        <LuScanFace />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export { Login };
