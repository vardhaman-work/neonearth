"use client"
import { useContext } from "react";

import SliderComponent from "./sliderComponent";
import SquarePillow from "@/components/svg/squarePillow";
import MonogramArmToteBag from "@/components/svg/monogramArmToteBag";
import WallTapestry from "@/components/svg/wallTapestry";
import PhotoPrintFrame from "@/components/svg/photoPrintFrame";
import HangingCanvas from "@/components/svg/hangingCanvas";
import ImageUploader from "./ImageUploader";

import UploadImageContext from "@/context/UploadImageContext";
import placeholderImg from "@/assets/images/design-here-placeholder.png";

const startCreatingProduct = () => {

    const { preview } = useContext(UploadImageContext);

    let uploadImageUrl = preview ||  placeholderImg //"https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/ne_personalise_product/custom-square-throw-pillow_custom-size_front_list_material_type_list_mt_canvas_placeholder_39588.png" 
    // let uploadImageUrl = "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/tempimages/sample-stamp_1743501805841_thumb.png" 

    let data = [
        {
            id: 1,
            img: {
                placeholder: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/ne_personalise_product/maskImage_33278_181_137_thumb.png",
                upload: uploadImageUrl,
                default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/ne_personalise_product/blendImage_33278_181_137_thumb.png",
                svg: <SquarePillow id="common_neClipMask1" />
            },
            href: "#startCreatingProduct",
            title: "Custom Square Throw Pillow - Velvet Satin",
            price: "16.95",
            scale: {
                min: 0.5,
                max: 2
            }
        },
        {
            id: 2,
            img: {
                placeholder: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/ne_personalise_product/custom-monogram-bag_16-h-x-15.5-w_front_background_41030_thumb.png",
                upload: uploadImageUrl,
                default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/ne_personalise_product/custom-monogram-bag_16-h-x-15.5-w_front_blendImage_41030_thumb.png",
                svg: <MonogramArmToteBag id="common_neClipMask2" />
            },
            href: "#startCreatingProduct",
            title: "Custom Monogram Arm Tote Bag",
            price: "27.50",
            scale: {
                min: 0.12,
                max: 1
            }
        },
        {
            id: 3,
            img: {
                placeholder: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/ne_personalise_product/maskImage_60435_178_133_thumb.png",
                upload: uploadImageUrl,
                default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/ne_personalise_product/custom-wall-tapestry_custom-size_front_list_material_type_list_mt_satin_blendImage_56205_thumb.png",
                svg: <WallTapestry id="common_neClipMask3" />
            },
            href: "#startCreatingProduct",
            title: "Custom Wall Tapestry - Velvet Satin",
            price: "17.96",
            scale: {
                min: 0.5,
                max: 2
            }
        },
        {
            id: 4,
            img: {
                placeholder: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/ne_personalise_product/photo-print_custom-size__choose_option_framing_background_79753_thumb.png",
                upload: uploadImageUrl,
                default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/ne_personalise_product/photo-print_custom-size__choose_option_framing_blendImage_79753_thumb.png",
                svg: <PhotoPrintFrame id="common_neClipMask4" />
            },
            href: "#startCreatingProduct",
            title: "Photo Print - Framing",
            price: "11.59",
            scale: {
                min: 0.4,
                max: 2
            }
        },
        {
            id: 5,
            img: {
                placeholder: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/ne_personalise_product/hanging-canvas_custom-size_front_list_edge_options_natural_wood_background_50929_thumb.png",
                upload: uploadImageUrl,
                default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/ne_personalise_product/hanging-canvas_custom-size_front_list_edge_options_natural_wood_blendImage_14156_thumb.png",
                svg: <HangingCanvas id="common_neClipMask5" />
            },
            href: "#startCreatingProduct",
            title: "Hanging Canvas - Natural",
            price: "36.00",
            scale: {
                min: 0.4,
                max: 2
            }
        }
    ]

  return (
    <section id="startCreatingProduct" className="row py-5">
      <div className="col-12">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h3 className="text-center h3 mb-4 pb-2">Personalized Your Products Design</h3>
                    <ImageUploader />
                    <SliderComponent list={data} type="custom" />
                    {/* <Link href="#" className="btn btn-primary mt-4 px-4 py-2">Start Creating</Link> */}
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default startCreatingProduct
