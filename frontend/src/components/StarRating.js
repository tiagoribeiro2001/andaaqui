import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  return <>
    <div className='starRating'>
      {rating !== 0 && <h3>{rating}</h3>}
    </div>
    <div>
      {rating === 0 ? <p>Not rated</p> : [...Array(Math.floor(rating))].map((star, index) => {
        return <FaStar key={index} />
      })}
    </div>
  </>;
};

export default StarRating;