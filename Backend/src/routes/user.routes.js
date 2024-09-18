import { Router } from "express";
import { registerUser,  loginUser, logoutUser } from "../controllers/user.controller.js";
import { verifyJwt } from "../middleware/auth.middleware.js";


const router = Router()


router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

//logout

router.route("/logout").post(verifyJwt , logoutUser)

export default router