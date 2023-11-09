//const mongoose = require("mongoose");
const mongoose = require('mongoose');
const blogModel = require("../models/blogModel");
const userModel = require("../models/userModel");

//get all blog
exports.getAllBlogsController = async (req, res) => {
  try {
    const blog = await blogModel.find({});
    if (!blog) {
      return res.status(200).send({
        success: false,
        message: "No Blog Found",
      });
    }
    return res.status(201).send({
      success: false,
      BlogCount: blog.length,
      message: "All BLog List",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error While Getteing Blogs",
      error,
    });
  }
};
//create blog
exports.createBlogsController = async (req, res) => {
  try {
    const { title, descritption, image,user } = req.body;
    //valid
    if (!title || !descritption || !image||!user) {
      return res.status(400).send({
        success: false,
        message: "Provide all fields",
      });
    }
    const existingUser = await userModel.findById(user)
    //validation
    if (!existingUser) {
      return res.status(400).send({
        success: false,
        message: "unable to find",
      });
    }
    const newBlog = new blogModel({ title, descritption, image,user });
    //add session
    const session = await mongoose.startSession()
    session.startTransaction()
    await newBlog.save({ session });
    existingUser.blog.push(newBlog);
    await existingUser.save({session});
    await session.commitTransaction();
    await newBlog.save();
    return res.status(201).send({
      success: true,
      message: "blog is create",
      newBlog,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error While Getteing Blogs",
      error,
    });
  }
};

//update blog
exports.updateBolgscontroller = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, descritption, image } = req.body;

    const blog = await blogModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    return res.status(200).send({
      success: true,
      message: "Update Successfull",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error updateing Blog",
      error,
    });
  }
};
//single-blog
exports.singleBlogsController = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogModel.findById(id);
    if (!blog) {
      //console.log(error);
      return res.status(404).send({
        success: true,
        message: "Blog is  found",
      });
    }
    //console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error updateing Blog",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Sigle Blog",
      error,
    });
  }
};
//delete -blog
exports.deleteBlogsController = async (req, res) => {
  try {
    await blogModel.findOneAndDelete(req.params.id);
    //console.log(error);
    return res.status(201).send({
      success: true,
      message: "delete successfull Blog",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error delete Blog",
      error
    });
  }
};
