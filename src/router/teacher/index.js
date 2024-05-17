import { Router } from "express";
import teachersController from "../../controller/teacher/index.js";

 const teacherRouter = Router();


 teacherRouter.get("/teachers",teachersController.getAll);
 teacherRouter.get("/teacher/:id", teachersController.getSingle);
 teacherRouter.put("/teacher/:id", teachersController.update);
 teacherRouter.post("/teacher", teachersController.post);
teacherRouter.delete("/teacher/:id", teachersController.delete);


export default teacherRouter;