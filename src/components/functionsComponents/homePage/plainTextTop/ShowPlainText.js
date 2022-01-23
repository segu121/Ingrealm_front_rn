import React from "react";
import ImgToPlainText from "./elements/ImgToPlainText";
import DescriptionApp from "./elements/DescriptionApp";


function ShowPlainText() {

    return (
        <div className="PlainTextContainer">
            <div className="imgAndHeaderContainer">
                <ImgToPlainText/>
                <span className="TextHeader">
                    Ingrealm<br/> królestwo<br/> składników<br/> kosmetycznych
                </span>
            </div>
            <DescriptionApp/>
        </div>
    )
}

export default ShowPlainText;