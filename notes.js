// We will install the extension "Thunder client" in vs code... This will show us the responses inside the vs code

const { application } = require("express");

//_________________________________________________________________________________________________________

// If we change the title of index.html while the server is live... Then we will not see the required changes inside

// the server and the reason is that nodemon only commit to changes into js, mjs, json files

//_________________________________________________________________________________________________________

// " Json Formater" chrome extension help to parse the json file

//_________________________________________________________________________________________________________

//Static files are typically files such as scripts, CSS files, images, etc... that aren't server-generated, but must be sent to the browser when requested.


//  app.use is a middleware which handles requests and response... Adn they can manipulate them both...

// express.static allows to serve the static files 

//_________________________________________________________________________________________________________

// You can create your own middlewares and run them using app.use... They will take 3 arguments--> req, res, next...

// next() is called inside the middleware creation function which allows the middleware to call the next function after finishing it's work...

//_________________________________________________________________________________________________________

// To install a package gobally we write

//   npm install -g nodemon

// To install nodemon as Dev-Dependency only we write

// npm install -D nodemon