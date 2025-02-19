import jwt, { decode } from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Récupérer le token du header

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOCKEN_SECRET_KEY);
    req.user = { id: decoded.id }; 
    next();
  } catch (error) {
    return res.status(403).json({ message: "Access denied :Invalid token" });
  }
};

export default authMiddleware;
