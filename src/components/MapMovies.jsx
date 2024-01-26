import  OneMovie  from '../components/OneMovie'
import { Link } from "react-router-dom";
import "../styles/homePageStyle.css";


const MapMovies = ({ movies}) => {
  if (!movies) {
    return <h1>No Movie to Display</h1>;
  }
    // const movies = useSelector((state) => state.movies.movies);


  return (
    <div id="movie-list">
        {movies.map(movie => (
            <OneMovie movie={movie} />
        ))}
              {/* <Link key={movie.id} to={`/${movie.id}`}>
              <button>More Info</button>
              </Link> */}
    </div>
);

};

export default MapMovies;