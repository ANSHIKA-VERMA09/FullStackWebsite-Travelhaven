const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data= initData.data.map((obj)=>({...obj,owner:"672b6f89bd979a01585c1e37"}));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();

