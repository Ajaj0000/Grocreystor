// import React from "react"; 
// import { Link } from "react-router-dom";
// import { useCart } from "react-use-cart";
// import { Rating } from "./ratting";



// function Cart2(){
//     const{items, isEmpty, removeItem, totalUniqueItems }=useCart()
//     if (isEmpty) {
//         return (
//             <>
//                 <div className="cart">
//                     <p>cart is empty......</p>
                    
//                 </div>
//                 <div className="home"><Link to={"/home"}><button><i class="fa-solid fa-arrow-right fa-rotate-180"></i> Back</button></Link></div>
//             </>
//         )
//     }
//     return (
//         <>
//         {
//             items.map((cardb)=>{
//                 return(
//                 <>
//                 <div className="unique2">({totalUniqueItems})</div>
//                   <div className="sell-card" key={cardb.id} >
//                                 <div className="pos-item" >
//                                     <h2>New</h2>
//                                 </div>
//                                 <div className="main-sel">
//                                     <div className="pro-img">
//                                        <img src={cardb.simg} alt="hhs" />
//                                     </div>
//                                     <h5>{cardb.snack}</h5>
//                                     <h1>{cardb.name}</h1>
//                                     <Rating id="rat"/>
//                                     <h6>{cardb.nest}</h6>
//                                     <div className="s-price">
//                                         <h3>{cardb.dollar}</h3>
//                                         <strike><h3>{cardb.dollar1}</h3></strike>
//                                     </div>
//                                    <div className="sbtn">
//                                    <button id="add">+</button>
//                                         <span>1</span>
//                                         <button id="decre">-</button>
//                                         <button onClick={() => { removeItem(cardb.id) }} id="p">Remove</button>
//                                    </div>
//                                 </div>
//                             </div>
//                 </>)
//             })
//         }
//         </>
//     )
// }
// export{Cart2}