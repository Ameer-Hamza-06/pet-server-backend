const Diseases = require("../models/diseases.model");

module.exports = {
  getDisease: async (req, res) => {
    try {
      const diseases = await Diseases.find();
      res.status(200).json(diseases);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  create: async (req, res) => {
    try {
      const diseases = await Diseases.create(req.body);
      res.status(201).json({
        data: { diseases },
        message: "Disease has been added successfully",
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  getRecommendations: async (req, res) => {
    try {
      const { pet_type, breed } = req.query;
      const recommendations = await Diseases.find({ pet_type, breed });
      if (!recommendations.length) {
        return res
          .status(404)
          .json({ message: "Pet type or Breed doesn't exist" });
      }
      res.status(200).json(recommendations);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
