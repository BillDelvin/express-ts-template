import { Request, Response } from "express";

export const registerEmployee = async (req: Request, res: Response) => {
  console.log("employee");
  console.log(req.body);
};
