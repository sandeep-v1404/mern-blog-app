import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  title: String,
  description: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdOn: {
    type: Date,
    default: new Date(),
  },
});
export default mongoose.model("Blog", blogSchema);
