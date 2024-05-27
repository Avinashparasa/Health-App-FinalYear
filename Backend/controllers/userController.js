const express = require("express");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_secret, { expiresIn: "3d" });
};

module.exports.userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    //create token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.userRegister = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.signUp(name, email, password);
    //create token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
