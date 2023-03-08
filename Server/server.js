import express from "express";
import ImportData from "./DataImport.js";
import dotenv from "dotenv";
import connectDB from "./config/MongoDb.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

//Load product from server
// app.get("/api/products", (req, res) => {
//   res.json(Data);
// });

//single product from server
// app.get("/api/product/:id", (req, res) => {
//   const product = Data.find((p) => p.id === req.params.id);
//   res.json(product);
// });

//Api to use
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

//error handler
app.use(notFound);
app.use(errorHandler);

//api testing
app.get("/", (req, res) => {
  res.send("API is running fast....");
});

//creating port
const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server running in port ${PORT}...`));
