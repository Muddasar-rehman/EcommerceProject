const AdminModel = require("../models/admin");

const adminSignup = async (req, res) => {
  try {
    const user = await AdminModel.create({
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(200).json(error);
  }
};

const adminSignin = async (req, res) => {
  try {
    const user = await AdminModel.find({
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(200).json(error);
  }
};

module.exports = { adminSignup, adminSignin };
