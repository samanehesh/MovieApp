import { useEffect,useState } from 'react';
import { appTitle } from '../globals/globals';
import { useSelector } from 'react-redux';
import MapMovies from "../components/MapMovies"


const PageFavorites = () => {
	useEffect(() => {
		document.title = `${appTitle} - Favorites`;
	}, []);

	// const [movies, setMovies] = useState([]);
	// let limitMovies = [];
	const favmovies = useSelector((state) => state.favorites.favorites);




	if (favmovies.length == 0) {
		return <div>No Favorite Movie to Display</div>;
	  }
	
	// limitMovies = favmovies.slice(0, 12);
	// setMovies(limitMovies);

	return (
		<>
			<MapMovies movies = {favmovies}/>
		</>
	);
};

export default PageFavorites;