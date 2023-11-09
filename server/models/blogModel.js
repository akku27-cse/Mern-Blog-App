const mongoose = require('mongoose');

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    descritption: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
          required:true
   }
  },
  { timestamps: true }
);
const blogModel = mongoose.model("Blog", blogSchema);
module.exports = blogModel;