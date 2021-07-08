// card component with
import AddButton from "../buttons/add-button";
import "./index.css";
import textTruncate from "../../utils/textTruncate";
import ReactStars from "react-rating-stars-component";

const Card = ({ data = [], pagination = 6 }) => {
  return (
    <>
      {data.slice(0, pagination).map((item, key) => (
        <div className="card" key={key}>
          <img alt="food_image" src={item.strMealThumb} />
          <div className="card-content">
            <div className="card-title">
              <h4>{item.title}</h4>
              <h4>{item.price}</h4>
            </div>
            <p className="card-subtitle">{item.strMeal}</p>
            <div className="desc">
              <p>{textTruncate(item.description)}</p>
            </div>
          </div>
          <div className="footer">
            <ReactStars
              count={4}
              size={24}
              activeColor="#ffd700"
              value={item.ratings}
              edit={false}
            />
            <AddButton />
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
