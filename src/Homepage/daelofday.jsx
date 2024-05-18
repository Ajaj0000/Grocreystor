import React from "react"
import dimg1 from "../images/banner-5 - Copy.png"
import dimg2 from"../images/banner-6 - Copy.png"
import dimg3 from "../images/banner-7 - Copy.png"
import dimg4 from"../images/banner-8 - Copy.png"
import { Rating } from "../common/ratting"

function Deal() {
    const deal = [
        {
            dimg: `${dimg1}`,
            day: '1060',
            hours: "7",
            min: "20",
            sec: "34",
            name: "Seed of change organic ,quinao brown",
            nest: "Nest Food",
            price: "$ 50",
            lprice: "$ 60",
            dbtn: <i class="fa-solid fa-cart-shopping"></i>
        },
        {
            dimg: `${dimg2}`,
            day: '1060',
            hours: "7",
            min: "20",
            sec: "34",
            name: "Seed of change organic ,quinao brown",
            nest: "Nest Food",
            price: "$ 50",
            lprice: "$ 60",
            dbtn: <i class="fa-solid fa-cart-shopping"></i>

        },
        {
            dimg: `${dimg3}`,
            day: '1060',
            hours: "7",
            min: "20",
            sec: "34",
            name: "Seed of change organic ,quinao brown",
            nest: "Nest Food",
            price: "$ 50",
            lprice: "$ 60",
            dbtn: <i class="fa-solid fa-cart-shopping"></i>
        },
        {
            dimg: `${dimg4}`,
            day: '1060',
            hours: "7",
            min: "20",
            sec: "34",
            name: "Seed of change organic ,quinao brown",
            nest: "Nest Food",
            price: "$ 50",
            lprice: "$ 60",
            dbtn: <i class="fa-solid fa-cart-shopping"></i>
        },
    ]

    return (
        <>
            <div className="deal-cards">
                {
                    deal.map((items) => {
                        return (
                            <>
                                <div className="deal-card">
                                    <div className="deal-img">
                                        <img src={items.dimg} alt="dimg" />
                                    </div>
                                    <div className="deal-text-center">
                                        <div className="deal-text">
                                            <div className="time">
                                                <div className="day">
                                                    <h3>{items.day}</h3>
                                                    <p>Day</p>
                                                </div>
                                                <div className="day">
                                                    <h3>{items.hours}</h3>
                                                    <p>Hours</p>
                                                </div>
                                                <div className="day">
                                                    <h3>{items.min}</h3>
                                                    <p>Min</p>
                                                </div>
                                                <div className="day">
                                                    <h3>{items.sec}</h3>
                                                    <p>Sec</p>
                                                </div>
                                            </div>
                                            <div className="deal-bottom">
                                                <div className="bottom-center">
                                                    <h1>{items.name}</h1>
                                                    <div className="deal-rate">
                                                        <Rating/>
                                                    </div>
                                                    <h4>{items.nest}</h4>
                                                    <div className="deal-price">
                                                        <h3>{items.price}</h3>
                                                        <h3 id="lprice">{items.lprice}</h3>
                                                        <button>{items.dbtn} Add</button>
                                                    </div>
                                                </div>
                                            </div>
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
export { Deal }