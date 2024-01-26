// Page - Home

import { useEffect, useState} from 'react';
import { appTitle } from '../globals/globals';
import "../styles/homePageStyle.css";
import AllMovies from '../components/AllMovies';

const PageHome = () => {
  // const movies = useSelector((state) => state.movies.movies);
  const [movies, setMovies] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState('popular');



    useEffect(() => {
		document.title = `${appTitle} - Home`;
	}, []);

  useEffect(() => {
    const fetchMoviesData = async () => {
      let fetchedMovies = [];
      fetchedMovies = await fetchMovies(selectedCategory);
      // Limit the number of movies to 12
      const limitedMovies = fetchedMovies.slice(0, 12);
      setMovies(limitedMovies);
    };
    fetchMoviesData();
  }, [selectedCategory]);
      
  return (
    <>
      <div>
      <form>
        <label htmlFor="movieType">Show me: </label>
        <select id="movieType" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="popular">Popular</option>
            <option value="top_rated">Top Rated</option>
            <option value="now_playing">Now Playing</option>
            <option value="upcoming">Upcoming</option>
        </select>
        </form>
      </div>
      <MapMovies movies = {movies}/>

    </>

  );

};

export default PageHome;