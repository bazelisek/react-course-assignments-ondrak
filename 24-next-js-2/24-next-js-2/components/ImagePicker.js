"use client";
import { useRef, useState } from "react";
import classes from "./imagePicker.module.css";
import Image from "next/image";

export default function ImagePicker({label, name}) {
    const [image, setImage] = useState();
    const imageInput = useRef();

    function handlePickImage() {
        imageInput.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (!file) {
            setImage(undefined);
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setImage(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    }

    return(
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {image ? (<Image src={image} alt="Image selected by user" fill/>) : <p>No image picked yet</p>}
                </div>
                <input 
                    className={classes.input}
                    type="file" 
                    id={name} 
                    accept="image/png, image/jpeg" 
                    name={name} 
                    ref={imageInput}
                    onChange={handleImageChange}
                    required
                />
                <button className={classes.button} type='button' onClick={handlePickImage}>
                    Pick an Image
                </button>
            </div>
        </div>
    )
}