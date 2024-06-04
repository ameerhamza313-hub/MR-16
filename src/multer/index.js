import multer  from "multer";
let uploader = multer({
storage: multer.diskStorage({}),
limits: {fileSize: 500000}
});

export default uploader;