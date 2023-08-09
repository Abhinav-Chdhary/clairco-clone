const express = require("express");
const app = express();
const mongoDB = require("./db");
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Include the allowed methods
  next();
});
mongoDB()
  .then(() => {
    console.log("Database operation completed successfully.");
    // Additional code here, if needed
  })
  .catch((error) => {
    console.error("An error occurred during database operation:", error);
  });

app.use(express.json());
//for creating new Customer
app.use("/api", require("./Routes/AdminNewCustomer"));
//for new Building
app.use("/api", require("./Routes/AdminNewBuilding"));
//for admin login
app.use("/api", require("./Routes/AdminLogin"));
//update buildings
app.use("/api", require("./Routes/AdminUpdateBuilding"));
//for customers display
app.use("/api", require("./Routes/AdminDisplayCustomers"));
//for buildings
app.use("/api", require("./Routes/AdminDisplayBuildings"));
//for deleting building
app.use("/api", require("./Routes/AdminDeleteBuilding"));
//for deleting customer
app.use("/api", require("./Routes/AdminDeleteCustomer"));
//----customer routes----
//for customer login
app.use("/api", require("./RoutesC/CustomerLogin"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000);
