const express = require("express");
const connectdatabase = require("./database/index");
const authRoute = require("./routes/auth");
const adminRoute = require("./routes/admin");
const prouctRoute = require("./routes/product");
require("dotenv").config();

const app = express();

connectdatabase();

app.use(express.json());
app.use("/auth/", authRoute);
app.use("/admin/", adminRoute);
app.use("/product/", prouctRoute);

app.listen(process.env.PORT, () => {
  console.log(`localhost running on port ${process.env.PORT}`);
});
