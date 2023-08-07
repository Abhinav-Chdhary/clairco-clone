const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://abhinavchdhary:saymyname@cluster0.ygwaiif.mongodb.net/clairco_data?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    const changeStreamCustomer = mongoose.connection
      .collection("customers")
      .watch();

    // Listen for changes in the customers
    changeStreamCustomer.on("change", async (change) => {
      if (change) {
        // Fetch the latest blogs after a new customer is added
        const fetched_customer_users = await mongoose.connection
          .collection("customers")
          .find({})
          .toArray();

        // Update the global variable with the latest customers
        global.customers = fetched_customer_users;
      }
    });
    const fetched_customer_users = await mongoose.connection
      .collection("customers")
      .find({})
      .toArray();
    global.customers = fetched_customer_users;

    //for changes in buildings
    const changeStreamBuilding = mongoose.connection("buildings").watch();
    changeStreamBuilding.on("change", async (change) => {
      if (change) {
        const fetched_buildings = await mongoose.connection
          .collection("buildings")
          .find({})
          .toArray();
        global.buildings = fetched_buildings;
      }
    });
    const fetched_buildings = await mongoose.connection
      .collection("buildings")
      .find({})
      .toArray();
    global.buildings = fetched_buildings;
  } catch (error) {
    console.error(error);
  }
};

module.exports = mongoDB;
