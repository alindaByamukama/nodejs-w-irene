// DEPENDENCIES

const express = require("express");
const path = require("path");

// IMPORTING ROUTE FILES
const registrationRoutes = require("./routes/regRoutes");

// INSTANTIATIONS

const app = express();

// CONFIGURATIONS

// app.engine('pug', require('pug')._express)
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// MIDDLEWARE

app.use(express.static(path.join(__dirname, "public")));
app.use("/public/images", express.static(__dirname + "/public/uploads"));
app.use(express.urlencoded({ extended: false }));

// ROUTES
// this is custom middleware designed by ourselves
app.use("/user", registrationRoutes);

app.get("*", (req, res) => {
  res.send("404! This is an invalid URL.");
});

// BOOTSTRAPPING SERVER

app.listen(4000, () =>
  console.log("Listening on port 4000 ... server complete")
);
