import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  title: String,
  description: String,
});
export default mongoose.model("Blog", blogSchema);
