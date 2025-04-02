const banner = () => {
  return (
    <section className="row">
      <div className="col px-0">
        <picture>
            <source type="image/webp" srcSet="https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/flashgallary/large/1920x550_1742474498397.png.webp?v=3137" />
            <source type="image/png" srcSet="https://ds5e5and3r3r0.cloudfront.net/neonearth/images/flashgallary/large/1920x550_1742474498397.png" />
            <img src="https://ds5e5and3r3r0.cloudfront.net/neonearth/images/flashgallary/large/1920x550_1742474498397.png" alt="Banner" title="Banner" className="img-fluid w-100" width="1920" height="550" rel="preload" />
        </picture>
      </div>
    </section>
  );
};

export default banner;
