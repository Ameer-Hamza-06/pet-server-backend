const express = require("express");
const router = express.Router();
const diseases = require("../controllers/diseases.controller");

router.get("/get", diseases.getDisease);
router.post("/create", diseases.create);
router.get("/recommendations", diseases.getRecommendations);

module.exports = router;
