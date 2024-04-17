import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const insertIntoDb = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.insertIntoDb(req.body);
    res.send({
      status: 200,
      success: true,
      message: "Category created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

export const CategoryController = {
  insertIntoDb,
};
