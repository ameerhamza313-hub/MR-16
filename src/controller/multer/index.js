import UploadFile from "../../cloudinery/config.js";
import storeFile from "../../models/StoreFile/index.js";
import cloudinary from "cloudinary";
const multerController = {
  uploadFiles: async (req, res) => {
    try {
      const upload = await  cloudinary.v2.uploader.upload(req.file.path);
      let newFile = new storeFile({
        file_url: upload.secure_url,
      });
     const record = await newFile.save();
      res
        .status(200)
        .json({ message: "File upload successfully", data: record });
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "internal server error" ,error});
    }
  },
};
export default multerController;
