const mongoose = require("mongoose");
const { Schema } = mongoose;


const subscriptionSchemaDef = new Schema({
  email: {
    type: String,
    required: true,
  },
});


const Subscription = mongoose.model("Subscription", subscriptionSchemaDef);

module.exports = Subscription;
