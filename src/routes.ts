import express from "express";
import { userRoutes } from "./modules/user/user.route";
import { categoryRoutes } from "./modules/category/category.route";
import { postRoutes } from "./modules/post/post.route";

const router = express.Router();

router.use("/user", userRoutes);
router.use("/category", categoryRoutes);
router.use("/post", postRoutes);

export default router;
