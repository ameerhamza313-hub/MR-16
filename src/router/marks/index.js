import { Router } from "express";
import marksController from "../../controller/Marks/index.js";

const marksRouter = Router();

marksRouter.get("/marks", marksController.getAll);
marksRouter.get("/mark/:id", marksController.getSingle);
marksRouter.put("/mark/:id", marksController.update);
marksRouter.post("/mark", marksController.post);
marksRouter.delete("/mark/:id", marksController.delete);

export default marksRouter;
