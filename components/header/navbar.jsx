import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import NavbarDropdown from "./navbarDropdown";

const navbar = () => {
  let menuLinks = [
    {
      id: 1,
      name: "All",
      href: "#",
      icon: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/contentimages/ne_custom/Frame_1_1714460169195.png.webp?v=2059",
      },
      categoryLinks: [],
    },
    {
      id: 2,
      name: "Wall Arts",
      href: "#",
      tag: "",
      icon: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/Frame_9_1714459571675.png.webp?v=2059",
        png: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Frame_9_1714459571675.png",
      },
      categoryLinks: [
        {
          id: 1,
          name: "Custom Wallpaper",
          img: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Wallpapers_1704884025147.jpg",
          categorySubLinks: [
            {
              id: 1,
              name: "Wallpaper - Stone Grain",
              href: "#",
            },
            {
              id: 2,
              name: "Wallpaper - Canvas Grain",
              href: "#",
            },
            {
              id: 3,
              name: "Wallpaper - Timber Grain",
              href: "#",
            },
          ],
        },
        {
          id: 2,
          name: "Custom Wall Mural",
          img: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Wall_Murals_1704884053197.jpg",
          categorySubLinks: [
            {
              id: 1,
              name: "Wall Mural - Stone Grain",
              href: "#",
            },
            {
              id: 2,
              name: "Wall Mural - Canvas Grain",
              href: "#",
            },
            {
              id: 3,
              name: "Wall Mural - Timber Grain",
              href: "#",
            },
          ],
        },
        {
            id: 3,
            name: "Photo And Art Prints",
            img: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Art_Prints_1718021240890.png",
            categorySubLinks: [
              {
                id: 1,
                name: "Photo Print",
                href: "#",
              },
              {
                id: 2,
                name: "Mounted Photo Print",
                href: "#",
              },
              {
                id: 3,
                name: "Framed Photo Print",
                href: "#",
              },
            ],
          },
      ]
    },
    {
      id: 3,
      name: "Tapestries",
      href: "#",
      tag: "",
      icon: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/Frame_2_1714459625926.png.webp?v=2059",
        png: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Frame_2_1714459625926.png",
      },
      categoryLinks: [],
    },
    {
      id: 4,
      name: "Rugs & Mats",
      href: "#",
      tag: "New",
      icon: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/rug_1715926425323_1724912019890.png.webp?v=2059",
        png: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/rug_1715926425323_1724912019890.png",
      },
      categoryLinks: [],
    },
    {
      id: 5,
      name: "Pillows",
      href: "#",
      tag: "",
      icon: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/Frame_3_1714459951804.png.webp?v=2059",
        png: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Frame_3_1714459951804.png",
      },
      categoryLinks: [],
    },
    {
      id: 6,
      name: "Curtains",
      href: "#",
      tag: "",
      icon: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/Frame_4_1714460007048.png.webp?v=2059",
        png: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Frame_4_1714460007048.png",
      },
      categoryLinks: [],
    },
    {
      id: 7,
      name: "Custom Fabric",
      href: "#",
      tag: "",
      icon: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/Custom-fabric_Icon_1730199405715.png.webp?v=2059",
        png: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Custom-fabric_Icon_1730199405715.png",
      },
      categoryLinks: [],
    },
    {
      id: 8,
      name: "Pet Zone",
      href: "#",
      tag: "",
      icon: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/Frame_11_1714460067233.png.webp?v=2059",
        png: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Frame_11_1714460067233.png",
      },
      categoryLinks: [],
    },
    {
      id: 9,
      name: "Clothing",
      href: "#",
      tag: "",
      icon: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/Clothing_1715942618433.png.webp?v=2059",
        png: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Clothing_1715942618433.png",
      },
      categoryLinks: [],
    },
    {
      id: 10,
      name: "More",
      href: "#",
      tag: "",
      icon: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/Frame_8_1714460140703.png.webp?v=2059",
        png: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Frame_8_1714460140703.png",
      },
      categoryLinks: [
        {
          id: 1,
          name: "Letters & Decals",
          img: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/navigation_banner_1731660468177.jpg",
          categorySubLinks: [
            {
              id: 1,
              name: "Privacy Film",
              href: "#",
            }
          ]
        },
        {
            id: 2,
            name: "Bed Linens",
            img: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Bed_Linens_1704888382913_1715946049134.jpg",
            categorySubLinks: [
              {
                id: 1,
                name: "Bed Runner",
                href: "#",
              },
              {
                id: 2,
                name: "Duvet Cover",
                href: "#",
              },
              {
                id: 3,
                name: "Flat Bedsheet",
                href: "#",
              },
              {
                id: 4,
                name: "Fitted Bedsheet",
                href: "#",
              }
            ]
          },
          {
            id: 3,
            name: "Table Linens",
            img: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/TableLinens_1704888361911_1716384218516.jpg",
            categorySubLinks: [
              {
                id: 1,
                name: "Table Runner",
                href: "#",
              },
              {
                id: 2,
                name: "Square/Rectangle Tablecloth",
                href: "#",
              },
              {
                id: 3,
                name: "Round Tablecloth",
                href: "#",
              },
              {
                id: 4,
                name: "Oval Tablecloth",
                href: "#",
              },
              {
                id: 5,
                name: "Placemats",
                href: "#",
              },
              {
                id: 6,
                name: "Canvas Table Napkins",
                href: "#",
              }
            ]
          },
      ]
    },
    {
      id: 11,
      name: "Theme",
      href: "#",
      tag: "",
      icon: {
        webp: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/contentimages/ne_custom/09-Theme_1__1__1714460180483.png.webp?v=2059",
      },
      categoryLinks: [],
    },
  ];

  return (
    <nav className="nav main-menu">
      <div className="col-12">
      <div className="container">
        <ul className="navbar-nav w-100 justify-content-md-between flex-row position-relative">
          {menuLinks.map((link) => (
            <li className={`nav-item menu-${link.id}`} key={link.id}>
              <Link
                href={link.href}
                className="nav-link py-xl-0 py-2 px-lg-2 px-md-0 text-center p-1 position-relative"
              >
                <picture>
                  {link.icon.webp && (
                    <source type="image/webp" srcSet={link.icon.webp} />
                  )}
                  {link.icon.png && (
                    <source type="image/png" srcSet={link.icon.png} />
                  )}
                  <img
                    src={link.icon.img ? link.icon.img : link.icon.webp}
                    alt={`Image of ${link.name}`}
                    className="img-fluid"
                    width="64"
                    height="64"
                  />
                </picture>

                {link.tag !== "" && (
                  <span className="badge rounded-pill ms-1 fw-semibold top-header-badge text-capitalize">
                    {link.tag}
                  </span>
                )}

                <span className="mt-2 d-block text-capitalize">
                  {link.name}
                  {link.categoryLinks.length > 0 && (
                    <span className="menu-down-arrow d-inline-flex">
                      <FontAwesomeIcon icon={faAngleDown} className="ms-1" />
                    </span>
                  )}
                </span>
              </Link>

              {link.categoryLinks.length > 0 && (
                <NavbarDropdown list={link.categoryLinks} parentCategory={link.name} />
              )}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default navbar;
