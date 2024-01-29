import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import { useSelector } from 'react-redux';
import MapMovies from "../components/MapMovies"

const PageFavorites = () => {
	useEffect(() => {
		document.title = `${appTitle} - Favorites`;
	}, []);
	const movies = useSelector((state) => state.watchlater.watchlater);

	if (movies.length == 0) {
		return <div>No Movie for Watch Later </div>;
	  }

	return (
		<>
			<MapMovies movies = {movies}/>
		</>
	);
};

export default PageFavorites;