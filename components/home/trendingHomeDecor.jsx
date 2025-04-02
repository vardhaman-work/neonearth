import Link from "next/link";

import CardImageWithTitleAndPrice from "@/components/ui/cardImageWithTitleAndPrice";

const TrendingHomeDecor = () => {
  let data = [
    {
      id: 1,
      title: "Custom Panoramic Tapestry - Velvet Satin",
      price: "15.97",
      href: "#",
      img: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product_variants/Panoramic-Tapestry-Lifestyle_Satin.png.webp?v=7450",
        default:
          "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product_variants/Panoramic-Tapestry-Lifestyle_Satin.png",
      },
    },
    {
      id: 2,
      title: "Custom Sheer Curtain - Polyester Linen",
      price: "45.36",
      href: "#",
      img: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product_variants/sheer_curtain-polyester_linen_02015929202410.jpg.webp?v=7450",
        default:
          "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product_variants/sheer_curtain-polyester_linen_02015929202410.jpg",
      },
    },
    {
      id: 3,
      title: "Custom Women's Hoodie - White",
      price: "42.95",
      href: "#",
      img: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product_variants/Womens_hoodie_white.png.webp?v=7450",
        default:
          "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product_variants/Womens_hoodie_white.png",
      },
    },
    {
      id: 4,
      title: "Custom Classic Tote Bag",
      price: "32.95",
      href: "#",
      img: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product_variants/Classic-Tote-Bag-Lifestyle.png.webp?v=7450",
        default:
          "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product_variants/Classic-Tote-Bag-Lifestyle.png",
      },
    },
    {
      id: 5,
      title: "Custom Coffee Mugs",
      price: "34.50",
      href: "#",
      img: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product_variants/Image_3_.jpg.webp?v=7450",
        default:
          "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product_variants/Image_3_.jpg",
      },
    },
    {
      id: 6,
      title: "Custom Waist Apron",
      price: "22.50",
      href: "#",
      img: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product_variants/waist_apron.png.webp?v=7450",
        default:
          "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product_variants/waist_apron.png",
      },
    },
    {
      id: 7,
      title: "Rug - Luxe Grain - Rectangle",
      price: "92.63",
      href: "#",
      img: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product_variants/Rec_1_Snow-Light-Lifestyle.png.webp?v=7450",
        default:
          "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product_variants/Rec_1_Snow-Light-Lifestyle.png",
      },
    },
    {
      id: 8,
      title: "Custom Wallpaper - Stone Grain",
      price: "65.32",
      href: "#",
      img: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product_variants/Caviar-Wallpaper-Lifestyle.png.webp?v=7450",
        default:
          "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product_variants/Caviar-Wallpaper-Lifestyle.png",
      },
    },
    {
      id: 9,
      title: "Custom Women's Full Sarong",
      price: "78.65",
      href: "#",
      img: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product_variants/Women-Full-Sarong.jpg.webp?v=7450",
        default:
          "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product_variants/Women-Full-Sarong.jpg",
      },
    },
    {
      id: 10,
      title: "Doormat - Rectangle",
      price: "9.75",
      href: "#",
      img: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product_variants/1-Rectangle_Doormat_07154429202408.png.webp?v=7450",
        default:
          "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product_variants/1-Rectangle_Doormat_07154429202408.png",
      },
    },
  ];

  return (
    <section className="row py-5 trending-home-decor">
      <div className="col-12">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="text-center h3 mb-4 pb-2">
                Trending Custom Home Decor
              </h3>
              <div className="row gx-3 row_custom">
              {data.map(card => (
                <CardImageWithTitleAndPrice
                  key={card.id}
                  title={card.title}
                  href={card.href}
                  img={card.img}
                  price={card.price}
                />
              ))}
              </div>
              <Link href="#" className="btn btn-primary mt-4 px-4 py-2">
                Create a New Trend
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingHomeDecor;
