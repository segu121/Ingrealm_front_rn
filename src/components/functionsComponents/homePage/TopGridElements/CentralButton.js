import React from "react";
import { Link } from "react-router-dom"
// import '../../../css/homePage/topGrid.css'
import ButtonTest from "./ButtonTest";

function CentralButton () {
    return (

        <Link to="promis-photo" className="centralBtn">
            {/*{ButtonTest}*/}
            {/*<span className="BtnCenter">Zeskanuj skład</span>*/}
            <button className="button">
                <div className="pattern">
                    <div className="target inner bg4"></div>
                </div>
                <div className="text">Hover me I'm remarkable</div>
            </button>
        </Link>
    );
}

export default CentralButton;