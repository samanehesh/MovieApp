// Page - About

import { useEffect } from 'react';
import { appTitle } from '../globals/globals';

const PageAbout = () => {

	useEffect(() => {
		document.title = `${appTitle} - About`;
	}, []);

	return (
		<section>
			<h2>About Page</h2>
		</section>
	);
	
};

export default PageAbout;