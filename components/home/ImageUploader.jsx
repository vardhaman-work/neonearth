"use client"

import { useContext, useEffect, useRef } from "react";
import UploadImageContext from "@/context/UploadImageContext";

const ImageUploader = () => {
    const inputFile = useRef(null);
  const { setImage, preview, loading, handleUpload } = useContext(UploadImageContext);

  useEffect(() => {
    inputFile.current.value = "";
  },[preview])

  return (
    <div className="row text-start justify-content-center mb-5">
      <div className="col-auto d-flex flex-row ">
        <div>
          <label htmlFor="formFile" className="form-label">
            Upload Image
          </label>
          <div className="d-flex flex-row">
            <input
            ref={inputFile}
              className="form-control h-100"
              type="file"
              id="formFile"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <button
              onClick={handleUpload}
              className="btn btn-primary ms-3 px-4"
              disabled={loading}
            >
              {loading ? "Uploading..." : "Upload"}
            </button>
          </div>
          <div className="col-12 d-flex justify-content-center d-none">
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="img-thumbnail mt-3"
                width="100"
                height="100"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
