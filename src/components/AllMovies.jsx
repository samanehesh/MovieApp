import { useEffect,useState } from 'react';
import { appTitle } from '../globals/globals';
import axios from 'axios';
import {StarRating} from '../components/Stars'
import { useSelector } from 'react-redux';
import MapMovies from "../components/MapMovies"
import "../styles/homePageStyle.css";

const AllMovies = () => {
    const apiKey = 'ea3a43981a82687d4ba7304f8d880abb';
    const [movies, setMovies] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Popular');
    
    useEffect(() => {
		document.title = `${appTitle} - Home`;
	}, []);

   useEffect(() => {
      fetchMovies(selectedCategory);
  }, [selectedCategory]);

  const allmovies = useSelector((state) => state.movies.movies);



    const handleCategoryChange = (event) => {
      event.preventDefault();
        setSelectedCategory(event.target.value);
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await fetchMovies(selectedCategory);
          setMovies(response);
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
    };

    const fetchMovies = async (selectedCategory) => {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${selectedCategory}`
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

            <form onSubmit={handleSubmit}>
            <label>
                Show me:
                <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="Popular">Popular</option>
                <option value="Top Rated">Top Rated</option>
                <option value="Now Playing">Now Playing</option>
                <option value="Upcoming">Upcoming</option>
                </select>
            </label>
            <button type="submit">Search</button>
            </form>


          <MapMovies movies = {movies}/>




            

    </>
  );

};

export default AllMovies;
