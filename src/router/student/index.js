import { Router } from "express";
import studentsController from "../../controller/student/index.js";
const studentRouter = Router();

studentRouter.get("/students", studentsController.getAll);
studentRouter.get("/student/:name", studentsController.getSingle);
studentRouter.put("/student/:name", studentsController.update);
studentRouter.post("/student", studentsController.post);
studentRouter.delete("/student/:name", studentsController.delete);

export default studentRouter;
