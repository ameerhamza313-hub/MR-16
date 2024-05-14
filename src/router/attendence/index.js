import { Router } from "express";
import attendencesController from "../../controller/attendence/index.js";

const attendRouter = Router();

attendRouter.get("/attendences", attendencesController.getAll);
attendRouter.get("/attends/:className", attendencesController.getSingle);
attendRouter.put("/attends/:className", attendencesController.update);
attendRouter.post("/attends", attendencesController.post);
attendRouter.delete("/attends/:className", attendencesController.delete);

export default attendRouter;
