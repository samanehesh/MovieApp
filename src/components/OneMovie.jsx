import {StarRating} from '../components/Stars'
import "../styles/homePageStyle.css";


import { useSelector, useDispatch } from "react-redux";
import { addFavorite, deleteFavorite } from "../features/favorites/favoritesSlice";
// import { addItem, deleteItem } from "../features/movies/moviesSlice";


const OneMovie = ({ movie}) => {
  if (!movie) {
    return <h1>No Movie to Display</h1>;
  }
    // const movies = useSelector((state) => state.movies.movies);

  const favoriteMovies = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  function inFavorites(id, arr) {
    return arr.some((item) => item.id === id);
  }



  return (
    <div className= "all-movies">
        <img
            src={movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : '../assets/images/trooper.png' // Provide the path to your alternative image
            }
            alt={movie.original_title}
        />
        <div>
            {inFavorites(movie.id, favoriteMovies) === true ? (
                <button className="heart-button" onClick={() => dispatch(deleteFavorite(movie))}>
                  ❤️
                </button>
              ) : (
                <button className="heart-button" onClick={() => dispatch(addFavorite(movie))}>
                  🤍
                </button>
              )}
        </div>
        <div>
              <div>{movie.original_title ? movie.original_title : "No Movie title"}</div>
              <div>{movie.release_date ? movie.release_date : "No Release Date"}</div>
              <StarRating rating={movie.vote_average} />
              
              <div>{movie.overview && movie.overview.slice(0, 150) + "..."}
                  {movie.overview.length ==0 && 'No Overview'}
              </div>

        </div>
    </div>
  );
};

export default OneMovie;