import React from "react";
import Img1 from '../../../../../css/img/Obraz1.png'
import '../../../../../css/homePage/topGrid.css'

const ImgToTopGrid = () => {
    return (
        <div className="img-fluid">
            <img src={Img1} width={700} height={400} alt={Img1}/>
        </div>
    )
}

export default ImgToTopGrid;