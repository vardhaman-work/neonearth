import Link from "next/link"

import CardWithBoardAndTitle from "@/components/ui/cardWithBoardAndTitle";

const ourDesigns = () => {

  let data = [
    {
      id: 1,
      title: "Neon Designs",
      href: "#",
      img: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/design_theme/Design.png.webp?v=4109",
        default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/design_theme/Design.png"
      }
    },
    {
      id: 2,
      title: "Vintage",
      href: "#",
      img: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/design_theme/Vintage.png.webp?v=4109",
        default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/design_theme/Vintage.png"
      }
    },
    {
      id: 3,
      title: "Abstract",
      href: "#",
      img: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/design_theme/Abstract.png.webp?v=4109",
        default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/design_theme/Abstract.png"
      }
    },
    {
      id: 4,
      title: "Space and Astronomy",
      href: "#",
      img: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/design_theme/Space_and_Astronomy.png.webp?v=7450",
        default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/design_theme/Space_and_Astronomy.png"
      }
    },
    {
      id: 5,
      title: "Nature",
      href: "#",
      img: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/design_theme/Nature_07021106202401.png.webp?v=7450",
        default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/design_theme/Nature_07021106202401.png"
      }
    },
    {
      id: 6,
      title: "Kids",
      href: "#",
      img: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/design_theme/Kids.png.webp?v=7450",
        default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/design_theme/Kids.png"
      }
    },
    {
      id: 7,
      title: "Geometric",
      href: "#",
      img: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/design_theme/Geometric.png.webp?v=7450",
        default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/design_theme/Geometric.png"
      }
    },
    {
      id: 8,
      title: "Minimalist",
      href: "#",
      img: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/design_theme/Minimalist.png.webp?v=7450",
        default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/design_theme/Minimalist.png"
      }
    },
    {
      id: 9,
      title: "Botanical",
      href: "#",
      img: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/design_theme/Botanical.png.webp?v=7450",
        default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/design_theme/Botanical.png"
      }
    },
    {
      id: 10,
      title: "Food and Drink",
      href: "#",
      img: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/design_theme/Food_and_Drink.png.webp?v=7450",
        default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/design_theme/Food_and_Drink.png"
      }
    }
  ]

  return (
    <section className="row pb-5">
      <div className="col-12">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h3 className="text-center h3 mb-4 pb-2">We Curate, You Create - Explore 60K+ Designs</h3>
                    <div className="row gx-3 row_custom">
                      {data.map(card => <div className="col-12 col-lg-2 mb-4" key={card.id}><CardWithBoardAndTitle title={card.title} img={card.img} href={card.href} /></div>)}
                    </div>
                    <Link href="#" className="btn btn-primary mt-4 px-4 py-2">Explore More Designs</Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ourDesigns
