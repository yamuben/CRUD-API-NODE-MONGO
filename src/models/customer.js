import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    name: String,
    account: { type: String, unique: true },
    gender: { type: String, enum: ["male", "female"] },
    dateOfBirth: Date,
    address: String,
  },
  { timestamps: true }
);
export default mongoose.model("customer", Schema);
