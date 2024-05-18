import React from "react";

function Aim(){
    const aim=[
        {
            head:"Who are we",
            detail:"Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.",
        },
        {
            head:"Our history",
            detail:"Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.",
        },
        {
            head:"Our mission",
            detail:"Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.",
        },

    ]
    return(
        <>
        <div className="aim">
            {
                aim.map((data)=>{
                    return(
                        <>
                        <div className="aim-card">
                            <h1>{data.head}</h1>
                            <p>{data.detail}</p>
                        </div>
                        </>
                    )
                })
            }
        </div>
        
        </>
    )
}
export{Aim}