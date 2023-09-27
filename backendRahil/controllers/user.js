import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import user from "../models/user.js";

export const signup = async (req, res) => {
  const {
    UniversityName,
    UniversityEmail,
    UniversityPassword,
    UniversityConfirmPassword,
    Branch,
    UniversityPublicKey,
    BranchPublicKey,
  } = req.body;
  // console.log(req.body);

  try {
    const existingUser = await user.findOne({ UniversityEmail });
    if (existingUser) return res.status(201).json({ message: "User already exists" });
    // if(UniversityPassword)
    if (UniversityPassword !== UniversityConfirmPassword) return res.status(404).json({ message: "Passwords dont match" });

    const hashedPassoword = await bcrypt.hash(UniversityPassword, 12);


    console.log("before result");
    const result = await user.create({
      isApproved: false,
      UniversityName,
      UniversityEmail,
      UniversityPassword: hashedPassoword,
      Branch,
      UniversityPublicKey,
      BranchPublicKey,
    });

    const token = jwt.sign({ email: result.UniversityEmail, id: result._id }, "test", {
      expiresIn: "1h",
    });

    // res.status(200).json({ result, token });
    // console.log(result);
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};

export const signin = async (req, res) => {
  const {
    UniversityEmail,
    UniversityPassword
  } = req.body;
  try {
    console.log(UniversityEmail);
    const existingUser = await user.findOne({ UniversityEmail });
    // console.log(existingUser);
    if (!existingUser) return res.status(201).json({ message: "User Doesn't exists" });
    const isPasswordCorrect = await bcrypt.compare(UniversityPassword, existingUser.UniversityPassword);

    if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid Credentials' });
    console.log("ahil");


    const token = jwt.sign({ email: existingUser.UniversityEmail, id: existingUser._id }, 'test', { expiresIn: "1h" });

    console.log("Rahil");


    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }

}