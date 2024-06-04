import { Router } from "express";
import multerController from "../../controller/multer/index.js";
import uploader from "../../multer/index.js";
const multerRouter = Router();


multerRouter.post("/upload_file",uploader.single("file"), multerController.uploadFiles);


export default multerRouter;
