import React, {useRef, useState} from "react";
import Tesseract from "tesseract.js";
import ImageUploader from "react-images-upload";
import ClipLoader from "react-spinners/ClipLoader";
import "./imageLoader.css";


function ImageLoader() {

    const [picUrl, setPicUrl] = useState([]);
    const [ocrText, setOcrText] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const onDrop = (_, pictureURL) => {
        setPicUrl(pictureURL);
    };

    const runOcr = () => {

        picUrl.forEach((picture) =>
            Tesseract.recognize(picture, "eng+lat+pol").then(({data: {text}}) => {
                setOcrText((oldArray) => [...oldArray, text]);
            })
        );
        setIsLoading(true);
    }


    return (
        <div className="centered">
            <ImageUploader
                withIcon={true}
                withPreview={true}
                buttonText="Choose Images"
                onChange={onDrop}
                imgExtension={[".jpg", ".gif", ".png"]}
                maxFileSize={5242880}
            />
            <div className="ocr-button" onClick={runOcr}>
                Run OCR
            </div>
            {ocrText.length > 0 ? (
                <ul className="ocr-list">
                    {ocrText.map((ot) => (
                        <li className="ocr-element" key={ocrText.indexOf(ot)}>
                            <strong>{ocrText.indexOf(ot) + 1}-) </strong>
                            {ot}
                        </li>
                    ))}
                </ul>
            ) : (
                <ClipLoader color="#fffff" loading={isLoading} size={150}/>
            )}
        </div>
    );
}

export default ImageLoader;
