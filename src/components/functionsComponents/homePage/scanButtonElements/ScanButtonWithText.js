import React, {createContext, useEffect, useState} from "react";
import '../../../../css/homePage/scanText.css';
import '../../../../css/homePage/centralButtonCss.css'
import UseMove from "./UseMove";
import TextLeft from './elements/TextLeft';
import  TextRight from './elements/TextRight';

export const TextContext = createContext(null);

function ScanButtonWithText() {

    const {x, y, handleMouseMove} = UseMove();

    const [index, setIndex] = useState(0);



    const changeIndex = () => {
        let textNumbers = 2;
        if (index < textNumbers) {
            setIndex(index + 1);
        }
        else {
            setIndex(0);
        }
    }

    useEffect(() => {
        const IntervalId = setInterval(changeIndex, 4000);
        return () => clearInterval(IntervalId);
    }, [changeIndex])

    return (
        <div className="scanTextGeneralContainer">
            <div className="rectangleElement">
                <TextContext.Provider value={{index}}>
                    <TextRight/>
                    <TextLeft/>
                </TextContext.Provider>
            </div>
            <div className="circleElement">

            </div>
            <div className="circle2">
                <button className="button"  >
                    <div className="pattern" >
                        <div className="target inner bg6" >
                        </div>
                    </div>
                    <div className="text"></div>
                </button>
            </div>

        </div>
    )
}

export default ScanButtonWithText;