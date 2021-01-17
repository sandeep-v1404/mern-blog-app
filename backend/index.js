import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import blogRoute from "./routes/blogs.js";

const app = express();

app.use("/blogs", blogRoute);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://admin:8kgGPiHu5ToD2OhA@cluster0.jez5g.mongodb.net/blogdb?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server Running on PORT: ${PORT}`);
    })
  )
  .catch((error) => {
    console.log(error.message);
  });
