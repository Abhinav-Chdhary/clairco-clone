const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://abhinavchdhary:saymyname@cluster0.ygwaiif.mongodb.net/clairco_data?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    const changeStream = mongoose.connection.collection("customers").watch();

    // Listen for changes in the collection
    changeStream.on("change", async (change) => {
      if (change) {
        // Fetch the latest blogs after a new blog is added
        const fetched_customer_users = await mongoose.connection
          .collection("customers")
          .find({})
          .toArray();

        // Update the global variable with the latest blogs
        global.customers = fetched_customer_users;
      }
    });
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
