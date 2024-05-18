import { Link } from "react-router-dom"
import { Rating } from "../common/ratting"
import { Cart } from "./shopeproduct"

function Product (){
    return(
        <>
        <input type="text" placeholder="search for iteams" onChange={Change} id="inpt"/>
            <div className="product-cards">
                {
                    Cart.map((card) => {
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
                                   <Rating id="rat"/>
                                    <h6>{card.nest}</h6>
                                    <div className="card-price">  
                                       <div className="btnc">
                                        {inCart(Cart.id)?<Link to={"/cart"}> <button id="carta">Added</button></Link>:<button onClick={()=>{addItem(Cart)}} id="cart">Add to cart</button>}
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
export{Product}