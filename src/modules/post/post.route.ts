import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();

router.post("/", PostController.insertIntoDb);
router.get("/", PostController.getAllPosts);

export const postRoutes = router;
