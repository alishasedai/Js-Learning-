import userModel from "../models/userModel.js";

//add items to user cart
const addToCart = async (req,res) => {
    try {
        console.log("USER ID:", req.userId);
        console.log("ITEM ID:", req.body.itemId);
        let userData = await userModel.findById(req.userId);
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;

        }else{
            cartData[req.body.itemId] += 1
        }
        await userModel.findByIdAndUpdate(req.userId,{cartData});
        res.json({ success : true,
                   message : "Added To Cart"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message : "Error"})
        
    }
}

//removes items from user cart
const removeFromCart = async(req,res) => {
    try {
        let userData = await userModel.findById(req.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId] > 0){
            cartData[req.body.itemId] -= 1 
        }
        await userModel.findByIdAndUpdate(req.userId,{cartData});
        res.json({success : true, message : "Removed From Cart"});
    } catch (error) {
        console.log("Error");
        res.json({success : false, message : "Error Removing"})
    }
}

//fetch userCart Data 
const getCart = async(req,res) => {
  try {
      let userData = await userModel.findById(req.userId);
      let cartData = await userData.cartData;
      res.json({ success: true, cartDatass :cartData });
  } catch (error) {
    console.log(error);
    res.json({success : false,message :"Error from getCart"})

    
  }
}

export {addToCart,removeFromCart,getCart}