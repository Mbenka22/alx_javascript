const request = require('request');

const URL = process.argv[2];
request(URL, (error, response, body) => {
  const aggregate = {};
  if (error) {
    console.log(error);
  }
  const json = JSON.parse(body);
  json.forEach(element => {
    if (element.completed) {
      if (!aggregate[element.userId]) {
        aggregate[element.userId] = 0;
      }
      aggregate[element.userId]++;
    }
  });
  console.log(aggregate);
});