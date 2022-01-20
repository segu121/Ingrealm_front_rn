import React, {useContext, useState} from "react";
import {TextContext} from "../ScanButtonWithText";
import '../../../../../css/homePage/textAnimationTopDiv.css';
import TextTransition, {presets} from "react-text-transition";
// import '../../../../../css/homePage/WriteTextAnimation.css';


function TextRight () {
    const textList = ["ZRÓB", "ZOBACZ", "PRZEMYŚL"]
    const {index} = useContext(TextContext);



    return (

        <div className="textSide">
            <span className="text">
                <TextTransition text={textList[index % textList[index].length ]} springConfig={ presets.wobbly }/>
            </span>
        </div>
    )
}

export default TextRight;