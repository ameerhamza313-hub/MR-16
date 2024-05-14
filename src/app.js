import express from "express";
import allRouter from "./router/index.js";


const app = express();
app.use(express.json());
app.use(allRouter);

app.listen(3000, () => {
  console.log("server started at 3000 port");
});
