import express from "express";
import cors from "cors";

const app = express();
const port = 4000;
app.use(cors());
app.get("/", (req, res) => {
    console.log("message arrived")
  res.send("API WORKING");
});
app.listen(port, () => {
  console.log(`server running on  http://localhost:${port}`);
});
