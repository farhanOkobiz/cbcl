
const withTransaction = require("../../middleware/transactions/withTransaction.js");
const Subscription = require("../../models/subscripton/subscriptionSchema.js");
const responseHandler = require("../../utils/responseHandler");

class SubscriptionController {
  createSubscripton = withTransaction(async (req, res, next) => {
    const { email } = req.body;

    const subscriptionResult = await Subscription.create({ email });
    
    const resDoc = responseHandler(
      201,
      "Subscription created successfully",
      subscriptionResult
    );
    res.status(resDoc.statusCode).json(resDoc);
  });
}

module.exports = new SubscriptionController();
