const request = require('request');

// Get the URL from the command line arguments
const url = process.argv[2];

// Check if the URL is provided
if (!url) {
  console.error('Please provide a URL as the first argument');
  process.exit(1);
}

// Make a GET request
request.get(url, (error, response) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    // Display the status code
    console.log('code:', response.statusCode);
  }
});
