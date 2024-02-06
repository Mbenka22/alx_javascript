const request = require('request');

// API URL of the Star Wars API films
const apiUrl = 'https://swapi-api.alx-tools.com/api/films/';


const characterId = 18;

// Function to count movies where Wedge Antilles is present
function countMoviesWithWedge(apiUrl, characterId) {
    return new Promise((resolve, reject) => {
        request(apiUrl, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                const films = JSON.parse(body).results;
                let movieCount = 0;
                for (const film of films) {
                    const characters = film.characters.map(character => parseInt(character.split('/').slice(-2, -1)[0]));
                    if (characters.includes(characterId)) {
                        movieCount++;
                    }
                }
                resolve(movieCount);
            }
        });
    });
}

// function call
countMoviesWithWedge(apiUrl, characterId)
    .then(count => console.log(`{count}`))
    .catch(error => console.error('Error:', error));
