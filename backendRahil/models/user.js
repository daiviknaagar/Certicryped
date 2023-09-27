import mongoose from "mongoose";

// UniversityConfirmPassword,

const userSchema = mongoose.Schema({
  isApproved:{ type: Boolean, required: true },
  UniversityName: { type: String, required: true },
  UniversityEmail: { type: String, required: true },
  UniversityPassword: { type: String, required: true },
  Branch: { type: String, required: true },
  UniversityPublicKey: { type: String, required: true },
  BranchPublicKey: { type: String, required: true },
  // id: {type: String}
});

export default mongoose.model("User", userSchema);
