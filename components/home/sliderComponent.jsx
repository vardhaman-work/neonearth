"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardImageWithTitleAndPrice from "../ui/cardImageWithTitleAndPrice";
import ProductDetailsModal from "@/components/ui/productDetailsModal"
import { useState } from "react";

const SliderComponent = ({ list, type }) => {

  const [showModal, setShowModal] = useState(false);
  const [productDetails, setProductDetails] = useState({});

  const handleClose = () => {
    setShowModal(false);
    setProductDetails({})
};

  const handleShow = (data) => {
    setProductDetails(data);
    setShowModal(true)
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Below 1024px
        settings: {
          slidesToShow: 2, // Show 2 slides
        },
      },
      {
        breakpoint: 768, // Below 768px
        settings: {
          slidesToShow: 1, // Show 1 slide
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {list.map(card => <div onClick={() => handleShow(card)} role="button" className="h-100 d-flex flex-column pb-3" key={card.id}>
          <CardImageWithTitleAndPrice id={card.id} title={card.title} href={card.href} img={card.img} price={card.price} type={type} />
        </div>)}
      </Slider>

      <ProductDetailsModal show={showModal} handleClose={handleClose} productDetails={productDetails} />

    </div>
  );
};

export default SliderComponent;
