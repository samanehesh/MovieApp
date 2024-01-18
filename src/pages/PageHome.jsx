// Page - Home

import { useEffect} from 'react';
import { appTitle } from '../globals/globals';
import "../styles/homePageStyle.css";
import AllMovies from '../components/AllMovies';

const PageHome = () => {

    useEffect(() => {
		document.title = `${appTitle} - Home`;
	}, []);
      
  return (
    <>
          <AllMovies />
    </>
  );

};

export default PageHome;