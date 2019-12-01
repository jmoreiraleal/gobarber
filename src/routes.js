import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello Word José Moreira Leal" });
});

export default routes;
