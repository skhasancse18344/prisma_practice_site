import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/", UserController.insertIntoDb);

// router.get("/", (req, res) => {
//   res.send("Hello World!");
// });

export const userRoutes = router;
