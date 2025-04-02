"use client";

import { useEffect } from "react";
import Script from "next/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const NavbarDropdown = ({ list, parentCategory }) => {
  useEffect(() => {
    const tabLinks = document.querySelectorAll("#pills-tab-"+ parentCategory.toLowerCase().replace(/\s+/g,"-") + " button");
  
    tabLinks.forEach((tab) => {
        tab.addEventListener("mouseover", function () {
        let tabInstance = new bootstrap.Tab(this);
        tabInstance.show();
        });
    });
  }, []);

  function formatString(str) {
    return str
      .replace(/[\s\-]+/g, "-")
      .replace(/[^a-zA-Z0-9\-]/g, "")
      .toLowerCase();
  }

  return (
    <>
      

      <section className="dd-menu  d-flex align-items-stretch">
        <ul
          className="nav nav-pills py-2 flex-column nav-pills align-items-end"
          id={`pills-tab-${formatString(parentCategory)}`}
          role="tablist"
        >
          {list.map((c, i) => (
            <li className="nav-item" key={c.id} role="presentation">
              <button
                className={`nav-link fw-semibold position-relative d-flex justify-content-between align-items-center text-capitalize ${
                  i === 0 ? "active" : ""
                }`}
                id={`pills-${formatString(c.name)}-tab`}
                data-bs-toggle="pill"
                data-bs-target={`#pills-${formatString(c.name)}`}
                type="button"
                role="tab"
                aria-controls={`pills-${formatString(c.name)}`}
                aria-selected={i === 0 ? "true" : "false"}
              >
                {c.name}
                <span className="menu-down-arrow d-inline-flex">
                  <FontAwesomeIcon icon={faAngleRight} className="ms-1" />
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div
          className="tab-content bg-white"
          id={`pills-tabContent-${parentCategory
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
        >
          {list.map((c, i) => (
            <div
              key={c.id}
              className={`tab-pane fade px-2 ${i === 0 ? "show active" : ""}`}
              id={`pills-${formatString(c.name)}`}
              role="tabpanel"
              aria-labelledby={`pills-${formatString(c.name)}-tab`}
            >
              <div className="row">
                <div className="col-6">
                  <ul className="nav py-2 flex-column">
                    {c.categorySubLinks.map((l) => (
                      <li key={l.id}>
                        <a href={l.href} className="event-top-navigation-3">
                          <span className="position-relative d-inline-block ">
                            {l.name}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-6 pe-0">
                  <picture>
                    {c.img && <source type="image/jpg" srcSet={c.img} />}
                    <img
                      src={c.img}
                      alt={`Image of ${c.name}`}
                      className="img-fluid w-100"
                    />
                  </picture>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default NavbarDropdown;
