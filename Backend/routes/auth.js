const express = require("express");
const bcrypt = require("bcryptjs");

const USer = require("../model/User");

const router = express.Router();

router.get("/register", async (req, res) => {
  // router code here
  const { username, email, password } = req.body;

  try {
    let user = await USer.findOne({ email });
    if (user) return res.status(400), json({ mesage: "user exist" });

    const hashPassword = await bcrypt.hash(password, 10);
    user = new User({
      username,
      email,
      password: hashPassword,
    });

    res.status(201).json({ message: " user created sussessfully" });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

module.exports = router;
