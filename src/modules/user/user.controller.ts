import { Request, Response } from "express";
import { UserService } from "./user.service";

const insertIntoDb = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertIntoDb(req.body);
    res.send({
      status: 200,
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};
const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertOrUpdateProfile(req.body);
    res.send({
      status: 200,
      success: true,
      message: "Profile created or updated successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

export const UserController = {
  insertIntoDb,
  insertOrUpdateProfile,
};
