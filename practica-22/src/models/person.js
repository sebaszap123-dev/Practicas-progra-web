const { Schema, model } = require("mongoose");

const PersonSchema = new Schema(
  {
    nss: {
      type: Number,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    typeBlood: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Person", PersonSchema);
