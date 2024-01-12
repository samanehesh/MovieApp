// Page - Home

import { useEffect } from 'react';
import { appTitle } from '../globals/globals';

const PageHome = () => {

    useEffect(() => {
		document.title = `${appTitle} - Home`;
	}, []);

    return (
        <main>
            <section>
                <h2>Home Page</h2>
              
                
            </section>
        </main>
    );

};

export default PageHome;