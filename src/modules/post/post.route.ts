import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();

router.post("/", PostController.insertIntoDb);

export const postRoutes = router;
