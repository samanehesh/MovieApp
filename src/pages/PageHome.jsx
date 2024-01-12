// Page - Home

import { useEffect,useState } from 'react';
import { appTitle } from '../globals/globals';
import axios from 'axios';
import {StarRating} from '../components/Stars'
import "../styles/homePageStyle.css";

const PageHome = () => {
    const apiKey = 'ea3a43981a82687d4ba7304f8d880abb';
    const [searchQuery, setSearchQuery] = useState('Popular');
    const [movies, setMovies] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Popular');




    useEffect(() => {
		document.title = `${appTitle} - Home`;
	}, []);

   useEffect(() => {
    if (searchQuery) {
      fetchMovies(searchQuery);
    }
  }, [searchQuery]);

    // function MovieSearch() {
    //     const [searchQuery, setSearchQuery] = useState('Popular');
    //     const [movies, setMovies] = useState([]);
    // };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setSearchQuery(event.target.value);
      };
      
    // const handleInputChange = (event) => {
    //     setSearchQuery(event.target.value);
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await fetchMovies(searchQuery);
          setMovies(response);
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
    };

    const fetchMovies = async (searchQuery) => {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
            );
          console.log("response.data",response.data)
          setMovies(response.data.results);
          return response.data.results;
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
    };  


    // const MovieList = ({ movies }) => {
    //   if (!movies) {
    //     // Handle the case where movies is null or undefined
    //     return <p>No movies available.</p>;
    //   }
      
    return (
        <>
            <section>
                <h2>Home Page</h2>
            </section>
            <form onSubmit={handleSubmit}>
            <label>
                Show me:
                <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="Popular">Popular</option>
                <option value="Top Rated">Top Rated</option>
                <option value="Now Playing">Now Playing</option>
                <option value="Upcoming">Upcoming</option>

                {/* <option value="comedy">Comedy</option>
                <option value="drama">Drama</option> */}
                {/* Add more options as needed */}
                </select>
            </label>
            <button type="submit">Search</button>
            </form>
            {/* {fetchMovies(searchQuery)} */}
            <div className = "all-movies">
            {movies.slice(0, 12).map((movie) => (
                <div key={movie.id} className="movie-recommendation">
                  <div>
                    <img
                      src={movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : '../assets/images/trooper.png' // Provide the path to your alternative image
                    }
                      alt={movie.original_title}
                      />
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
                ))}
            </div>

            

        </>
    );

};

export default PageHome;