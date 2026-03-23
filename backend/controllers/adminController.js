const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config(); // add at top

exports.loginAdmin = async (req, res) => {

  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Admin not found ❌",
      });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password ❌",
      });
    }

   

const token = jwt.sign(
  { id: admin._id, email: admin.email },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
);

    res.status(200).json({
      success: true,
      token,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};