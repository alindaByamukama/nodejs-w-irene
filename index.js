// dependencies
// import the dependancy express
const express = require("express");

// import express into the server file - entry point of our project
// this means we are using express as our server
// instantiations
const app = express();

// configurations
// middleware

// routes
// structure of a route --> app.METHOD(PATH, HANDLER)
// creates a route for the homepage found at '/'
app.get("/", (req, res) => {
  res.send("Homepage! Hello World.");
});

app.get("/about", (req, res) => {
    res.send("About page! Learn more about us.");
  });

// bootstrapping server
app.listen(3000, () =>
  console.log("Listening on port 3000 ... server complete")
);
