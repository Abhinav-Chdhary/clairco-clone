const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://abhinavchdhary:saymyname@cluster0.ygwaiif.mongodb.net/clairco_data?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    const fetched_customer_users = await mongoose.connection
      .collection("customers")
      .find({})
      .toArray();
    global.customers = fetched_customer_users;
  } catch (error) {
    console.error(error);
  }
};

module.exports = mongoDB;
