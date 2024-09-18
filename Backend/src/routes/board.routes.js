import { Router } from "express";
import { verifyJwt } from "../middleware/auth.middleware.js";
import { SavingBoardName } from "../controllers/board.controller.js";

const router = Router()

router.route("/boardname").post(verifyJwt,SavingBoardName)

export default router