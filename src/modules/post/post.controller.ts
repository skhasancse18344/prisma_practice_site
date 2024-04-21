import { Request, Response } from "express";
import { PostService } from "./post.service";

const insertIntoDb = async (req: Request, res: Response) => {
  try {
    const result = await PostService.insertIntoDb(req.body);
    res.send({
      status: 200,
      success: true,
      message: "Post created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
const getAllPosts = async (req: Request, res: Response) => {
  try {
    const options = req.query;
    const result = await PostService.getAllPost(options);
    res.send({
      status: 200,
      success: true,
      message: "Posts fetched successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

export const PostController = {
  insertIntoDb,
  getAllPosts,
};
