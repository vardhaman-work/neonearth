import Image from "next/image";
import Link from "next/link";

import visaDarkIcon from "@/assets/images/visa_dark_icon.png";
import mastercardDarkIcon from "@/assets/images/mastercard_dark.png";
import discoverDarkIcon from "@/assets/images/discover_dark_icon.png";
import amexpDarkIcon from "@/assets/images/amexp_dark_icon.png";
import paypalDarkIcon from "@/assets/images/paypal_dark_icon.png";
import applepayDarkIcon from "@/assets/images/applepay_dark_icon.png";
import notron from "@/assets/images/notron.png";

const Footer = () => {
  return (
    <footer className="row footer-content py-5">
      <div className="col-12 border-bottom pb-4">
        <div className="container">
          <div className="row justify-content-lg-between">
            <div className="col-12 col-lg-3 mb-lg-0 mb-3">
              <h3 className="semibold mb-3 text-white h3">
                Designs Come True!
              </h3>
              <p className="text-white lh-lg">
                At the heart of Neon Earth lies the belief that your home is
                more than just a physical space; it's a canvas for
                self-expression. Neon Earth acts as an enabler, providing
                comfort, and the freedom to ‘Create Your New’. Visualize It -
                Design it - Bring It to life: because the final product belongs
                to you.
              </p>
            </div>

            <div className="col-6 col-md-4 mb-lg-0 mb-4 col-lg-auto">
              <h3 className="semibold mb-3 text-secondary h3">Quick Link</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    className="event-footer-click"
                    href="#"
                  >
                    Order a Swatch Kit
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="event-footer-click"
                    href="#"
                  >
                    Bulk Quote
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="event-footer-click"
                    href="#"
                  >
                    Track Your Order
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-4 mb-lg-0 mb-4 col-lg-auto">
              <h3 className="semibold mb-3 text-secondary h3">Help</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link className="event-footer-click" href="#">
                    FAQ
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="event-footer-click" href="#">
                    Refund
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="event-footer-click" href="#">
                    Shipping
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="event-footer-click" href="#">
                    Sitemap
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="event-footer-click" href="#">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="event-footer-click" href="#">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-4 mb-lg-0 mb-md-4 col-lg-auto">
              <h3 className="semibold mb-3 text-secondary h3">Your Account</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link className="event-footer-click" href="#">
                    Your Orders
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="event-footer-click" href="#">
                    Your Wallet
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="event-footer-click" href="#">
                    Saved Designs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-4 mb-lg-0 mb-md-4 col-lg-auto">
              <h3 className="semibold mb-3 text-secondary h3">The Company</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link className="event-footer-click" href="#">
                    About us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="event-footer-click" href="#">
                    User Agreement
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="event-footer-click" href="#">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-4 mb-lg-0 mb-md-4 col-lg-auto text-md-start text-center get_in_touch mt-md-0 mt-3 pt-md-0 pt-4">
              <h3 className="semibold mb-3 text-secondary h3">Get in touch</h3>
              <Link href="mailto:wecare@neonearth.com">wecare@neonearth.com</Link>
              <ul className="list-unstyled my-2 d-flex justify-content-md-start justify-content-center align-items-center">
                <li className="me-2">
                  <Link
                    aria-label="facebook"
                    className="event-footer-click"
                    href="https://www.facebook.com/NeonEarth.Life"
                    target="_blank"
                    title="facebook"
                  >
                    <span className="neon neon-facebook  "></span>
                  </Link>
                </li>
                <li className="me-2">
                  <Link
                    aria-label="instagram"
                    className="event-footer-click"
                    href="https://www.instagram.com/neonearth.life"
                    target="_blank"
                    title="instagram"
                  >
                    <span className="neon neon-instagram  "></span>
                  </Link>
                </li>
                <li className="me-2">
                  <Link
                    aria-label="pinterest"
                    className="event-footer-click"
                    href="https://in.pinterest.com/neonearth/"
                    target="_blank"
                    title="pinterest"
                  >
                    <span className="neon neon-pinterest "></span>
                  </Link>
                </li>
                <li className="me-2">
                  <Link
                    aria-label="tiktok"
                    className="event-footer-click"
                    href="https://www.tiktok.com/@neonearth"
                    target="_blank"
                    title="tiktok"
                  >
                    <span className="neon neon-tiktok_icon "></span>
                  </Link>
                </li>
              </ul>
              <Link className="mb-2 event-footer-click" href="tel:+8553496366">
                (855) 349-6366
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 order-lg-1 order-2 py-md-0 py-4">
              <p className="text-secondary m-0 text-lg-start text-center p2">
                Copyright &copy;2025 neonearth. All Rights Reserved.
              </p>
            </div>
            <div className="col-12 col-lg-6 py-lg-0 pt-md-0 py-4 order-lg-2 order-1 d-md-flex justify-content-lg-end justify-content-center payment_method">
              <ul className="list-unstyled d-flex mb-0 justify-content-lg-start justify-content-center border-end border-secondary align-items-center">
                <li className="me-md-2 me-3 text-secondary align-self-center p2">
                  Payment Methods
                </li>
                <li className="me-md-2 me-3">
                  <Image
                    className="img-fluid "
                    src={visaDarkIcon}
                    alt="visa"
                    width={45}
                    height={33}
                    priority
                  />
                </li>
                <li className="me-md-2 me-3">
                  <Image
                    className="img-fluid "
                    src={mastercardDarkIcon}
                    alt="master"
                    width={45}
                    height={33}
                    priority
                  />
                </li>
                <li className="me-md-2 me-3">
                  <Image
                    className="img-fluid "
                    src={discoverDarkIcon}
                    alt="discover"
                    width={45}
                    height={33}
                    priority
                  />
                </li>
                <li className="me-md-2 me-3">
                  <Image
                    className="img-fluid "
                    src={amexpDarkIcon}
                    alt="amexp"
                    width={45}
                    height={33}
                    priority
                  />
                </li>
                <li className="me-md-2 me-3">
                  <Image
                    className="img-fluid "
                    src={paypalDarkIcon}
                    alt="paypal"
                    width={45}
                    height={33}
                    priority
                  />
                </li>
                <li className="me-md-2 me-3">
                  <Image
                    className="img-fluid"
                    src={applepayDarkIcon}
                    alt="Apple Pay"
                    width={45}
                    height={16}
                    priority
                  />
                </li>
              </ul>
              <ul className="list-unstyled d-flex mb-0 justify-content-lg-start justify-content-center align-item-center mt-md-0 mt-3">
                <li className="ms-md-3 me-3 me-md-2 text-secondary align-self-center p2">
                  Secured by
                </li>
                <li className="me-2">
                  <Image
                    className="img-fluid "
                    src={notron}
                    alt="notron"
                    width={68}
                    height={24}
                    priority
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
