import CardWithBoardAndTitle from "@/components/ui/cardWithBoardAndTitle"
import Link from "next/link";

const TimelessTapestries = () => {

    let data = [
        {
            id: 1,
            title: "Custom Wall Tapestries",
            href: "#",
            img: {
                webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/Custom_Wall_1718182688708.jpg.webp?v=4947",
                default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Custom_Wall_1718182688708.jpg"
            }
        },
        {
            id: 2,
            title: "Custom Panoramic Tapestries",
            href: "#",
            img: {
                webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/Custom_Panoramic_1718182709304.jpg.webp?v=4947",
                default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Custom_Panoramic_1718182709304.jpg"
            }
        },
        {
            id: 3,
            title: "Custom Triangular Tapestries",
            href: "#",
            img: {
                webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/Custom_Triangular_1718182714429.jpg.webp?v=4947",
                default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Custom_Triangular_1718182714429.jpg"
            }
        },
        {
            id: 4,
            title: "Custom Hanging Tapestries",
            href: "#",
            img: {
                webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/Custom_Hanging_1718182718173.jpg.webp?v=4947",
                default: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Custom_Hanging_1718182718173.jpg"
            }
        }
    ]

  return (
    <section className="row mt-4 pb-5">
      <div className="col-12">
        <div className="container ">
          <div className="row pick_border position-relative py-5 justify-content-start align-items-center">
            <div className="col-lg-4 col-md-5 col-12">
              <img
                data-src="https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/contentimages/ne_custom/tapestry_main_image_1718182546756.jpg.webp?v=7450"
                height="334"
                width="442"
                alt="Timeless Tapestries"
                title="Timeless Tapestries"
                className="img-fluid margin_img--left"
                src="https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/contentimages/ne_custom/tapestry_main_image_1718182546756.jpg.webp?v=7450"
              />
            </div>
            <div className="col-lg-7 col-md-7 col-12 pick_up_form_two">
              <h4 className="d-md-block d-none text-dark h3">
                Timeless Tapestries
              </h4>
              <p className="mb-md-5 d-md-block d-none">
                Personalized Tapestries to Reflect Your Essence
              </p>
              <div className="row justify-content-lg-center justify-content-md-start justify-content-center">
                {data.map(card => <div key={card.id} className="col-lg-3 col-md-4 col-5"><CardWithBoardAndTitle title={card.title} img={card.img} href={card.href} /></div>)}
              </div>

              <div className="text-center mt-4">
                <Link href="#" className="btn btn-primary px-4 py-2">
                    Show Me More
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelessTapestries;
