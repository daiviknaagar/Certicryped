import user from "../models/user.js";

export const getuniversites = async (req, res) => {
  try {
    // console.log('inside the backend');
    const universities = await user.find({ });
    res.status(200).json(universities);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateUniversity = async (req, res) => {
  try {
    const updatedUniversity = req.body;
    await user.findByIdAndUpdate(updatedUniversity._id, {
      isApproved: updatedUniversity.isApproved,
    });
    res.status(200).json({ message: "University updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
