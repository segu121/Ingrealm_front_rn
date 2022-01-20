import React from "react";
import '../../css/homePage/homePageContainer.css'
import TopGrid from "../functionsComponents/homePage/TopGrid";
import TopDivFancyText from "../functionsComponents/homePage/TopGridElements/TopDivFancyText";
import ScanButtonWithText from "../functionsComponents/homePage/scanButtonElements/ScanButtonWithText";
import ShowPlainText from "../functionsComponents/homePage/plainTextTop/ShowPlainText";
import DivBetweenScanText from "../functionsComponents/homePage/divBetween/DivBetweenScanText";

function HomePageMidContainer() {

    return (
        <div className="homePageContainer">
            <TopDivFancyText/>
            <ScanButtonWithText/>
            <DivBetweenScanText/>
            <div id="topText">
                <ShowPlainText/>
            </div>
            <div id="topContent">
                <TopGrid/>
            </div>
        </div>
    )
}

export default HomePageMidContainer;