import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    loanId: {type:String,unique: true},
    amount: Number,
    interest: Number,
    duration: Number,
    disbursement: Date,
    installement: String,
  },
  { timestamps: true }
);

export default mongoose.model("loan", Schema);
