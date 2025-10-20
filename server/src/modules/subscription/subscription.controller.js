const withTransaction = require("../../middleware/transactions/withTransaction.js");
const { SubscriptionSchema } = require("../../models/index.js");
const responseHandler = require("../../utils/responseHandler");

class SubscriptionController {
  createSubscripton = withTransaction(async (req, res, next) => {
    const { email } = req.body;

    const subscriptionResult = await SubscriptionSchema.create({ email });
    
    const resDoc = responseHandler(
      201,
      "SubScripton Created successfully",
      subscriptionResult
    );
    res.status(resDoc.statusCode).json(resDoc);
  });
}

module.exports = new SubscriptionController();
