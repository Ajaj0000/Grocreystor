import React from "react";
import provideimg from "../images/wave3.jpg"
function Provide(props) {
    return (
        <>
            <div className="provide">
                <div className="provide-head">
                    <h1>{props.abouthead}</h1>
                    <img src={provideimg} alt="" />
                </div>
            </div>
        </>
    )
}
export { Provide }