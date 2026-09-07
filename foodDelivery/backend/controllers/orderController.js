import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import crypto from "crypto";

// Place user order
const placeOrder = async (req, res) => {
  
  try {
    console.log("USER ID WHILE PLACING ORDER:", req.userId);
    const newOrder = new orderModel({
      userId: req.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
      payment: false,
    });

   const savedOrder = await newOrder.save();
   console.log(savedOrder);

    await userModel.findByIdAndUpdate(req.userId, {
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

//user order for frontend
const userOrder =  async (req,res) => {
  console.log("USER ID FROM TOKEN:", req.userId);

  try{
    const orders = await orderModel.find({ userId: req.userId });
    console.log("Orders list : ", orders);
    res.json({ success: true, data: orders });
    console.log("ORDERS FOR THIS USER:", orders);

    const allOrders = await orderModel.find({});
    console.log("ALL ORDERS:", allOrders);
    //6a9b6cb3c122be1a4d96413b
  }catch(error){
    console.log(error);
    res.json({success : false, message : error.message})

  }
}
//listing orders from admin panel
const listOrders = async (req,res) => {
  try{
    const orders = await orderModel.find({});
    res.json({success : true , data :orders}) 
  }catch(error){
    console.log(error);
    res.json({success : false, message : error.message})
  }
}
// api for updating order status
const updateStatus = async(req,res) => {
    try{
      await orderModel.findByIdAndUpdate(req.body.orderId, { status : req.body.status});
      res.json({success : true , message : "Status Updated"})
    }catch(error){
      console.log("Error");
      res.json({success : false, message : error.message})
    }
}
export { placeOrder ,userOrder,listOrders, updateStatus};
