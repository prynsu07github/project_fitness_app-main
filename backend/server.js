import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodparser from "body-parser";

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodparser.urlencoded({ extended: true }));

const PORT = 5000;

mongoose
  .connect("mongodb://0.0.0.0:27017/sweatBox-database")
  .then(() => {
    console.log("successfully connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

const UserSchema = new mongoose.Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  email: {
    type: String,
  },
  userName: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = new mongoose.model("User", UserSchema);
User.createIndexes();

app.post("/sign-up", async (req, resp) => {
  console.log(req.body);
  try {
    const user = new User(req.body);
    const userData = await User.findOne({ userName: req.body.userName });
    if (userData) {
      // console.log(userData);
      resp.send({
        msg: "Username exists!",
        isUserRegister: false,
      });
    } else {
      user.save();
      // console.log("submitted");
      resp.send({
        msg: "Done",
        isUserRegister: true,
      });
      // sendMail(req.body.email)
    }
  } catch (e) {
    console.log(e);
    resp.send({
      msg: "something went wrong ! ",
    });
  }
});

app.post("/sign-in", async (req, res) => {
  console.log(req.body);
  const userData = await User.findOne({
    userName: req.body.userName,
    password: req.body.password,
  });
  // console.log(userData)
  if (userData) {
    console.log("Login Successfully!");
    res.send({
      msg: "Login Successfully!",
      isUserLogin: true,
    });
  } else {
    res.send({
      msg: "Inavlid Username and Password",
      isUserLogin: false,
    });
  }
});

app.listen(PORT, (req, res) => {
  console.log("server is on.");
});
