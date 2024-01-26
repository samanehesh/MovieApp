const apiKey = 'ea3a43981a82687d4ba7304f8d880abb';
import axios from 'axios';
export const fetchMovies = async (selectedCategory) => {
    try {
        console.log("infetch")
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${selectedCategory}?api_key=${apiKey}`

        );
      return response.data.results;
    } catch (error) {
      console.error('Error fetching movies:', error);
      return [];
    }
};  
