import React from "react";
import '../../../css/homePage/topGrid.css'
import LeftButton from "./TopGridElements/LeftButton";
import CentralButton from "./TopGridElements/CentralButton";
import RightBottomBtn from "./TopGridElements/RightBotomBtn";
import TextTopRight from "./TopGridElements/TextTopRight";
import ImgToTopGrid from "./TopGridElements/image/ImgToTopGrid";
import DescriptionApp from "./TopGridElements/textDivs/DescriptionApp";

function TopGrid () {


    return (
        <div className="Top-Grid-Function">
            <TextTopRight/>
            <CentralButton/>
            <ImgToTopGrid/>
            <DescriptionApp/>
        </div>
    );
}

export default TopGrid;