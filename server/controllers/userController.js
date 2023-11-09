const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
exports.registersController = async (req, res) => {
  try {
    //registersController
const {username, email, password }= req.body;
    //validation
    if (!username || !email || !password) {
      return res.status(400).send({
        success: false,
        message: "please Fill all Fields",
      });
    }
    //existing User
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(401).send({
        success: false,
        message: "user already exist",
      });
      }
      //const hashPassword = await bcrypt.hash(password, 10);
    //password = hashPassword;
    //hash password
      
    //save user
    const user = new userModel({ username, email,password });
    await user.save();
    return res.status(201).send({
        message: "new User created",
        user
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error in Register CallBack",
      success: false,
      error,
    });
  }
};

//log in

exports.logInController = async (req, res) => {
    
    try {


        const { email, password } = req.body;
        //login validation
        if (!email || !password) {
            return res.status(401).send({
                message: "Invalid Email or Password",
                success:false
            })
        }
        
        const userLogin = await userModel.findOne({ email });
        if (!email) {
            return res.status(401).send({
              message: "Email is register",
              success: false,
            });
      }
      //password
      const isMatch = await bcrypt.compare(password, userLogin.password);
      if (!isMatch) {
         return res.status(401).send({
           message: "Invalid pass word",
           success: false,
         });
      }

       return res.status(200).send({
         message: "login Successfull",
         success: false,
         userLogin
       });
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error in Login Callback",
            success: false,
            error
        })
    }
};

exports.getAllUsers = () => {


    
}
