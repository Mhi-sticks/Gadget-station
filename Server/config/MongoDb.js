import mongoose from "mongoose";

const connectDB = async () => {
  //database connection
  try {
    await
     mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    //database connected alert
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(`Error: ${error.message}`); //database not connected message
    process.exit(1);
  }
};

export default connectDB; //exporting database
