import { NextFunction, Request, Response } from "express";
import { forbiddenError, generalError } from "../utils/errorResponse";

export const checkApiKey = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const apiKey = process.env.API_KEY as string;

    if (!req.headers.apikey || req?.headers?.apikey !== apiKey) {
      return res.status(403).json(forbiddenError());
    }

    return next();
  } catch (error: any) {
    return res.status(500).json(generalError(error));
  }
};
 