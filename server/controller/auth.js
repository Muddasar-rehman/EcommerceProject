const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    const user = await UserModel.create({
      fullName: req.body.fullName,
      email: req.body.email,
      password: hashedPassword,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

const signin = async (req, res) => {
  const user = await UserModel.findOne({
    email: req.body.email,
  });
  if (!user) {
    res.status(200).json({ message: "user does not exit" });
  }
  const isValidPassword = bcrypt.compareSync(req.body.password, user.password);

  if (!isValidPassword) {
    res.status(400).json({ message: "password donot match" });
  }

  const token = jwt.sign(
    {
      fullName: user.fullName,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );
  res.status(200).json({ message: "Successfully sign In", token });
};

module.exports = { signup, signin };
