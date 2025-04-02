"use client"

import React, { useState } from "react";
import UploadImageContext from "./UploadImageContext";

const UserContextProvider = ({children}) => {

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!image) return;

        setLoading(true);

        const formData = new FormData();
        formData.append("file", image);

        const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
        });

        const data = await res.json();

        setLoading(false);

        if (res.ok) {
        alert("Upload successful!");
        setPreview(data.url); // Show uploaded image

        } else {
        alert("Upload failed: " + data.error);
        }
    };

    return (
        <UploadImageContext.Provider value={{ setImage, preview, loading, handleUpload}}>
            {children}
        </UploadImageContext.Provider>
    )
}

export default UserContextProvider;