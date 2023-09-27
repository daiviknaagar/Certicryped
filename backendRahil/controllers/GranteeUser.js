import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signin = async (req, res) => {
  const { account } = req.body;
  try {
    const existingGrantee = await Grantee.findOne({ GranteeEmail });
    if (!existingGrantee)
      return res.status(201).json({ message: "Grantee Doesn't exists" });
    console.log("check");
    // console.log(existingGrantee);

    const isPasswordCorrect = await bcrypt.compare(GranteePassword, existingGrantee.GranteePassword);

    console.log("after check")
    if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid Credentials' });

    const token = jwt.sign({ email: existingGrantee.GranteeEmail, id: existingGrantee._id }, 'test', { expiresIn: "1h" });

    res.status(200).json({ result: existingGrantee, token });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};
