import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

const StarRating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FontAwesomeIcon
            key={index}
            icon={
              rating >= starValue
                ? faStar // Full Star
                : rating >= starValue - 0.5
                ? faStarHalfAlt // Half Star
                : faStarEmpty // Empty Star
            }
            className="star"
          />
        );
      })}
    </div>
  );
};

export default StarRating;