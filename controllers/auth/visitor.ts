import { Request, Response } from "express";

export const registerVisitor = async (req: Request, res: Response) => {
  console.log("visitor");
  console.log(req.body);
};
