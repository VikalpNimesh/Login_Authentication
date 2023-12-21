import express from "express";
import mongoose from "mongoose";
import bcrypt, { hash } from "bcrypt";
import cors from "cors";
import  {User} from "./models/user.models.js";
const app = express();
app.use(cors({
  origin: ["http://localhost:5173/","http://localhost:5173/register"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost:27017/login")
  .then(() => console.log("mongodb conncted successfuly !!!"))
  .catch((e) => console.log(" mongodb conncted failed !!!"));

async function  hashPassword (password) {
const hashp =await bcrypt.hash(password,10)
return hashp
}  
async function  comparePass (password,hashp) {
const verified =await bcrypt.compare(password,hashp)
// console.log(verified);
return verified
}  

app.post("/register", async (req, res) => {
  const { fullname, username, email, password } = req.body;

  try {
    const Usercreated = await User.create({
      fullname: fullname,
      username: username,
      email: email,
      password: password
    });
    res.status(200).json(Usercreated);
  } catch (error) {
    console.log(error);
  }
});
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  // const hashpasas=await hashPassword(password)
  // console.log(hashpasas);
  try {
    const verifyUser = await User.find({
      username: username,
      password:password
    });
//     const pass = await comparePass(password,)
// console.log(pass);
    console.log(verifyUser);
    if(verifyUser) (res.status(200).json(verifyUser));
  } catch (error) {
    console.log("wrong credentials given",error);
  }
});

app.get("/", async (req, res) => {
    const UsercreatedFind = await User.find({});
    res.send(UsercreatedFind);
  });
app.listen(5000, (e) => console.log("server running at port 5000"));
