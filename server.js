// DEPENDENCIES

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const config = require("./config/db");
const passport = require("passport");

//express sesssion
const expressSession = require("express-session")({
  secret: "secretStuff",
  resave: false,
  saveUninitialized: false,
});

// IMPORTING ROUTE FILES
const registrationRoutes = require("./routes/regRoutes");

// INSTANTIATIONS

const app = express();

// DATABASE CONNECTION

mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Check for db errors
db.on("error", (err) => {
  console.error(err);
});

// CONFIGURATIONS

// app.engine('pug', require('pug')._express)
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// MIDDLEWARE

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/public/images", express.static(__dirname + "/public/uploads"));
app.use(expressSession);

// PASSPORT CONFIG MIDDLEWARE

app.use(passport.initialize());
app.use(passport.session());

// ROUTES

app.use("/user", registrationRoutes);

app.get("*", (req, res) => {
  res.send("404! This is an invalid URL.");
});

// BOOTSTRAPPING SERVER

app.listen(4000, () =>
  console.log("Listening on port 4000 ... server complete")
);
