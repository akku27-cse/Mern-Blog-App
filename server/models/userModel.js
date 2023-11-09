const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required:true
    },
    blog: [{
        type: mongoose.Types.ObjectId,
        ref: 'Blog',
    
    }]
},{timestamps:true})




//hash
userSchema.pre('save', async function (next) {
  
    if (this.isModified('password')) {
        this.password =await bcrypt.hash(this.password, 12);
    
    }
    next();
});


const userModel = mongoose.model("User", userSchema);
module.exports = userModel;