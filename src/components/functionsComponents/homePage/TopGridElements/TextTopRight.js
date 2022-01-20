import React, {useCallback, useEffect} from "react";
import { useState} from "react";
import WhatIsDiv from "./textDivs/WhatIsDiv"
import SecondText from "./textDivs/SecondText";
import ThirdText from "./textDivs/ThirdText";
import '../../../../css/homePage/textAnimation.css';
import TextTransition, { presets } from "react-text-transition";
import FourthText from "./textDivs/FourthText";




function TextTopRight () {
    let headerText = "Ingrealm powie Ci"
    let listOfText = [WhatIsDiv, SecondText, ThirdText, FourthText]
    const [text, setText] = useState(WhatIsDiv)



    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * listOfText.length)
        setText(listOfText[index])
    }, []);

    useEffect(() => {
        const intervalId = setInterval(shuffle, 5000)
        return () => clearInterval(intervalId)
    }, [shuffle])

    return (
        <span className="TextTopRight">
            <div className="textBody">
                    <div className="headerTextInTR">
                        <h1>
                            Ingrealm
                            {/*<TextTransition text={headerText[0 % headerText.length]} springConfig={presets.gentle}/>*/}
                            {/*<TextTransition text={text[0 % text[0].length]} springConfig={ presets.wobbly }/>*/}
                        </h1>
                    </div>

                    <div className="changingTextDiv">
                        <p className="text">
                            <TextTransition text={text[0 % text[0].length]} springConfig={ presets.slow }/>
                        </p>
                    </div>
            </div>
        </span>

    );
}

export default TextTopRight;