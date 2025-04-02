"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import PopoverList from "@/components/ui/homePopover";

const wallBanner = () => {
    let popoverContentList = [
        {
            id: 1,
            title: "Custom Blackout Curtain - Velvet Satin",
            content: "Silk Touch blackout curtains block sunlight, enhance privacy, and elevate any space.",
            price: "96.72",
            href: "#"
        },
        {
            id: 2,
            title: "Custom Wallpaper - Stone Grain",
            content: "Stone Grain wallcoverings feature a medium-patterned, rough texture, like a sandpaper finish.",
            price: "65.32",
            href: "#"
        },
        {
            id: 3,
            title: "Canvas Print - Mounting",
            content: "Mounted canvas prints are high-quality images printed on canvas and stretched over a frame for a gallery-style display.",
            price: "23.20",
            href: "#"
        },
        {
            id: 4,
            title: "Custom Square Throw Pillow - Canvas",
            content: "Durable yet refined, featuring a smooth matte finish for a timeless aesthetic.",
            price: "17.10",
            href: "#"
        },
        {
            id: 5,
            title: "Rug - Luxe Grain - Rectangle",
            content: "Elegantly textured with a refined grainy finish, adding depth to any space.",
            price: "92.63",
            href: "#"
        },
        {
            id: 6,
            title: "Custom Bolster Pet Bed",
            content: "Comfywaterproof bolster pet bed with supportive side pillows.",
            price: "60.50",
            href: "#"
        }
    ]
    
  return (
    <>
      <div className="row wall-banner">
        <div className="col-12 px-0">
          <div className="banner-caption position-absolute">
            <h4 className="d-inline-flex align-items-center">
              Tap{" "}
              <span className="wall-banner-icon mx-2 d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={faPlus} />
              </span>{" "}
              to Personalize Decor
            </h4>
          </div>

          {popoverContentList.map(popup => (
            <PopoverList
              key={popup.id}
              popoverIndex={popup.id}
              title={popup.title}
              content={popup.content}
              price={popup.price}
              href={popup.href}
            />
          ))}

          <picture className="text-center">
            <source
              alt="Image of Personalized Area"
              className="img-fluid"
              height="217"
              media="(max-width:500px)"
              srcSet="https://ds5e5and3r3r0.cloudfront.net/neonearth/images/contentimages/images/personalized_web_banner.png"
              width="400"
            />
            <source
              alt="Image of Personalized Area"
              className="img-fluid"
              height="433"
              media="(max-width:768px)"
              srcSet="https://ds5e5and3r3r0.cloudfront.net/neonearth/images/contentimages/images/personalized_web_banner.png"
              width="800"
            />
            <source
              alt="Image of Personalized Area"
              className="img-fluid"
              height="596"
              media="(max-width:1024px)"
              srcSet="https://ds5e5and3r3r0.cloudfront.net/neonearth/images/contentimages/images/personalized_web_banner.png"
              width="1100"
            />
            <img
              alt="Image of Personalized Area"
              className="img-fluid lazyloaded"
              data-src="https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/contentimages/images/personalized_web_banner.png.webp?v=7450"
              height="1040"
              width="100%"
              src="https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/contentimages/images/personalized_web_banner.png.webp?v=7450"
            />
          </picture>
        </div>
      </div>
    </>
  );
};

export default wallBanner;
