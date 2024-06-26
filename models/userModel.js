const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    phone_no: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
    },
    password: {
      type: String,
    },
    buyed_products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductModel",
      },
    ],
    // cart_items: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "ProductModel",
    //   },
    // ],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("UserModel", userSchema);

module.exports = UserModel;
