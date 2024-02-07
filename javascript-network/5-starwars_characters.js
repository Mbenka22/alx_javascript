const request = require('request');//import the request module

const Id = process.argv[2];//movie to be passed in the terminal
const url = `https://swapi.dev/api/films/${Id}/`;//endpoint

request.get(url, (error, response, body) => {//sends the GET request to the swapi url and takes a call back function as 2nd argv
  if (error) {
    console.log(error);
    return;//exits the callbackmif theres an error
  }

  const data = JSON.parse(body);//parses json response body into a js object and assigns it to the variable data
  const characters = data.characters;//extracts character property from data object which has arrayof urls
  for (const character of characters) {//starts a loop over the url in characters array
    request(character, (error, response, body) => {//sends a GET request to each url 
      if (error) {
        console.log(error);
        return;
      }
      const characterData = JSON.parse(body);
      console.log(characterData.name);
    });
  }
});