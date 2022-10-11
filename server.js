// DEPENDENCIES

const express = require("express");
const path = require("path");

// INSTANTIATIONS

const app = express();

// CONFIGURATIONS

// app.engine('pug', require('pug')._express)
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

// MIDDLEWARE

app.use(express.static(path.join(__dirname, 'public')))
app.use('/public/images', express.static(__dirname + '/public/uploads')) 

// ROUTES

app.get("*", (req, res) => {
  res.send("404! This is an invalid URL.");
});

// BOOTSTRAPPING SERVER

app.listen(3000, () =>
  console.log("Listening on port 3000 ... server complete")
);
