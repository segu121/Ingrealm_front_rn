import React from "react";
import '../../css/homePage/homePageContainer.css'
import TopGrid from "../functionsComponents/homePage/TopGrid";
import TopDivFancyText from "../functionsComponents/homePage/TopGridElements/TopDivFancyText";
import ScanButtonWithText from "../functionsComponents/homePage/scanButtonElements/ScanButtonWithText";


function HomePageMidContainer() {

    return (
        <div className="homePageContainer">
            <ScanButtonWithText/>
            <div id="topText">

            </div>
            <div id="topContent">
                <TopGrid/>
            </div>
        </div>
    )
}

export default HomePageMidContainer;