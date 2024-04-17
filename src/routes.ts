import express from "express";
import { userRoutes } from "./modules/user/user.route";
import { categoryRoutes } from "./modules/category/category.route";

const router = express.Router();

router.use("/user", userRoutes);
router.use("/category", categoryRoutes);

export default router;
