import React from "react";
import sellimg from "../images/banner-4.png"
import { Heading } from "../common/heading";
import { Selliteam } from "./sellitem";

function Sell() {
    return (
        <>
            <div className="daily">
                <div className="daily-main">
                    <div className="dailyhead">
                        <Heading chead="Daily Best Sell" />
                    </div>

                    <div className="dailyimg">
                        <div className="dailyimg1">
                            <img src={sellimg} alt="" />
                            <div className="psell">
                                <div className="daily-text">
                                    <h1>Bring nature into your home</h1>
                                </div>
                                <div className="daily-btn">
                                    <button>Shop Now</button>
                                </div>
                            </div>
                            
                        </div>
                        <Selliteam/>
                    </div>
                </div>

            </div>
        </>
    )
}
export { Sell }