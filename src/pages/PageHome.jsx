// Page - Home

import { useEffect} from 'react';
import { appTitle } from '../globals/globals';
import AllMovies from '../components/AllMovies';

import "../styles/PageHome.css";

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