// getting-started.js
const mongoose = require("mongoose");
const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

main().catch((err) => console.log(err));

function printUsage(args) {
  console.log("Usage: node mongo.js password name number");
  console.log("example: node mongo.js <password> eric 123-123-1234");
  console.log(args);
}

function AddPerson(url, name, number) {
  mongoose.connect(url);

  const person = new Person({
    name,
    number,
  });
  person.save().then(() => {
    console.log(person, " was saved");
    mongoose.disconnect();
  });
}

function loadAllPeron(url) {
  mongoose.connect(url);

  Person.find().then((person) => {
    console.log(person);
    mongoose.disconnect();
  });
}
async function main() {
  const args = process.argv;

  let url = "mongodb://127.0.0.1:27017/test";
  let password;
  let name;
  let num;
  switch (args.length) {
    case 2:
      printUsage(args);
      break;
    case 3:
      password = args[2];
      loadAllPeron(url);
      break;
    case 4:
      password = args[2];
      name = args[3];
      printUsage(args);
      break;
    case 5:
      password = args[2];
      name = args[3];
      num = args[4];
      AddPerson(url, name, num);
      break;
    default:
      console.log("Usage: node mongo.js <bookname>");
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
