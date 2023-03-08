import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../Middleware/AuthMiddleware.js";
import Order from "../models/OrderModel.js";

const orderRouter = express.Router();

//create order
orderRouter.post(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;
    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error("No order items")
        
    }else {
        const order = new Order({
            orderItems,
            user:req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
        })

        const createOrder = await order.save()
        res.status(201).json(createOrder)
    }
  })
);
//get order by id
orderRouter.get(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params._id).populate(
        "user",
        "name email"
    )
      
    if (order) {
        res.json(order)
        
    }else {
       
        res.status(404)
        throw new Error("Order Not Found")
    }
  })
);

//order is paid
orderRouter.put(
  "/:id/pay",
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params._id)
      
    if (order) {
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult = {
_id:req.body._id,
status:req.body.status,
update_time:req.body.update_time,
email_address:req.body.email_address,
        }

        const updateOrder = await order.save()
        res.json(updateOrder)
    }else {
       
        res.status(404)
        throw new Error("Order Not Found")
    }
  })
);

//user login orders
orderRouter.put(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.find({user: req.params._id}).sort({_id:-1})
      res.json(order)
  })
);

export default orderRouter;
