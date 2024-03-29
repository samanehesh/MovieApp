import {StarRating} from '../components/Stars'
import { Link } from "react-router-dom";

import "../styles/PageHome.css";


import { useSelector, useDispatch } from "react-redux";
import { addFavorite, deleteFavorite } from "../features/favorites/favoritesSlice";
import { deleteToWatch, addToWatch } from "../features/watchlater/watchlaterSlice";

// import { addItem, deleteItem } from "../features/movies/moviesSlice";


const OneMovie = ({ movie}) => {
  if (!movie) {
    return <h1>No Movie to Display</h1>;
  }
    // const movies = useSelector((state) => state.movies.movies);

  const favoriteMovies = useSelector((state) => state.favorites.favorites);
  const watchLaterMovies = useSelector((state) => state.watchlater.watchlater);

  const dispatch = useDispatch();

  function inFavorites(id, arr) {
    return arr.some((item) => item.id === id);
  }

  function inWatchLater(id, arr) {
    return arr.some((item) => item.id === id);
  }



  return (
    <div className= "movie-recommendation">
        <div>
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
            {inWatchLater(movie.id, watchLaterMovies) === true ? (
                <button className="plus-button" onClick={() => dispatch(deleteToWatch(movie))}>
                  delete
                </button>
              ) : (
                <button className="plus-button" onClick={() => dispatch(addToWatch(movie))}>
                  Add
                </button>
              )}
        </div>

        </div>

        <div>
              <div>{movie.original_title ? movie.original_title : "No Movie title"}</div>
              <div>{movie.release_date ? movie.release_date : "No Release Date"}</div>
              <StarRating rating={movie.vote_average} />
              
              <div>{movie.overview && movie.overview.slice(0, 150) + "..."} <Link to={`/${movie.id}`}>
                      <button>More Info</button>
                  </Link>
                  {movie.overview.length ==0 && 'No Overview'}
              </div>

        </div>
    </div>
  );
};

export default OneMovie;