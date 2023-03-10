const Pet = require("../models/pet.model");

module.exports = {
  getPets: async (req, res) => {
    try {
      const pets = await Pet.find({ sold: false })
        .sort({ createdAt: -1 })
        .populate([
          {
            path: "postedBy",
            select: "-password ",
          },
          {
            path: "diseaseId",
            model: "diseases",
          },
        ]);

      if (!pets.length)
        return res.status(404).json({ message: "No Pet Available" });

      res.status(200).json(pets);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
