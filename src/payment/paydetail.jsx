import React from "react";

function Detail(){
    return<>
    <div className="det">
       <div className="det-a">
       <input type="text"  placeholder="Name"/>
        <br/>
        <br/>
        <input type="text" placeholder="Surname" />
        <br/>
        <br/>
        <input type="num"  placeholder="Card Number"/>
        <br/>
        <br/>
        <input type="cvv " placeholder="CVV" />
        <br/>
        <br/>
        <input type="date" />
        <br/>
        <br/>
        <div className="btm">
        <button>Submite</button>
        </div>
       </div>
    </div>
    
    </>
}
export{Detail}