const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const validateRegisterInput = require("../../validation/vregister");
const validateLoginInput = require("../../validation/vlogin");
const User = require("../../models/student");
const cors=require("cors");
// router.post("/rregister", (req, res) => {
//     const { errors, isValid } = validateRegisterInput(req.body);
//       if (!isValid) {
//         return res.status(400).json(errors);
//       }
//     User.findOne({ email: req.body.email }).then(user => {
//         if (user) {
//           return res.json({ email: "Email already exists" });
//         } else {
//           const newUser = new User({
//             name: req.body.name,
//             email: req.body.email,
//             password: req.body.password
//           });
//           bcrypt.genSalt(10, (err, salt) => {
//             bcrypt.hash(newUser.password, salt, (err, hash) => {
//               if (err) throw err;
//               newUser.password = hash;
//               newUser
//                 .save()
//                 .then(user => res.json(user))
//                 .catch(err => console.log(err));
//             });
             
// 1          });
//         }
//       });
//   });
  
router.post("/rlogin", (req, res) => {
      const { errors, isValid } = validateLoginInput(req.body);
      if (!isValid) {
        return res.json(errors);
      }
    const email = req.body.email;
      const password = req.body.password;
      User.findOne({ email }).then(user => {
        if (!user) {
         return res.json("Email not found");
        }
        bcrypt.compare(password, user.password).then(isMatch => {
          if(isMatch)
          {
            return res.json("valid");
          }
          // if (isMatch) {
          //   const payload = {
          //     id: user.id,
          //     name: user.name
          //   };
          //   jwt.sign(
          //     payload,
          //     keys.secretOrKey,
          //     {
          //       expiresIn: 31556926  
          //     },
          //     (err, token) => {
          //       res.json({
          //         success: true,
          //         token: "Bearer " + token
          //       });
          //     }
          //   );
          // } 
          else {
             return res.json("Password incorrect");
          }
        });
      });
   });
// const checkToken = (req, res, next) => {
//     const header = req.headers['authorization'];
//     if(typeof header !== 'undefined') {
//         const bearer = header.split(' ');
//         const token = bearer[1];
//         req.token = token;
//         next();
//     } else {
//         res.sendStatus(403)
//     }
//   }
router.get('/rlogin',async(req,res)=>{
  try{
      const allUser= await User.find({});
      res.send({status:"ok", data:allUser});
  }
  catch(error){
      console.log(error);
  }
})
// router.get('/', checkToken, (req, res) => {
//   jwt.verify(req.token, 'privatekey', (err, authorizedData) => {
//       if(err){
//           console.log('ERROR: Could not connect to the protected route');
//           res.sendStatus(403);
//         } else {
//             res.json({
//                 message: 'Successful log in',
//                 authorizedData
//             });
//             console.log('SUCCESS: Connected to protected route');
//         }
//     })
// });
//     router.get('/rrgister',(req,res)  => {
//        User.find().then(data => res.json(data))
//  });
router.post('/rregister',(req,res)  => {
    const newUser = new User({
        name: req.body.name,
        Id: req.body.id,
        dept:req.body.password
     });
     newUser.save().then(data => res.json(data)).catch(err => console.log(err));;
     
});
// router.get("/delete", (req, res) => {
//   return res.json(User.findOne({Id:req.body.id}));
//   });
  // }).then(user =>{
  //   if (!user) {
  //   return res.json("Email not found");

  //  }
  //  else
  //  {
  //   return res.json("Email found");
  //  }});
    // .then(() => res.json({success : true}))
  // .catch(err=> res.status(404).json({success: false}
// router.post('/updateUser', async (req, res) => {
//     const { name, Id, dept} = req.body;
//     try {
//         const newDetails = {};
//          newDetails.name = name 
//          newDetails.dept = dept
//          newDetails.Id = Id
//          let stid=req.body.Id;
//         let det = await User.find(stid);
//         let oid=det.body._id;
//         if (!det) { return res.status(404).send("Not Found") }
//         det = await User.findOneAndUpdate(stid , { $set: newDetails }, { new: true })
//         res.json({ det });
//     } catch (error) {
//         console.error(error.message);
//         //res.status(500).send("Internal Server Error");
//     }
// });
 
 
router.get("/delete",cors(),(req,res)=>{})
router.post("/delete",async(req,res)=>{
  const{id}=req.body;
  try{
      const check=await User.findOne({Id:id})
      if(check){
        res.json("exists")
        // res.send({status:"ok"})
        await User.deleteOne({Id:id})
      }
      else{
        res.json("does not exist")
      }
    }
  catch(e){
      res.json("not exist")
  }
})
  router.get("/update",cors(),(req,res)=>{})
  router.post("/update",async(req,res)=>{
    const{id,name,dept}=req.body;
    const data={
        Id:id,
        dept:dept,
        name:name
    }
    try{
        const check=await User.findOne({Id:id})
        if(check){
          res.json("updated")
          // res.send({status:"ok"})
          var old = {Id:id};
          var newvalues={ $set: {name:name,dept:dept}};
          await User.updateOne(old,newvalues)
        }
        else{
          res.json("student does not exist")
        }
    }
    catch(e){
      res.json("error")
    }  
  })

module.exports = router;