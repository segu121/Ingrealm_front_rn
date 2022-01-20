import React from "react";
import Img1 from '../../../../../css/img/Obraz1.png'
import '../../../../../css/homePage/showPlainText.css'


const ImgToPlainText = () => {
    return (
        <div className="imgContainer">
            <img src={Img1} width={1300} height={800} alt={Img1}/>
        </div>
    )
}

export default ImgToPlainText;