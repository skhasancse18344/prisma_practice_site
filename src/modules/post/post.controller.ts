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
      total: result.total,
      data: result.data,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
const updatePost = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const result = await PostService.updatePost(id, data);
    res.send({
      status: 200,
      success: true,
      message: "Post updated successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
const deletePost = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const result = await PostService.deletePost(id);
    res.send({
      status: 200,
      success: true,
      message: "Post deleted successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

export const PostController = {
  insertIntoDb,
  getAllPosts,
  updatePost,
  deletePost,
};
