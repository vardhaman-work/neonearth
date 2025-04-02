const photoPrintFrame = ({ id }) => {
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
              d="M129.2,404.7c0-93.4,0-186.6,0-280c93.6,0,186.9,0,280.3,0c0,93.2,0,186.5,0,280C316.1,404.7,222.6,404.7,129.2,404.7z"
              id="Path"
            ></path>
          </clipPath>
        </defs>
      </g>
      <path
        id="pathIdD"
        d="M129.2,404.7c0-93.4,0-186.6,0-280c93.6,0,186.9,0,280.3,0c0,93.2,0,186.5,0,280C316.1,404.7,222.6,404.7,129.2,404.7z"
        opacity="0"
      ></path>
    </svg>
  );
};

export default photoPrintFrame;
