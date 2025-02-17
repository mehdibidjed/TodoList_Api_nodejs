import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import router from "./routes/Taskroutes.js";
const app = express();
app.use(cors());
app.use(express.json())
app.use('/api/Tasks',router)

app.get("/", (req, res) => {
    console.log("message arrived")
  res.status(200).send("API WORKING");
});
const PORT=process.env.PORT || 4000  
app.listen(PORT, () => {
  console.log(`server running on  http://localhost:${PORT}`);
});
