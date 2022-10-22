const express = require("express");
// router method access http methods GET POST UPDATE DELETE and so on
const router = express.Router();
// handles image uploads
const multer = require("multer");
// handles check for loggedin users
const connectEnsureLogin = require("connect-ensure-login");
// import model
const UploadProduce = require("../models/Ufupload");
// const RegisterUser = require("../models/User");

// handles image upload
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/produce/ufupload");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// instantiate variable upload to store multer functionality to upload image
var upload = multer({ storage: storage });

// ROUTES

// router.get("/ufupload", async (req, res) => {
//   let ufList = await RegisterUser.find({role: 'urbanFarmer'})
//   res.render("produce/ufupload", {urbanFarmers: ufList});
// });

router.get(
  "/ufupload",
  connectEnsureLogin.ensureLoggedIn(),
  async (req, res) => {
    res.render("produce/ufupload", { currentUser: req.session.user });
  }
);

router.post(
  "/ufupload",
  connectEnsureLogin.ensureLoggedIn(),
  upload.single("produceimg"),
  async (req, res) => {
    try {
      const product = new UploadProduce(req.body);
      product.productimg.req.file.path;

      await product.save();
      res.redirect("/dashboard");
    } catch (error) {
      res.status(400).send("Produce not saved, please try again");
      console.log(error);
    }
  }
);

// make router file available for use to the outside
module.exports = router;
