const express = require("express");
const app = express();
const mongoDB = require("./db");
mongoDB()
  .then(() => {
    console.log("Database operation completed successfully.");
    // Additional code here, if needed
  })
  .catch((error) => {
    console.error("An error occurred during database operation:", error);
  });
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
//for creating new Customer
app.use("/api", require("./Routes/AdminNewCustomer"));
//for new Building
app.use("/api", require("./Routes/AdminNewBuilding"));
//for admin login
app.use("/api", require("./Routes/AdminLogin"));
//for customers display
app.use("/api", require("./Routes/AdminDisplayCustomers"));
//for buildings
app.use("/api", require("./Routes/AdminDisplayBuildings"));
//update buildings
app.use("/api", require("./Routes/AdminUpdateBuilding"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000);
