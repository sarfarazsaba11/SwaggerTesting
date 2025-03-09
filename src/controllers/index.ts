import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.json([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]);
};

export const getProducts = (req: Request, res: Response) => {
  res.json([{ id: 1, name: "Laptop" }, { id: 2, name: "Phone" }]);
};
