import { Router } from "express";
import employConroller from "../../controller/employ/index.js";

const employRouter = Router();
employRouter.get("/employes", employConroller.getAll);
employRouter.post("employ", employConroller.postAll);
employRouter.delete("employ/:name", employConroller.delete);
employRouter.put("employ/:name", employConroller.update);

export default employRouter;