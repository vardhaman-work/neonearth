import Link from "next/link";

const cardWithBoardAndTitle = ({ title, img, href }) => {
  return (
    <Link href={href} className="text-center d-flex flex-column img-hover-zoom">
      <span className="p-3 border rounded text-center d-block product_img overflow-hidden">
        <picture>
          <source type="image/webp" data-srcset={img.webp} srcSet={img.webp} />
          <source
            type="image/jpg"
            data-srcset={img.default}
            srcSet={img.default}
          />
          <img
            data-src={img.default}
            alt={title}
            title={title}
            className="img-fluid w-100 listing_img border position-relative rounded-2 lazyloaded "
            width="242"
            height="242"
            src={img.default}
          />
        </picture>
      </span>
      <span className="mt-3">{title}</span>
    </Link>
  );
};

export default cardWithBoardAndTitle;
