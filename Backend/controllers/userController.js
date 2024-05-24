const express = require("express");
const User = require("../models/userModel");

module.exports.userLogin = async (req, res) => {
  res.status(200).json({ message: "user login" });
};

module.exports.userRegister = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.signUp(name, email, password);
    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
