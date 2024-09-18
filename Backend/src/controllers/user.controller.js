import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findOne(userId);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ vaildateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    console.log(
      "something went wrong while genetating access and refresh token",
      error
    );
  }
};

const registerUser = async (req, res) => {
  try {
    // console.log(req.body);
    
    const { name, email, password } = req.body;
    // console.log(email)
    // console.log(password)
    // console.log(name)
    if ([name, email, password].some((field) => field?.trim() === "")) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const existedUser = await User.findOne({ email });

    if (existedUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    if (!createdUser) {
      return res
        .status(404)
        .json({ message: "something went wrong while creating the user" });
    }

    return res.status(200).json({ createdUser });
  } catch (error) {
    console.log("Unable to register the user", error);
    return res
      .status(500)
      .json({ message: "Server error, please try again later." });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please enter email and password" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not registered" });
    }

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    const options = { httpOnly: true, secure: true };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({
        message: "Login successful",
        loggedInUser,
        accessToken,
        refreshToken,
      });
  } catch (error) {
    console.error("Error logging in", error);
    return res.status(500).json({ message: "Server error, please try again later." });
  }
};


const logoutUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      req.user._id,
      {
        $set: {
          refreshToken: undefined,
        },
      },
      {
        new: true,
      }
    );
    const option = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .clearCookie("accessToken", option)
      .clearCookie("refreshToken", option)
      .json({ message: "user has logged out successfully" });
  } catch (error) {
    console.error("not able to logout the user", error);
  }
};

export { registerUser, loginUser, logoutUser,generateAccessAndRefreshToken };
