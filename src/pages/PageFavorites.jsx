// Page - About

import { useEffect } from 'react';
import { appTitle } from '../globals/globals';

const PageAbout = () => {

	useEffect(() => {
		document.title = `${appTitle} - Favorites`;
	}, []);

	return (
		<section>
			<h2>Favorites Page</h2>
		</section>
	);
	
};

export default PageAbout;