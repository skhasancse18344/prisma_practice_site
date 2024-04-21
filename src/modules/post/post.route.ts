import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();

router.post("/", PostController.insertIntoDb);
router.get("/", PostController.getAllPosts);
router.patch("/:id", PostController.updatePost);
router.delete("/:id", PostController.deletePost);

export const postRoutes = router;
