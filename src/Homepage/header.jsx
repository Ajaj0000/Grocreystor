import React, { useRef, useState } from "react";
import logo from "../images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Header(props) {
  const [on, off] = useState(false);

  const btn1 = () => {
    off(true);
  };
  const btn2 = () => {
    off(false);
  };
  const Head = [
    {
      icon: <i class="fa-solid fa-recycle"></i>,
      name: "Compare",
      path: "/compare",
    },
    {
      icon: <i class="fa-solid fa-heart"></i>,
      name: "Wishlist",
      path: "/wishlist",
    },
    {
      icon: <i class="fa-solid fa-cart-shopping"></i>,
      name: "Cart",
      path: "/cart",
    },
    {
      icon: <i class="fa-solid fa-user"></i>,
      name: "Account",
      path: "/otp",
    },
  ];
  const navlist = [
    {
      id: "a2",
      name: "Home _",
      path: "/",
    },
    {
      id: "a1",
      name: "About us _",
      path: "/about",
    },

    {
      id: "a1",
      name: "Shop _",
      path: "/shop",
    },
    {
      id: "a1",
      name: "Menu _",
      path: "/menu",
    },
    {
      id: "a1",
      name: "Vender _",
      path: "/vender",
    },
    {
      id: "a1",
      name: "Page _",
      path: "/page",
    },
    {
      id: "a1",
      name: "Contect _",
      path: "/contect",
    },
    {
      id: "a1",
      name: "Account _",
      path: "/account",
    },
  ];
  const select = [
    {
      id: 1,
      pname: "Blandy Blandy",
    },
    {
      id: 2,
      pname: "French fries",
    },
    {
      id: 3,
      pname: "Sweet patato",
    },
    {
      id: 4,
      pname: "Peanuts cracker",
    },
    {
      id: 5,
      pname: "Uliaa juice",
    },
    {
      id: 6,
      pname: "Sweets pista",
    },
    {
      id: 7,
      pname: "Yuija nuican",
    },
    {
      id: 8,
      pname: "Green tea",
    },
    {
      id: 9,
      pname: "Daal",
    },
    {
      id: 10,
      pname: "Noodle",
    },
    {
      id: 11,
      pname: "Burger",
    },
    {
      id: 12,
      pname: "Sugar",
    },
    {
      id: 13,
      pname: "Potato chips",
    },
    {
      id: 14,
      pname: "Rice",
    },
    {
      id: 15,
      pname: "Masoor daal",
    },
    {
      id: 16,
      pname: "kurkure",
    },
  ];
  const [value, setvalue] = useState();
  

  const get = useRef();
  const removecard = () => {
    setvalue(get.current.focus());
    setvalue("")
  };
  // const moon1 =document.getElementById("dark-mood1")
  // const moon2 =document.getElementById("dark-mood2")
  // const body =document.getElementById("root")
  // const click1=()=>{
  //   body.style.backgroundColor="black"
  //   body.style.color="white"
  //   moon1.style.display="none"
  //   moon2.style.display="block"
  // }
  // const click2=()=>{
  //   body.style.backgroundColor="white"
  //   body.style.color="black"
  //   moon1.style.display="block"
  //   moon2.style.display="none"
  // }
  const getvalue = (e) => {
    setvalue(e.target.value);
  };
  const changevalue = (e) => {
    props.send(e.target.value);
  };

  return (
    <>
      {/* <LoadingBar color='#f11946' ref={ref} /> */}
      <div className="navhead">
        <div className="navbar-header">
          <div className="navbar">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="search">
              <div className="search-select">
                <select onChange={getvalue}>
                  <optgroup>
                    <option>All categories</option>
                  </optgroup>
                  {select.map((pitm) => {
                    return (
                      <>
                        <option key={pitm.id}> {pitm.pname} </option>
                      </>
                    );
                  })}
                </select>
                <i class="fa-solid fa-caret-down"></i>
              </div>
              <input
                type="text"
                placeholder="search for iteams"
                // ref={get}
                // value={value}
                onChange={changevalue}
              
              />
              {/* <button onClick={removecard} ><i class="fa-light fa-xmark"></i></button> */}
              <button>
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>

            <div className="nav-icon">
              <ul>
                {Head.map((a) => {
                  return (
                    <>
                      <li>
                        <span>{a.icon}</span>
                        <Link to={a.path}>
                          {" "}
                          <h5> {a.name}</h5>
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="navlite">
            <div className="toggle">
              <Link>
                <button onClick={btn1} className={on === true ? "open1" : ""}>
                  {" "}
                  <i class="fa-solid fa-bars"></i>
                </button>
              </Link>
            </div>
            <ul>
              <li>
                <Link>
                  <button>Browser All Category</button>
                </Link>
              </li>

              {navlist.map((navlist) => {
                return (
                  <>
                    <NavLink activeClassName="active" to={navlist.path}>
                      <li id={navlist.id}>{navlist.name} </li>
                    </NavLink>
                  </>
                );
              })}
              <li id="a3">
                <i class="fa-solid fa-headphones phoneicon"></i>
                <div className="phone-num">
                  <h3>1988-899</h3>
                  <h5>24/7 Customers Support</h5>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={on === true ? "togglelite" : "toggle-b"}>
        <div className="icon-a">
          <ul>
            <li>
              <Link>
                <button onClick={btn2} className={on === false ? "close1" : ""}>
                  <i class="fa-solid fa-xmark"></i>Close
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <li>
          {navlist.map((nav) => {
            return (
              <>
                <Link to={nav.path}>
                  <li id={nav.id}>{nav.name}</li>
                </Link>
              </>
            );
          })}
          <li id="a3">
            <i class="fa-solid fa-headphones phoneicon"></i>
            <div className="phone-num">
              <h3>1988-899</h3>
              <h5>24/7 Customers Support</h5>
            </div>
          </li>
        </li>
      </div>
    </>
  );
}
export { Header };
