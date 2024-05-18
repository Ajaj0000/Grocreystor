import React from "react";
import { Provide } from "../Aboutpage/provide";
import { Providecards } from "./providecards";

function Promain(){
    return(
        <>
        <Provide abouthead="What we provide?"/>
        <Providecards/>
        </>
    )
}
export{Promain}