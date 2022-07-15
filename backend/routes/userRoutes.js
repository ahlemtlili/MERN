const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");
const { registerRules,loginRules, validator } = require("../middlewares/validator");
const router = express.Router();
//register user:
router.post("/registeruser", registerRules(), validator, async (req, res) => {
  const { email, password } = req.body;
  try {
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).send({ msg: "user already exist, please login" });
    }
    const newUser = new User({ ...req.body });
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword);
    newUser.password = hashedPassword;
    //erroooooooooooooooooooooooooooooooor: newUser={...newUser,password:password}
    await newUser.save();
    res.send({ msg: "user successfully registred", newUser });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

//login
router.post("/login",loginRules(),validator, async (req, res) => {
  const { email, password } = req.body;

  try {
    const existedUser = await User.findOne({ email });
    if (!existedUser) {
      return res.status(400).send({ msg: "bad credential" });
    }
    const isMatched = await bcrypt.compare(password, existedUser.password);
    if (!isMatched) {
      return res.status(400).send({ msg: "bad credential" });
    }
    const payload = { idUser: existedUser._id };
    const token = await jwt.sign(payload, process.env.secretOrPublicKey);
    res.send({ user: existedUser, token });
  } catch (error) {
    console.log(error);
  }
});

router.get("/currentUser", isAuth(), (req, res) => {
  console.log(req.user);
  res.send(req.user);
});
router.get("/allUsers", isAuth(), isAdmin, async (req, res) => {
  /*console.log(req.user);
  res.send(req.user);*/
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
