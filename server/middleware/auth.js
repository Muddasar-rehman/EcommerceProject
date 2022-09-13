require("dotenv").config();
const jwt = require("jsonwebtoken");
const multer = require("multer");

const validData = (req, res, next) => {
  if (!req.body.fullName) {
    res.status(400).json({ message: "Full Name is required" });
    return;
  }

  if (!req.body.email) {
    res.status(400).json({ message: "Email is required" });
    return;
  }

  if (!req.body.password) {
    res.status(400).json({ message: "Password is required" });
    return;
  }
  next();
};

const userAuth = (req, res, next) => {
  try {
    const token = req.headers.token;
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "productImage/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]
    );
  },
});

const upload = multer({ storage: storage }).single("anything");

module.exports = { validData, userAuth, upload };
