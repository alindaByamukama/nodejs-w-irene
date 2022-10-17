const express = require("express");
// router method access http methods GET POST UPDATE DELETE and so on
const router = express.Router();
// import model
const RegisterUser = require("../models/User");

// ROUTES

router.get("/register", (req, res) => {
  res.render("ao/register");
});

router.post("/register", async (req, res) => {
  try {
    const user = new RegisterUser(req.body);
    // check for existing user id in db
    let userIdExist = await RegisterUser.findOne({ userId: req.body.userId });
    if (userIdExist) {
      return res.status(400).send("This user already exists, please try again");
    } else {
      // while we post our form the value of the password is captured for each user registered
      await RegisterUser.register(user, req.body.password, (error) => {
        if (error) {
          throw error;
        }
        res.redirect("/dashboard");
      });
    }
  } catch (error) {
    res.status(400).send("Oops something went wrong, please try again.");
    console.log(error);
  }
});

// how to get the list of registered users
router.get("/userlist", async (req, res) => {
  try {
    let items = await RegisterUser.find({ role: "farmerOne" });
    res.render("uList/userList", { farmerones: items });
  } catch (error) {
    res.status(400).send("Unable to find specified user in database!");
  }
});

// make router file available for use to the outside
module.exports = router;
