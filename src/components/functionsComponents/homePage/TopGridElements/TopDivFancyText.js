import React, {useCallback, useEffect, useState} from "react";
import TextTransition from "react-text-transition";
import '../../../../css/homePage/textAnimationTopDiv.css'
import WhatIsDiv from "./textDivs/WhatIsDiv";
import {element} from "prop-types";

function TopDivFancyText() {
    let wordsList = ["Weź kosmetyk", "Zrób zdjęcie etykiety", "Zobacz ocenę"];
    let err = "err";
    const [index, setIndex] = useState(0);


    const shuffle = () => {
        if (index < wordsList.length -1) {
            setIndex(index +1);
        }
        else {
            setIndex(0);
        }
    }
    // const shuffle = useCallback(() => {
    //         let listSize = wordsList.length;
    //         setIndex(index +1);
    //         console.log("index: " + index);
    //     },
    //     []);

    useEffect(() => {
        const intervalId = setInterval(shuffle, 4000)

        return () => clearInterval(intervalId)
    }, [shuffle])

    return (
        <div className="fancyBody">
            <div className="deconstructed">
                {wordsList[index]}
                <div>{wordsList[index]}</div>
                <div>{wordsList[index]}</div>
                <div>{wordsList[index]}</div>
                <div>{wordsList[index]}</div>
            </div>
        </div>
    );
}

export default TopDivFancyText;