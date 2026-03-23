const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({
      success: false,
      message: "No token ❌",
    });
  }

  try {
    const decoded = jwt.verify(token, "mysecretkey");
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid token ❌",
    });
  }
};