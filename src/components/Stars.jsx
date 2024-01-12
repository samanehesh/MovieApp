export const StarRating = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < Math.floor(rating / 2) ?'star filled':'star'}>★</span>
    ));
  
    return <div className="star-rating">{stars} {rating*10}%</div>;
  };


  // export const StarRating = ({ rating }) => {
  //   const fullStars = Math.floor(rating);
  //   const halfStar = rating % 1 !== 0;
  //   const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
  //   const renderStars = () => {
  //     const stars = [];
  
  //     for (let i = 0; i < fullStars; i++) {
  //       stars.push(<span key={i}>★</span>);
  //     }
  
  //     if (halfStar) {
  //       stars.push(<span key="half">½</span>);
  //     }
  
  //     for (let i = 0; i < emptyStars; i++) {
  //       stars.push(<span key={`empty-${i}`}>☆</span>);
  //     }
  
  //     return stars;
  //   };
  
  //   return <div>{renderStars()} {rating*10}%</div>;
  // };
  
