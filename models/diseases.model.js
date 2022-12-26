const { Schema, model } = require("mongoose");

const diseaseSchema = new Schema({
  pet_type: { type: String, required: true },
  breed: { type: String, required: true },
  avg_age: { type: String, required: true },
  summer_diseases: [
    {
      disease_name: { type: String },
      symptoms: { type: String },
    },
  ],
  winter_diseases: [
    {
      disease_name: { type: String },
      symptoms: { type: String },
    },
  ],
  food_recommended: { type: String, required: true },
});

module.exports = model("diseases", diseaseSchema);
