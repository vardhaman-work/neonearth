import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";

import Logo from "@/assets/images/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className="row border-top-0 flex-lg-nowrap flex-wrap py-md-3 px-md-0 py-2 border-bottom">
      <div className="col-12">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-auto">
              <Link href="/" className="me-xl-5">
                <Image
                  src={Logo}
                  alt="Neon Earth"
                  width={180}
                  height={32}
                  priority
                />
              </Link>
            </div>
            <div className="col-6 px-0 search-box ms-lg-auto position-relative me-lg-0 mx-auto mt-lg-0 mt-md-2 col-md me-xl-5">
              <input
                className="form-control"
                id="search-box"
                type="search"
                placeholder="Find What Brings You Joy"
                aria-label="Search"
                autoComplete="off"
                data-type="desktop"
              />
              <button
                className="btn btn-primary h-100 position-absolute top-0 end-0"
                type="button"
                id="search-btn"
                aria-label="Search_bar"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
            <div className="col-auto header-widgets">
              <Link href="/" className="wishlist me-4 position-relative">
                <FontAwesomeIcon icon={faHeart} />
                <span className="badge badge-primary rounded-circle">0</span>
              </Link>
              <Link href="/" className="cart me-4 position-relative">
                <FontAwesomeIcon icon={faBagShopping} />
                <span className="badge badge-primary rounded-circle">
                  0
                </span>
              </Link>
              <Link href="/" className="join-login">
                <FontAwesomeIcon icon={faUser} className="me-1" /> Join/Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
