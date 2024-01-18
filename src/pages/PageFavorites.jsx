import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import { useSelector } from 'react-redux';
import MapMovies from "../components/MapMovies"

const PageFavorites = () => {
	useEffect(() => {
		document.title = `${appTitle} - Favorites`;
	}, []);
	const movies = useSelector((state) => state.favorites.favorites);

	if (movies.length == 0) {
		return <div>No Favorite Movie to Display</div>;
	  }

	return (
		<>
			<MapMovies movies = {movies}/>
		</>
	);
};

export default PageFavorites;