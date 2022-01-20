import React from "react";
import '../../../../css/homePage/topGrid.css'
import { useState, useEffect } from "react";
import {Cookies} from "react-cookie";


function LeftButton() {
    let logged = false;
    const cookie = new Cookies();

    const [isLogged, checkIfLogged] = useState(logged)



    return (
        <div className="topLeftBtn">

        </div>
    )
}

export default LeftButton;