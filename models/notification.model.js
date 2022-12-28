const { Schema, model } = require("mongoose");

const notificationSchema = new Schema(
  {
    petId: { type: Schema.Types.ObjectId, ref: "pet" },
    userId: { type: Schema.Types.ObjectId, ref: "user" },
    message: { type: String },
    seen: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = model("notification", notificationSchema);
