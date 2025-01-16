const express = require("express");
const User = require("../models/Users");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// create a User using: POST "/api/auth/createuser". Doesn't require Auth    No login required
const fetchuser = require("../middleware/fetchuser");
const JWT_SECRET = "Bharatisabodstudent";

router.post(
  "/createuser",
  [
    body("name", "Enter a vaild name").isLength({ min: 3 }),

    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be a 5 charactrer").isLength({ min: 5 }),
  ],

  async (req, res) => {
    // If there are error ,return Bad request and the errors
    let success = false;
    const result = validationResult(req);
    if (!result.isEmpty()) {
      console.log("result find");
      return res.status(400).json({success, result: result.array() });
    }
    try {
      // check whether the user with email exists already
      let user = await User.findOne({ email: req.body.email });
      
      if (user) {
        return res
        .status(400)
        .json({success, error: "Sorry a user with this email already exists" });
      }
      console.log("user find ");
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      // Create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      // .then((user) => res.json(user))
      // .catch(err=>{console.log(err)
      // res.json({error: 'Please enter a unique value for email',message:err.message})});

      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET); //generate a token for user
      success = true;
      res.json({success,authtoken}); // send token
      // res.send({ errors: result.array() });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error occured");
    }
  }
);

// Authenticate a User using: POST "/api/auth/login". No login required
router.post(
  "/login",
  [body("email", "Enter a valid email").isEmail()],
  [body("password", "Password cannot be blank").exists()],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({
            success,
            error: "Please try to login with correct credential",
          });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({
            success,
            error: "Please try to login with correct credential",
          });
      }

      const dat = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(dat, JWT_SECRET); //generate a token for user
      success = true;

      res.json({ success, authtoken }); // send token
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal some error");
    }
  }
);

//  Route Get loggedin User Details using: POST"/api/auth/getuser". Login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal some error");
  }
});
module.exports = router;
