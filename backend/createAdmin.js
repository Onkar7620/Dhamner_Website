require("dotenv").config({ path: "./.env" }); // 🔥 FORCE LOAD

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

console.log("MONGO URI:", process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI);

const createAdmin = async () => {
  try {
    const hashedPassword = await bcrypt.hash("yashwantdhamner@2026", 10);

    await Admin.create({
      email: "dhamner189585@gmail.com",
      password: hashedPassword,
    });

    console.log("Admin created ✅");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

createAdmin();