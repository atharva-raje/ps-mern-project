const mongoose =require('mongoose');
const Schema= mongoose.Schema;
const login=new Schema({
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      name: {
        type:String,
        required:true 
     }
});
module.exports = User = mongoose.model("users",  login);
