import StarRating from "./starRating";

const RatingAndFeature = () => {
  let feature = [
    {
      title: "Tailored Creations",
      icon: "tailored",
    },
    {
      title: "Best-in-Class Printing",
      icon: "best_printing",
    },
    {
      title: "Diverse Design Library",
      icon: "diverse_library",
    },
    {
      title: "Prompt Delivery",
      icon: "prompt_delivery",
    },
  ];

  return (
    <section className="row pb-3 pt-md-3 pt-3 shadow-sm rating-and-feature">
      <div className="col-12">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-4 col-xl-3 right_shadow">
              <div className="row">
                <div className="col-auto">
                  <img
                    src="https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/contentimages/images/sitejabber.png.webp?v=3137"
                    alt="sitejabber"
                  />
                </div>
                <div className="col align-self-center">
                  <div className="d-flex flex-row mb-1">
                    <span className="fw-bold me-2">4.5</span>
                    <StarRating rating={4.5} />
                  </div>
                  <p className="mb-0">Overall Satisfaction Rating</p>
                </div>
              </div>
            </div>
            <div className="features col-12 col-lg-8 col-xl-9 align-self-center">
              <div className="row">
                {feature.map((f,i) => (
                  <div key={i} className="col-xl-3 col-6">
                    <div className="d-flex align-items-center">
                      <div className="me-md-3 text-center">
                        <span className={`neon neon-${f.icon} fa-3x`}></span>
                      </div>
                      <div className="text-center text-md-start mt-md-0 mt-1">
                        <h3 className="mb-0 semibold">{f.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingAndFeature;
