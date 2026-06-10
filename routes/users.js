import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { getUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/", verifyToken, verifyRole("admin"), getUsers);
router.delete("/:id", verifyToken, verifyRole("admin"), deleteUser);
router.get("/me", verifyToken, getprofile);

export default router;