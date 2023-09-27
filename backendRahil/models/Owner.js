import mongoose from "mongoose";

// UniversityConfirmPassword,

const OwnerSchema = mongoose.Schema({
  OwnerName: { type: String, required: true },
  OwnerEmail: { type: String, required: true },
  OwnerPassword: { type: String, required: true },
  OwnerPublicKey: { type: String, required: true },
  // id: {type: String}
});

export default mongoose.model("Owner", OwnerSchema);
