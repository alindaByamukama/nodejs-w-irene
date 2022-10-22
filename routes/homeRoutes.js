const express = require("express");
// router method access http methods GET POST UPDATE DELETE and so on
const router = express.Router();

router.get("/", (req, res) => {
  res.render("landing/home");
});

module.exports = router;
