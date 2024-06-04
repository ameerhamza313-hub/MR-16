import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const UploadFile = async (filepath) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(filepath);
    console.log(uploadResult);
    return uploadResult;
  } catch (error) {
    console.log(error.message);
  }
};
export default UploadFile;
