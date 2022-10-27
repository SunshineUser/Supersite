import React from "react";
import {useState} from "react";
import NavBar from "./navbar";
import { Outlet } from "react-router-dom";

const Homepage = () =>{
    return(
        <div>
            <NavBar />
            <Outlet />
        </div>
    )
}

export default Homepage