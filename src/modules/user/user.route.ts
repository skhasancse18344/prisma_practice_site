import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/", UserController.insertIntoDb);
router.get("/", UserController.getUser);
router.post("/profile", UserController.insertOrUpdateProfile);
router.get("/:id", UserController.getSingleUser);

export const userRoutes = router;
