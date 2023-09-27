import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Owner from "../models/Owner.js";

export const signup = async (req, res) => {
  const {
    OwnerName,
    OwnerEmail,
    OwnerPassword,
    OwnerConfirmPassword,
    OwnerPublicKey,
  } = req.body;
  try {
    const existingOwner = await Owner.findOne({ OwnerEmail });
    if (existingOwner)
      return res.status(201).json({ message: "Owner already exists" });
      
    if (OwnerPassword !== OwnerConfirmPassword) return res.status(404).json({ message: "Passwords dont match" });
    const hashedPassoword = await bcrypt.hash(OwnerPassword, 12);
    console.log("after check")
    const result = await Owner.create({
      OwnerName,
      OwnerEmail,
      OwnerPassword: hashedPassoword,
      OwnerPublicKey,
    });
    
    const token = jwt.sign({ email: result.OwnerEmail, id: result._id }, "test", {
      expiresIn: "1h",
    });

    res.status(200).json({ result, token });
    // console.log(result);
    // res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};

export const signin = async (req, res) => {
  const { OwnerEmail, OwnerPassword } = req.body;
  try {
    console.log(OwnerEmail);
    const existingOwner = await Owner.findOne({ OwnerEmail });
    if (!existingOwner)
      return res.status(201).json({ message: "Owner Doesn't exists" });
      console.log("check");
      // console.log(existingOwner);
    
      const isPasswordCorrect = await bcrypt.compare(OwnerPassword, existingOwner.OwnerPassword);

    console.log("after check")
    if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid Credentials' });

    const token = jwt.sign({ email: existingOwner.OwnerEmail, id: existingOwner._id }, 'test', { expiresIn: "1h" });

    res.status(200).json({ result: existingOwner, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};
