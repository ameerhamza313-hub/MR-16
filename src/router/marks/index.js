import { Router } from "express";
import marksController from "../../controller/Marks/index.js";

const marksRouter = Router();

marksRouter.get("/marks", marksController.getAll);
marksRouter.get("/mark/:FSC", marksController.getSingle);
marksRouter.put("/mark/:FSC", marksController.update);
marksRouter.post("/mark", marksController.post);
marksRouter.delete("/mark/:FSC", marksController.delete);

export default marksRouter;
