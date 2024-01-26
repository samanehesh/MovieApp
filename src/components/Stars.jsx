export const StarRating = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < Math.floor(rating / 2) ?'star filled':'star'}>★</span>
    ));
  
    return <div className="star-rating">{stars} {rating*10}%</div>;
  };

  
