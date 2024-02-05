const request = require('request');

// Function to get Star Wars movie title by episode number
function getMovieTitleByEpisode(episodeNumber) {
    const apiUrl = `https://swapi-api.alx-tools.com/api/films/${episodeNumber}`;

    request(apiUrl, (error, response, body) => {
        if (error) {
            console.error('Error:', error);
        } else {
            const movieData = JSON.parse(body);
            if (movieData.title) {
                console.log(`${episodeNumber}: ${movieData.title}`);
            } else {
                console.log(`${episodeNumber} not found.`);
            }
        }
    });
}

// Get movie title based on user input (movie ID)
const movieId = process.argv[2];

if (!movieId || isNaN(movieId)) {
    console.error('Please provide a valid movie ID as the first argument.');
} else {
    getMovieTitleByEpisode(movieId);
}
