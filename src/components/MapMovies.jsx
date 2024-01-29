import  OneMovie  from '../components/OneMovie'
import { Link } from "react-router-dom";
import "../styles/PageHome.css";


// import "../styles/homePageStyle.css";


const MapMovies = ({ movies}) => {
  if (!movies) {
    return <h1>No Movie to Display</h1>;
  }
    // const movies = useSelector((state) => state.movies.movies);


    return (
      <div className="all-movies">
                  {/* {movies.slice(0, 12).map(movie => ( */}

          {movies.map(movie => (
              <div key={movie.id}>
                  <OneMovie movie={movie} />
              </div>
          ))}
      </div>
  );

};

export default MapMovies;