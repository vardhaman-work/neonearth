"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

function ProductDetailsModal({ show, handleClose, productDetails }) {
  
  const [size, setSize] = useState(0);

  const handleScaleChange = (e) => {
    setSize(e.target.value);
  };

  useEffect(() => {
    setSize(productDetails.scale?.min)
  },[show])

  return (
    <Modal size="lg" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>{productDetails.title}</Modal.Title>
        </Modal.Header>
      <Modal.Body className="p-4">
        <div className="row">
          <div className="col-auto position-relative">
            
              <div className="product-mask position-relative d-block overflow-hidden border rounded-2">
              <img
                alt={productDetails.title}
                title={productDetails.title}
                className="position-relative mask-personalize-img img-fluid"
                src={productDetails.img?.placeholder}
              />
              <img
                alt={productDetails.title}
                title={productDetails.title}
                className="position-absolute o-mask-blend-img img-fluid top-0 left-0 right-0 m-auto z-index-10 pe-none"
                src={productDetails.img?.default}
              />

              {productDetails.img?.svg}

              <div
                id={`common_neClipMask${productDetails.id}`}
                className="clip-mask-img common-personalize-img position-absolute w-100 h-100 z-index-11 bg-white"
                style={{
                  clipPath: `url(#common_neClipMask${productDetails.id})`,
                  WebkitClipPath: `url(#common_neClipMask${productDetails.id})`,
                }}
              >

                {productDetails.img?.upload &&
                <Image
                    alt={productDetails.title}
                    title={productDetails.title}
                    className="position-absolute blend-img img-fluid image-object-fit-none"
                    src={productDetails.img?.upload}
                    width={250}
                    height={250}
                    style={{
                      transform: `scale(${size})`, // Dynamically apply scale
                      transition: 'transform 0.3s ease', // Smooth transition for scaling
                    }}
                    priority
                  />}
                {/* <img
                  alt={productDetails.title}
                  title={productDetails.title}
                  className="position-absolute m-auto blend-img img-fluid image-object-fit-none"
                  src={productDetails.img?.upload}
                  style={{
                    transform: `scale(${size})`, // Dynamically apply scale
                    transition: 'transform 0.3s ease', // Smooth transition for scaling
                  }}
                /> */}

                <img
                  alt={productDetails.title}
                  title={productDetails.title}
                  className="position-absolute mask-blend-img mask-blend-img-inner img-fluid top-0 left-0"
                  src={productDetails.img?.default}
                />
              </div>
            </div>

          </div>
          <div className="col">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sed sunt magnam excepturi dolorem, a ipsum at quasi architecto magni amet enim reiciendis velit</p>
            <p className="h5 fw-semiBold my-3">${productDetails.price}</p>
            <div>
              <p>Scale Image</p>
            <input
              type="range"
              id="size"
              name="size"
              min={productDetails.scale?.min}
              max={productDetails.scale?.max}
              step="0.05"
              value={size || ""}
              className="custom-range-slider"
              onChange={handleScaleChange}
            />
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ProductDetailsModal;
