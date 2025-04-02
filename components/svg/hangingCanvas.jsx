const hangingCanvas = ({ id }) => {
  return (
    <svg
      className="ne_svg"
      viewBox="0 0 530 530"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="Assets" fill="none">
        <defs>
          <clipPath
            id={id}
            clipPathUnits="objectBoundingBox"
            transform="matrix(0.00188679 0 0 0.00188679 0 0)"
          >
            <path
              transform="matrix(1 0 0 1 0 0)"
              d="M145.3,454.6c0-90.6,0-180.9,0-271.4c79.8,0,159.4,0,239.4,0c0,90.3,0,180.7,0,271.4C305.1,454.6,225.4,454.6,145.3,454.6z"
              id="Path"
            ></path>
          </clipPath>
        </defs>
      </g>
      <path
        id="pathIdD"
        d="M145.3,454.6c0-90.6,0-180.9,0-271.4c79.8,0,159.4,0,239.4,0c0,90.3,0,180.7,0,271.4C305.1,454.6,225.4,454.6,145.3,454.6z"
        opacity="0"
      ></path>
    </svg>
  );
};

export default hangingCanvas;
