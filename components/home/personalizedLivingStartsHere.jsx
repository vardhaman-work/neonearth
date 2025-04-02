import Link from "next/link"
import SliderComponent from "./sliderComponent"

const PersonalizedLivingStartsHere = () => {

    let data = [
        {
            id: 1,
            img: {
                webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product_variants/Custom_Wall_Tapestry_Satin.jpg.webp?v=4109",
                default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product_variants/Custom_Wall_Tapestry_Satin.jpg"
            },
            href: "#",
            title: "Custom Wall Tapestry - Velvet Satin",
            price: "17.96"
        },
        {
            id: 2,
            img: {
                webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product_variants/photo_print_framing.jpg.webp?v=4109",
                default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product_variants/photo_print_framing.jpg"
            },
            href: "#",
            title: "Photo Print - Framing",
            price: "11.59"
        },
        {
            id: 3,
            img: {
                webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product_variants/Hanigng_Canvas-_Natural.png.webp?v=4109",
                default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product_variants/Hanigng_Canvas-_Natural.png"
            },
            href: "#",
            title: "Hanging Canvas - Natural",
            price: "36.00"
        },
        {
            id: 4,
            img: {
                webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product_variants/Square_Pillow-_Gold_Jacquard.png.webp?v=4109",
                default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product_variants/Square_Pillow-_Gold_Jacquard.png"
            },
            href: "#",
            title: "Custom Square Throw Pillow - Velvet Satin",
            price: "16.95"
        },
        {
            id: 5,
            img: {
                webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product_variants/Custom-Monogram-Arm-Tote-Bag-View-02.png.webp?v=4109",
                default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product_variants/Custom-Monogram-Arm-Tote-Bag-View-02.png"
            },
            href: "#",
            title: "Custom Monogram Arm Tote Bag",
            price: "27.50"
        }
    ]

  return (
    <section className="row py-5">
      <div className="col-12">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h3 className="text-center h3 mb-4 pb-2">Personalized Living Starts Here</h3>
                    <SliderComponent list={data} />
                    <Link href="#" className="btn btn-primary mt-4 px-4 py-2">Start Creating</Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalizedLivingStartsHere
