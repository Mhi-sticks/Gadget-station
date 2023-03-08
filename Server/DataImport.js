import express from "express";
// import mongoose from 'mongoose'
// import dotenv from 'dotenv'
// import colors from 'colors'
import asyncHandler from "express-async-handler"
import users from "./Data/users.js";
import DATA from "./Data/Data.js";
import User from "./models/UserModel.js";
import Product from "./models/ProductModel.js";
// import Order from './models/orderModel.js'
// import connectDB from './config/db.js'

//import sample data to database
const ImportData = express.Router();

ImportData.post("/user", 
asyncHandler( async(req, res) => {
  await User.deleteMany({});
  const importUser = await User.insertMany(users);
  res.send({ importUser });
  console.log(users.type)
})
);

ImportData.post("/products", 
asyncHandler( async(req, res) => {
  await Product.deleteMany({});
  const importProducts = await Product.insertMany(DATA);
  res.send({ importProducts });
  console.log(DATA.type)
})
);

export default ImportData;
