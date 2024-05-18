import React from "react";
import rimg from "../images/Boardbackground.jpg";
function Ourresult() {
    const result = [
        {
            h1: "0+",
            h2: "Glorious years",
        },
        {
            h1: "90+",
            h2: "Happy clients",
        },
        {
            h1: "60+",
            h2: "Projects complete",
        },
        {
            h1: "23+",
            h2: "Team advisor",
        },
        {
            h1: "02+",
            h2: "Products Sale",
        },

    ]
    return (
        <>
            <div className="result">
                <div className="img">
                    <img src={rimg} alt="" />
                </div>
                <div className="num">
                    <div className="num-center">
                    {
                        result.map((num) => {
                            return (
                                <>
                                    <div className="result-data">
                                        <h1>{num.h1}</h1>
                                        <h2>{num.h2}</h2>
                                    </div>
                                </>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </>
    )
}
export { Ourresult }