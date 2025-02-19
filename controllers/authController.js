import { hash } from "bcrypt";
import User from "../models/User.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const  register = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
      return res.status(400).send("Invalid data");
    }

    const foundUser = await User.findOne({
      where: { email: email },
    });

    if (foundUser) {
      return res.status(400).send("User already exists");
    }

    const hashedPassword = await hash(password, 10);

    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    return res
      .status(201)
      .json({ message: "User registered successfully", user });
  } catch (e) {
    console.error(e);
    return res.status(500).send("Internal server error");
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "invalid data" });
  }
  const foundUser = await User.findOne({
    where: {
      email: email,
    },
  });
  if (!foundUser) {
    return res
      .status(401)
      .json({ message: "user dosen't exit  please verify yoour email" });
  }
  const verify_password = await bcrypt.compare(password, foundUser.password);
  if (!verify_password)
    return res.status(401).json({ message: "wrong password" });
  const accessToken = jwt.sign(
    { id: foundUser.userId },
    process.env.ACCESS_TOCKEN_SECRET_KEY,
    { expiresIn: "7d" }
  );
  return res.status(200).json({ accessToken, email: foundUser.email });
};

export default { register, login };
