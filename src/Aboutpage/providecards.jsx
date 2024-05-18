import React from "react";
import pimg1 from "../images/1.svg";
import pimg2 from "../images/2.svg";
import pimg3 from "../images/3.svg";
import pimg4 from "../images/4.svg";
import pimg5 from "../images/5.svg";
import pimg6 from "../images/6.svg";

function Providecards(){
    const providecard=[
        {
            proimg:`${pimg1}`,
            name:"Best Price & Offers",
            detail:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            probtn:"Read more",
        },
        {
            proimg:`${pimg2}`,
            name:"Wide Assortment",
            detail:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            probtn:"Read more",
        },
        {
            proimg:`${pimg3}`,
            name:"Free Delivery",
            detail:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            probtn:"Read more",
        },
        {
            proimg:`${pimg4}`,
            name:"Easy Returns",
            detail:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            probtn:"Read more",
        },
        {
            proimg:`${pimg5}`,
            name:"100% Satisfaction",
            detail:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            probtn:"Read more",
        },
        {
            proimg:`${pimg6}`,
            name:"Great Daily Deal",
            detail:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            probtn:"Read more",
        },


    ]
    return(
        <>
        <div className="provide-cards">
            {
                providecard.map((pro)=>{
                    return(
                        <>
                        <div className="pro-card">
                            <img src={pro.proimg} alt="" />
                            <h1>{pro.name}</h1>
                            <p>{pro.detail}</p>
                            <button>{pro.probtn}</button>
                        </div> 
                        </>
                    )
                })
            }
        </div>
        </>
    )
}
export{Providecards}