import { useEffect,useState } from 'react';
import { appTitle } from '../globals/globals';
import axios from 'axios';
// import {StarRating} from '../components/Stars'
import { useSelector,useDispatch } from 'react-redux';
import MapMovies from "../components/MapMovies"
import "../styles/homePageStyle.css";
// import { fetchMoviesSuccess, saveMoviesToLocal } from '../features/movies';


const AllMovies = () => {
    const apiKey = 'ea3a43981a82687d4ba7304f8d880abb';
    const [movies, setMovies] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Popular');
    // const dispatch = useDispatch();
    // const movies = useSelector((state) =>  state.movies.movies);
    
    useEffect(() => {
		document.title = `${appTitle} - Home`;
	}, []);

   useEffect(() => {
      fetchMovies(selectedCategory);
  }, [selectedCategory]);

  // const allmovies = useSelector((state) => state.movies.movies);



    // const handleCategoryChange = (event) => {
    //   event.preventDefault();
    //     setSelectedCategory(event.target.value);
    //   };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //       const response = await fetchMovies(selectedCategory);
    //       setMovies(response);
    //     } catch (error) {
    //       console.error('Error fetching movies:', error);
    //     }
    // };

    const handleSubmit = () => {
      fetchMovies(selectedCategory);
      // setMovies(response.data)

        // dispatch(fetchMoviesSuccess([])); // Clear the current movies before fetching new ones
        // localStorage.setItem('savedMovies', JSON.stringify(movies));
        // dispatch(saveMoviesToLocal(movies));
      };

    const fetchMovies = async (selectedCategory) => {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${selectedCategory}`);
           
            setMovies(response.data)
            // dispatch(fetchMoviesSuccess(response.data.results || []));
            // const savedMovies = JSON.parse(localStorage.getItem('savedMovies')) || [];
            // dispatch(saveMoviesToLocal(savedMovies));
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
      <div>
        <label htmlFor="movieType">Show me: </label>
        <select id="movieType" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="Popular">Popular</option>
          <option value="Top Rated">Top Rated</option>
          <option value="Now Playing">Now Playing</option>
          <option value="Upcoming">Upcoming</option>
        </select>
 
        <button onClick={handleSubmit}>Search</button>
      </div>
      <MapMovies movies = {movies}/>

    </>

  );

  }

export default AllMovies;
