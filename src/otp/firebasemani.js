import React from "react";
import { auth } from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth"
import { Otp } from "../login/otp";
import { Home } from "../Home/home";

function Mainlogin(){
    const[user]=useAuthState(auth)
    return user ? <Home/>  : <Otp/>

}
export {Mainlogin}