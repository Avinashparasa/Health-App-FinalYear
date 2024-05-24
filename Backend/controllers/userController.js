const express = require("express");

module.exports.userLogin = async (req, res) => {
  res.status(200).json({ message: "user login" });
};

module.exports.userRegister = async (req, res) => {
  res.status(200).json({ message: "user register" });
};
