import Link from "next/link";
import Image from "next/image";

const CardImageWithTitleAndPrice = ({
  id,
  title,
  href,
  img,
  price,
  type
}) => {

  return (
    <div className="px-2 col-12 h-100 d-flex flex-column">
      <div className="selling-box d-flex flex-column text-center">
        <div className="selling-box-img  overflow-hidden border rounded-2">
            {type === "custom" ? (
              <div className="product-mask position-relative d-block">
                <img
                  alt={title}
                  title={title}
                  className="position-relative mask-personalize-img img-fluid"
                  src={img.placeholder}
                  width={250}
                />
                <img
                  alt={title}
                  title={title}
                  className="position-absolute o-mask-blend-img img-fluid top-0 left-0 right-0 m-auto z-index-10 pe-none"
                  src={img.default}
                />

                {img.svg}

                <div
                  id={`common_neClipMask${id}`}
                  className="clip-mask-img common-personalize-img position-absolute w-100 h-100 z-index-11 bg-white"
                  style={{
                    clipPath: `url(#common_neClipMask${id})`,
                    WebkitClipPath: `url(#common_neClipMask${id})`,
                  }}
                >
                  <Image
                    alt={title}
                    title={title}
                    className="position-absolute blend-img img-fluid image-object-fit-none"
                    src={img.upload}
                    width={250}
                    height={250}
                    priority
                  />

                  <img
                    alt={title}
                    title={title}
                    className="position-absolute mask-blend-img mask-blend-img-inner img-fluid top-0 left-0"
                    src={img.default}
                  />
                </div>
              </div>
            ) : (
              <Link
                href={href}
                className={`${
                  type !== "custom" ? "img-hover-zoom" : "product-mask"
                } position-relative d-block`}
              >
              <picture>
                <source
                  type="image/webp"
                  data-srcset={img.webp}
                  srcSet={img.webp}
                />
                <source
                  type="image/jpg"
                  data-srcset={img.default}
                  srcSet={img.default}
                />
                <img
                  data-src={img.default}
                  alt={title}
                  title={title}
                  className="img-fluid w-100 listing_img position-relative rounded-2"
                  width="242"
                  height="242"
                  src={img.default}
                />
              </picture>
              </Link>
            )}
          
        </div>
      </div>

      <p className="text-center pt-3 fw-semibold product_price">{title}</p>

      <div className="text-center selling-box-badge mt-auto">
        <span className="badge text-bg-light mt-md-2">
          <span className="p2 text-secondary">Starting at</span>
          <span className="semibold price_size"> ${price}</span>
        </span>
      </div>
    </div>
  );
};

export default CardImageWithTitleAndPrice;
