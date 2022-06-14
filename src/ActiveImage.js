import React from 'react'
import './css/DragImage.css';
import circle from './imgs/circle.svg';


const ActiveImage = (props) => {
    return (
        <div className="active-div">
            <img className="check-circle" src={circle} alt="" />
            <h2>Image Uploaded Successfully!</h2>
            <img className="active-img" src={props.url} alt=""/>

            <div className="copy-btns">
                <p>Drag & Drop your image here</p>
                <button className="copy-btn">Copy Link</button>
            </div>
        </div>
    )
}

export default ActiveImage;