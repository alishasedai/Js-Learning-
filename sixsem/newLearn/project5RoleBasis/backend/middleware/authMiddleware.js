const jwt = require("jsonwebtoken");

const verifyLogin = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Token not found. Please login first.",
    });
  }

  try {
    const decoded = jwt.verify(token, "alishasecretKey");

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

module.exports = { verifyLogin };
