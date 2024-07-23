import mongoose from "mongoose";

export async function connectToMongoDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@example-db.0ogvtfp.mongodb.net/?retryWrites=true&w=majority&appName=example-db"
    );
    const db = mongoose.connection;
    db.once("open", () => console.log("Connected to MongoDB"));
  } catch (error) {
    console.log("db error");
  }
}


