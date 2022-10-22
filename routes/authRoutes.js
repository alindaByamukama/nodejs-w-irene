const express = require("express");
// router method access http methods GET POST UPDATE DELETE and so on
const router = express.Router();
const passport = require("passport");

router.get("/login", (req, res) => {
  res.render("login/ulogin");
});

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/");
  }
);

router.post("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy(function (err) {
      if (err) {
        res.status(400).send("Logout has failed");
      } else {
        return res.redirect("/login");
      }
    });
  }
});

module.exports = router;
