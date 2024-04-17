import express from "express";
import { CategoryController } from "./category.controller";
const router = express.Router();

router.post("/", CategoryController.insertIntoDb);

export const categoryRoutes = router;
