require("dotenv").config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI|| 'mongodb://127.0.0.1:27017/test';
console.log("the application configuration")
console.log(PORT,MONGODB_URI)
module.exports = {
  PORT,
  MONGODB_URI,
};
