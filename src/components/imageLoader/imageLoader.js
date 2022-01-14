import React, {useRef, useState} from "react";
import Tesseract from "tesseract.js";
import ImageUploader from "react-images-upload";
import ClipLoader from "react-spinners/ClipLoader";
import "./imageLoader.css";
import preprocessImage from "./preprocess";


function ImageLoader() {

    // const [picUrl, setPicUrl] = useState([]);
    const [image, setImage] = useState("");
    const [text, setText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const canvasRef = useRef(null);
    const imageRef = useRef(null);

    const onDrop = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
    };

    const runOcr = () => {

        const canvas = canvasRef.current;
        canvas.width = imageRef.current.width;
        canvas.height = imageRef.current.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(imageRef.current, 0, 0);
        ctx.putImageData(preprocessImage(canvas),0,0);
        const dataUrl = canvas.toDataURL("image/jpeg");

        // picUrl.forEach((picture) =>
            Tesseract.recognize(dataUrl, "eng+lat+pol").then(({data: {text}}) => {
                setText((oldArray) => [...oldArray, text]);
            })
        // );
        setIsLoading(true);
    }


    return (
        // <div className="centered">
        //     <ImageUploader
        //         withIcon={true}
        //         withPreview={true}
        //         buttonText="Choose Images"
        //         onChange={onDrop}
        //         imgExtension={[".jpg", ".gif", ".png"]}
        //         maxFileSize={5242880}
        //     />
        //     <img
        //         src={image}
        //         ref={imageRef}
        //     />
        //     <canvas ref={canvasRef} width={700} height={300} className="canvas"></canvas>
        //     <div className="ocr-button" onClick={runOcr}>
        //         Run OCR
        //     </div>
        //     {text.length > 0 ? (
        //         <ul className="ocr-list">
        //             {text.map((ot) => (
        //                 <li className="ocr-element" key={text.indexOf(ot)}>
        //                     <strong>{text.indexOf(ot) + 1}-) </strong>
        //                     {ot}
        //                 </li>
        //             ))}
        //         </ul>
        //     ) : (
        //         <ClipLoader color="#fffff" loading={isLoading} size={150}/>
        //     )}
        // </div>
        <div className="centered">
                <h3>Actual image uploaded</h3>
                <img
                    src={image}
                    ref={imageRef}
                />
                <h3>Canvas</h3>
                <canvas ref={canvasRef} width={700} height={300}></canvas>
                <h3>Extracted text</h3>
                <div className="pin-box">
                    <p> {text} </p>
                </div>
                <input type="file" onChange={onDrop} />
                <button onClick={runOcr} style={{height:50}}>Convert to text</button>
        </div>
    );
}

export default ImageLoader;
