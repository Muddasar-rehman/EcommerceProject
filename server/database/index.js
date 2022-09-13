const mongoose = require("mongoose");

const connectdatabase = async () => {
  const databaseinfo = await mongoose.connect(process.env.DATABASE_URL);
  console.log(
    `database connected successfully ${databaseinfo.connection.host}`
  );
};

module.exports = connectdatabase;
