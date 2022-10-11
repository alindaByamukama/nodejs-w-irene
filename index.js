// dependencies
// import the dependancy express
const express = require("express");
const pug = require("pug");
const path = require("path");

// imports express into the server file - entry point of our project -> this means we are using express as our server

// INSTANTIATIONS
const app = express();
// app.engine('pug', require('pug')._express)
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// CONFIGURATIONS

// MIDDLEWARE
// handles static files like css, js, images, videos
app.use(express.static(path.join(__dirname, 'public')))
// handles images you upload into your project
app.use('/public/images', express.static(__dirname + '/public/uploads')) 

// a session is often used in applications suchas login/signup
// app.use(
//   session({
//     secret: 'arbitary-string',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true }
//   })
// );
// process incoming data such as body payload - data received from client
app.use(express.urlencoded({ extended: false }));

// Simple request time logger
// app.use((req, res, next) => {
//   console.log("A new request received at " + Date.now());

//   // This function call tells that more processing is
//   // required for the current request and is in the next middleware
//   // function/route handler.
//   next();
// });

// routes
// structure of a route --> app.METHOD(PATH, HANDLER)
// creates a route for the homepage found at '/'
app.get("/", (req, res) => {
  res.send("Homepage! Hello World.");
});

// using query params
// app.get("/users/:name", (req, res) => {
//   res.send("Hello " + req.params.name);
// });

// postman --> localhost:3000/users?class=node&cohort=12
// app.get("/queryparams", (req, res) => {
//   res.send(
//     "My query params are: " + req.query.class + " and " + req.query.cohort
//   );
// });

// getting route for a file in a directory
app.get("/landing", (req, res) => {
  res.sendFile(__dirname + "/pages/landing/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/pages/about/about.html");
});

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/pages/signup/forms.html");
});
// for every post route we must first GET 
app.post("/signup", (req, res) => {
  console.log(req.body);
  res.redirect("/about");
});

// Rendering Pug files
app.get("/register", (req, res) => {
  res.render("registration");
});
// for every post route we must first GET 
app.post("/register", (req, res) => {
  console.log(req.body);
  res.redirect("/about");
});

//Simple request time logger for a specific route
app.use('/about', (req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
});

// route params are named URL segments used to capture values specified at their position in the URL
// req.params object is used to access all params passed in the url
// app.get("/books/:bookId", (req, res) => {
//   res.send(req.params);
// });

// For invalid routes
app.get("*", (req, res) => {
  res.send("404! This is an invalid URL.");
});

// bootstrapping server
app.listen(3000, () =>
  console.log("Listening on port 3000 ... server complete")
);
