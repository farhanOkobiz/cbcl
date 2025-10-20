const { Router } = require("express");
const subscriptionController = require("../../modules/subscription/subscription.controller");

const subscriptionRoute = Router()

subscriptionRoute.post("/", subscriptionController.createSubscripton)

module.exports = subscriptionRoute