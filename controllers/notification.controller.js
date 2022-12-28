const Notification = require("../models/notification.model");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

module.exports = {
  getNotifications: async (req, res) => {
    try {
      const { id } = jwt.verify(req.query.token, JWT_SECRET);
      const notifications = await Notification.find({
        userId: id,
      })
        .sort({ createdAt: -1 })
        .populate([
          { path: "userId", model: "user" },
          { path: "petId", model: "pet" },
        ]);
      res.status(200).json(notifications);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  createNotification: async (obj) => {
    try {
      const notifications = await Notification.create(obj);
      return notifications;
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};
