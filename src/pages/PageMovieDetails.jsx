import { useEffect } from "react";
import { appTitle } from "../globals/globals";
import { Link, Navigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {StarRating} from '../components/Stars'
import { addFavorite, deleteFavorite } from "../features/favorites/favoritesSlice";
import "../styles/detailPageStyle.css";


const PageMovieDetails = () => {
    let { id } = useParams();

    const movies = useSelector((state) => state.favorites.favorites);
    const favoriteMovies = useSelector((state) => state.favorites.favorites);

    const dispatch = useDispatch();


    useEffect(() => {
      document.title = `${appTitle} - Character ${id}`;
    }, [id]);
  
    id = id * 1;


    // if (isNaN(id) || id % 1 !== 0 || id < 0 || id > 12) {
    //   return <Navigate to="/" replace={true} />;
    // }

    const movie = movies.filter((movie) => movie.id === id)[0];

  function inFavorites(id, arr) {
    return arr.some((item) => item.id === id);
  }

    return(
        <div className = "one-movie-detail">
             <div className = "one-movie">
          <div>
            <img
              src={movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : '../assets/images/trooper.png' // Provide the path to your alternative image
            }
              alt={movie.original_title}
              />
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
              
              <div>{movie.overview }
                  {movie.overview.length ==0 && 'No Overview'}
              </div>
              <Link  to={`/`}>
              <button>Back to Home</button>
              </Link>
            </div>

            </div>


        </div>
        
        
    

    )
}

export default PageMovieDetails;