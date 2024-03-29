import { useEffect, useState } from "react";
import { appTitle } from "../globals/globals";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {StarRating} from '../components/Stars'
import { addFavorite, deleteFavorite } from "../features/favorites/favoritesSlice";
import { deleteToWatch, addToWatch } from "../features/watchlater/watchlaterSlice";
import "../styles/detailPageStyle.css";
import { fetchMovieDetails } from '../api/fetchMovies';




const PageMovieDetails = () => {
  // const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const [movie, setMovie] = useState(null);


  // const movies = useSelector((state) => state.favorites.favorites);
  const favoriteMovies = useSelector((state) => state.favorites.favorites);
  const watchLaterMovies = useSelector((state) => state.watchlater.watchlater);


  const dispatch = useDispatch();
  // useEffect(() => {
  //   document.title = `${appTitle} - Movie ${id}`;
  // }, [id]);

  useEffect(() => {
    const fetchDetails = async () => {
        const details = await fetchMovieDetails(id);
        setMovie(details);
    };

    fetchDetails();
    document.title = `${appTitle} - Movie ${id}`;

  }, [id]);

  // useEffect(() => {
      // Use the filter to find the movie with the matching id
      // const movie = movies.find((m) => m.id == id);
      
      // Set the movie state with the selected movie
      // setMovie(selectedMovie);
  // }, [id, movies]);

    if (!movie) {
      return <h1>No Movie to Display</h1>;
    }
      // const movies = useSelector((state) => state.movies.movies);
  
  
    function inFavorites(id, arr) {
      return arr.some((item) => item.id === id);
    }
    function inWatchLater(id, arr) {
      return arr.some((item) => item.id === id);
    }
  


   
  


    // if (isNaN(id) || id % 1 !== 0 || id < 0 || id > 12) {
    //   return <Navigate to="/" replace={true} />;
    // }


    return (
      <div className= "movie-recommendation">
        
          <div>
          {/* <h1>{movie.original_title ? movie.original_title : "No Movie title"}</h1> */}

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
                
                <div>{movie.overview} 
                    
                    {movie.overview.length ==0 && 'No Overview'}
                </div>
  
          </div>
          <Link to={`/`}>
              <button>Back to Home</button>
              </Link>
      </div>
    );

}

export default PageMovieDetails;