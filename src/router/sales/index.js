import { Router } from "express";
import SalesController from "../../controller/sales/index.js";
const salesRouter = Router();

salesRouter.get("/sales", SalesController.getAll);
salesRouter.get("/sales/:id", SalesController.getSingle);
salesRouter.post("/sales", SalesController.post);
salesRouter.delete("/sales/:id", SalesController.delete);
// salesRouter.get("/sale/:productName", SalesController.getSingleProduct);
// salesRouter.delete("/sales/:id", SalesController.delete);

export default salesRouter;