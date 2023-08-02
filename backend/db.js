const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://abhinavchdhary:saymyname@cluster0.ygwaiif.mongodb.net/clairco_data?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    const fetched_admin_users = await mongoose.connection
      .collection("AdminUsers")
      .find({})
      .toArray();
    global.admin_users = fetched_admin_users;
  } catch (error) {
    console.error(error);
  }
};

module.exports = mongoDB;
