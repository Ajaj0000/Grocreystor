import React, { useEffect, useState } from "react";
import pimg1 from "../images/product-1-1 - Copy.jpg"
import pimg2 from "../images/product-1-2 - Copy.jpg"
import pimg3 from "../images/product-10-1 - Copy.jpg"
import pimg4 from "../images/product-10-2 - Copy.jpg"
import pimg5 from "../images/product-11-1 - Copy.jpg"
import pimg6 from "../images/product-11-2 - Copy.jpg"
import pimg7 from "../images/product-12-1 - Copy.jpg"
import pimg8 from "../images/product-12-2 - Copy.jpg"
import { Rating } from "../common/ratting"
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";


function Card(props) {
const{addItem,inCart}=useCart()
    const [fkhan,setfkhan]=useState(
        [
            {
                id:1,
                img: `${pimg1}`,
                snack: "snack",
                name: "Blandy Blandy",
                nest: "Nest Food",
                price: "35",
                available:4,
                dis: "$40"
            },
            {
                id:2,
                img: `${pimg2}`,
                snack: "snack",
                name: "French fries",
                nest: "Nest Food",
                price: "45",
                available:7,
                dis: "$47"
            },
            {
                id:3,
                img: `${pimg3}`,
                snack: "snack",
                name: "Sweet patato",
                nest: "Nest Food",
                price: "87",
                available:9,
                dis: "$90"
            },
            {
                id:4,
                img: `${pimg4}`,
                snack: "snack",
                name: "Peanuts cracker",
                nest: "Nest Food",
                price: "76",
                available:3,
                dis: "$80"
            },
            {
                id:5,
                img: `${pimg5}`,
                snack: "snack",
                name: "Uliaa juice",
                nest: "Nest Food",
                price: "68",
                available:8,
                dis: "$70"
            },
            {
                id:6,
                img: `${pimg6}`,
                snack: "snack",
                name: "Sweets pista",
                nest: "Nest Food",
                price: "57",
                available:5,
                dis: "$60"
            },
            {
                id:7,
                img: `${pimg7}`,
                snack: "snack",
                name: "Yuija nuican",
                nest: "Nest Food",
                price: "48",
                available:3,
                dis: "$50"
            },
            {
                id:8,
                img: `${pimg8}`,
                snack: "snack",
                name: "Green tea ",
                nest: "Nest Food",
                price: "42",
                available:8,
                dis: "$44"
            },
        ]
    )
    const [fk,setfk]=useState([...fkhan])

    useEffect(()=>{
        if(props.inputValue !== " "){
          Change(props.inputValue)
        }else 
        if(props.inputValue === 0){
          setfkhan (fkhan)
        }else{
          setfkhan(fkhan)
        }
    },[props.inputValue])

    function Change(e){
const get=e
const getitem=fkhan.filter((pera)=>pera.name.toLowerCase().includes(get))
if(get){
    setfk(getitem);
}else{
    setfk(fkhan);
}
    }
    return (
        <>
        {/* <input type="text" placeholder="search for iteams" onChange={Change} id="inpt"/> */}
            <div className="product-cards">
                {
                    fk.map((card) => {
                        return (
                            <>
                                <div className="pro-card" key={card.id}>
                                    <div className="pos-item">
                                        <h2>New</h2>
                                    </div>
                                    <div className="pro-img">
                                        <img src={card.img} alt="" />
                                    </div>
                                    <h5>{card.snack}</h5>
                                    <h1>{card.name}</h1>
                                    <Rating id="rat" />
                                    <h6>{card.nest}</h6>
                                    <div className="card-price">  
                                       <div className="btnc">
                                        {inCart(card.id)?<Link to={"/cart"}> <button id="carta">Added</button></Link>:<button onClick={()=>{addItem(card)}} id="cart">Add to cart</button>}
                                         {/* <Link to={inCart(card.id)?"/cart":""}> <button id="cart" onClick={()=>{addItem(card)}} >{inCart(card.id)?"Added":"Add to cart"}</button></Link> */}
                                       </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export { Card }