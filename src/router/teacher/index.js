import { Router } from "express";
import teachersController from "../../controller/teacher/index.js";

 const teacherRouter = Router();


 teacherRouter.get("/teachers",teachersController.getAll);
 teacherRouter.get("/teacher/:name", teachersController.getSingle);
 teacherRouter.put("/teacher/:name", teachersController.update);
 teacherRouter.post("/teacher", teachersController.post);
teacherRouter.delete("/teacher/:name", teachersController.delete);


export default teacherRouter;