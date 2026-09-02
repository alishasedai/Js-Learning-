import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import crypto from "crypto";

// Place user order
const placeOrder = async (req, res) => {
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
      payment: false,
    });

    await newOrder.save();

    await userModel.findByIdAndUpdate(req.body.userId, {
      cartData: {},
    });

    // eSewa payment details
    const transaction_uuid = newOrder._id.toString();

    const total_amount = req.body.amount;

    const product_code = process.env.ESEWA_PRODUCT_CODE;

    const message =
      `total_amount=${total_amount},` +
      `transaction_uuid=${transaction_uuid},` +
      `product_code=${product_code}`;

    const signature = crypto
      .createHmac("sha256", process.env.ESEWA_SECRET_KEY)
      .update(message)
      .digest("base64");

    res.json({
      success: true,

      payment: {
        amount: total_amount,
        tax_amount: 0,
        total_amount: total_amount,

        transaction_uuid: transaction_uuid,

        product_code: product_code,

        product_service_charge: 0,
        product_delivery_charge: 0,

        success_url: `${process.env.BACKEND_URL}/api/order/esewa-success`,

        failure_url: `${process.env.BACKEND_URL}/api/order/esewa-failure`,

        signed_field_names: "total_amount,transaction_uuid,product_code",

        signature: signature,
      },
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

export { placeOrder };
