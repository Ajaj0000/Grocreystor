import React, { useEffect, useState } from "react";
import img from "../images/meditation.png";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import ReactLoading from 'react-loading';

function Error() {
  const [loading, setloading]=useState(true)
  useEffect(()=>{
      setTimeout(() => {
          setloading(false)
      }, 1300);
  },[])
  return (
    <>
{
    loading?
    <>
    <div className="center" style={{ width:"100%", height:"100vh", display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div>
    <ReactLoading type="bubbles" color="green" height={'10%'} width={'100%'} />
    <h1 style={{color:"green"}}>Loading.......</h1>
    </div>
    </div>
    </>:
    <>
      <div className="main-error">
         <div className="m-logo">
             <img src={logo} alt="img" />
             <div className="btn">
               <Link to={"/"}>
                <button>Login</button>
               </Link>
               <Link to={"/about"}>
                 <button>About</button>
               </Link>
               <Link to={"/shop"}>
                 <button>Shop</button>
               </Link>
             </div>
            </div>

         <div className="m-img">
             <img src={img} alt="" />
           </div>
          <div className="m-text">
             <div className="m-text-b">
               <p>oops....</p>
               <p>Something's Want wrong</p>
               <Link to={"/home"}>
                 <button><i class="fa-solid fa-arrow-left"></i>Back to Home</button>
               </Link>
             </div>
           </div>
         </div>
    </>
}
</>
)
}
export { Error };
