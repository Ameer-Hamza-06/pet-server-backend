const express = require("express");
const router = express.Router();
const notifications = require("../controllers/notification.controller");

router.get("/get", notifications.getNotifications);

module.exports = router;
