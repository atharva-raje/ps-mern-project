const mongoose =require('mongoose');
const Schema= mongoose.Schema;
const Register=new Schema({
      Id: {
        type: String,
        required: true
      },
      dept: {
        type: String,
        required: true
      },
      name: {
        type:String,
        required:true 
     }
});
module.exports =  applicant = mongoose.model("users", Register);
