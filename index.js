// dependencies
// import the dependancy express
const express = require("express");

// import express into the server file - entry point of our project
// this means we are using express as our server
// instantiations
const app = express();

// configurations

// middleware
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
// a middleware function
// Simple request time logger
app.use((req, res, next) => {
  console.log("A new request received at " + Date.now());

  // This function call tells that more processing is
  // required for the current request and is in the next middleware
  // function/route handler.
  next();
});

// routes
// structure of a route --> app.METHOD(PATH, HANDLER)
// creates a route for the homepage found at '/'
app.get("/", (req, res) => {
  res.send("Homepage! Hello World.");
});

app.post("/register", (req, res) => {
  res.send("You have registered a user");
}); 
  
app.delete("/about", (req, res) => {
  res.send("You have deleted something");
}); 

app.put("/about", (req, res) => {
  res.send("I have been changed!");
});

app.get("/about", (req, res) => {
  res.send("About page! Learn more about us.");
});

//Simple request time logger for a specific route
// app.use('/about', (req, res, next) => {
//   console.log('A new request received at ' + Date.now());
//   next();
// });

// route params are named URL segments used to capture
// values specified at their position in the URL
// req.params object is used to access all params passed in the url
app.get("/books/:bookId", (req, res) => {
  res.send(req.params);
});

// For invalid routes
app.get("*", (req, res) => {
  res.send("404! This is an invalid URL.");
});

// bootstrapping server
app.listen(3000, () =>
  console.log("Listening on port 3000 ... server complete")
);
