import React from "react";
import ActiveImage from "./ActiveImage";
import './css/DragImage.css';
import DefaultImage from "./DefaultImage";

const DragImage = (props) => {

    return (
        <div className="DragImage">
            {props.url === "" ? <DefaultImage /> : <ActiveImage url={props.url} />}
        </div>
    )
}

export default DragImage;