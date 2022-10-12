const express = require("express");
// router method access http methods GET POST UPDATE DELETE and so on
const router = express.Router();

// ROUTES
router.get("/register", (req, res) => {
  res.render("ao/register");
});

router.post("/register", (req, res) => {
  res.send("User registration successful.");
  // to display form data in console
  console.log(req.body);
});

// make router file available for use to the outside
module.exports = router;
