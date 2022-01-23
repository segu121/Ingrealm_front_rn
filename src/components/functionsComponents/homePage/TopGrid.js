import React from "react";
import '../../../css/homePage/topGrid.css'
import LeftButton from "./TopGridElements/LeftButton";
import CentralButton from "./TopGridElements/CentralButton";
import RightBottomBtn from "./TopGridElements/RightBotomBtn";
import TextTopRight from "./TopGridElements/TextTopRight";
import ImgToPlainText from "./plainTextTop/elements/ImgToPlainText";
import DescriptionApp from "./plainTextTop/elements/DescriptionApp";
import ImgShop from './TopGridElements/image/ImageCosmetic'

function TopGrid () {


    return (
        <div className="Top-Grid-Function">
            <TextTopRight/>
            <ImgShop/>
            {/*<CentralButton/>*/}
            {/*<ImgToPlainText/>*/}
            {/*<DescriptionApp/>*/}
        </div>
    );
}

export default TopGrid;