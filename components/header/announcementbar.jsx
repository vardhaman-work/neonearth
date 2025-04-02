const announcementbar = () => {
  return (
    <div className="row py-lg-2 py-md-3 py-2 announcement-bar border-bottom">
        <div className="col-lg-12 col-md-12 mb-lg-0 mb-0">
            <ul className="list-inline mb-0 d-flex justify-content-center">
              <li className="list-inline-item d-flex align-items-center">                  
                  <span className="neon neon-shipping-fast me-1 icon_size"></span>
                  Free Shipping Above $60
              </li>
              <li className="list-inline-item d-flex align-items-center">
                  <span className="neon fa-lg me-1 neon-Discount"></span> Up
                  to 20% OFF Sitewide. Use Code: REFRESH
              </li>
            </ul>
        </div>
    </div>
  );
};

export default announcementbar;
