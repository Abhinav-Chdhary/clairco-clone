const mongoose = require("mongoose");

const { Schema } = mongoose;

const BuildingSchema = new Schema({
  company: {
    type: String,
    required: true,
  },
  building: {
    type: String,
    required: true,
  },
  geolocation: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  has_device: {
    type: Boolean,
    required: true,
  },
  pm_2_5: {
    type: Boolean,
    required: true,
  },
  pm_10: {
    type: Boolean,
    required: true,
  },
  co2: {
    type: Boolean,
    required: true,
  },
  tvoc: {
    type: Boolean,
    required: true,
  },
  temperature: {
    type: Boolean,
    required: true,
  },
  humidity: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("buildings", BuildingSchema);
