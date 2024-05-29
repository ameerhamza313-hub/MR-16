import { Router } from "express";
import CategoryController from "../../../controller/product/categories.js";
const categoryRouter = Router();

categoryRouter.get("/categories", CategoryController.getAll);
categoryRouter.get("/categories/:id", CategoryController.getSingle);
categoryRouter.post("/category", CategoryController.create);

export default categoryRouter;