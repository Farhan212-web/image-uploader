import React, { useState, useEffect } from 'react';
import './css/Uploader.css';
import DragImage from './DragImage';
import { storage } from './Firebase';
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import { v4 } from 'uuid';

const Uploader = (props) => {

    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([""]);

    const imageListRef = ref(storage, "images/");

    useEffect(() => {
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList([])
                    setImageList(prev => [...prev, url])
                    return;
                })
            })
        });

    }, [])


    const uploadImage = () => {
        if (imageUpload === null) {
            return;
        }

        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

        
        uploadBytes(imageRef, imageUpload).then(() => { // returns a promise
            alert("Image Uploaded");
        });
    }


    return (
        <div className="Uploader">
            <h1>Upload your {props.title} </h1>
            <p>File should be Jpeg, Png...</p>

            <DragImage url = {imageList[0]}/>

            <p>Or</p>

            <div className="alt-upload">
                <input type="file" onChange={(evt) => { setImageUpload(evt.target.files[0]) }} />
                <button onClick={uploadImage}> Upload Image</button>
            </div>
        </div>
    )
}

export default Uploader;