import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const homePopover = ({popoverIndex, title, content, price, href}) => {
  return (
    <div className={`pointer_${popoverIndex} position-absolute`}>
      <OverlayTrigger
        trigger="click"
        placement="right"
        overlay={
          <Popover id={`popover_${popoverIndex}`} className="custom-popover">
            <Popover.Body className="p-4">
              <h5 className="popover-heading mt-0">
                {title}
              </h5>
              <p className="popover-content">{content}</p>
              <p className="popover-price">
                <span>${price}</span>
              </p>
              <Link href={href} className="btn btn-primary px-4 py-2">
                Shop Now
              </Link>
            </Popover.Body>
          </Popover>
        }
        rootClose
      >
        <span className="wall-banner-icon cursor-pointer box-shadow mx-2 d-flex justify-content-center align-items-center">
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </OverlayTrigger>
    </div>
  );
};

export default homePopover;
