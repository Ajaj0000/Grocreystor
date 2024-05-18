import React from "react";
import performenceimg from "../images/performace1.png"

function Performanc(){
    return(
        <>
        <div className="performance">
            <div className="perform-img">
                <img src={performenceimg} alt="img" />
            </div>
            <div className="perform-text">
                <div className="perform-head">
                <h4>Our Performance</h4>
                </div>
                <h1>Your Partner for e-commerce grocery solution</h1>
                <p className="para1">Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                <p className="para2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
        </div>

        </>
    )
}
export{Performanc}