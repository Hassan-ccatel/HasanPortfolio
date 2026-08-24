const jwt = require("jsonwebtoken");

const adminAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        msg: "Unauthorized",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    if (decoded.role !== "admin") {
      return res.status(403).json({
        success: false,
        msg: "Access denied",
      });
    }

    req.admin = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      msg: "Invalid or expired token",
    });
  }
};

module.exports = adminAuth;