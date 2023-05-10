const express = require("express");
const Mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/user");
const Cors=require("cors");
const app = express();

//  app.use(
//      bodyParser.urlencoded({
//       extended: false
//      })
//      );
app.use(Cors());
app.use(bodyParser.json());
const db = require("./config/keys").mongoURI;
Mongoose.connect(db,{ useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/api/user", users);
const port = process.env.PORT || 5000;  
app.listen(port, () => console.log(`Server up and running on port ${port}`));