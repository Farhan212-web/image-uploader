import React from 'react'
import defaultImg from './imgs/image.svg'
import './css/DragImage.css';

const DefaultImage = () => {
    return (
        <div className="default-div">
            <img className="default-img" src={defaultImg} alt=""/>
            <p>Drag & Drop your image here</p>
        </div>
    )
}

export default DefaultImage;