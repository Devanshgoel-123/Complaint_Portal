import express,{Response,Request,Express} from "express";
import cors from "cors";
import { PrismaClient } from '@prisma/client'
import userRouter from "./user"
import complaintRouter from "./Complaint"
const prisma = new PrismaClient();

const app:Express=express();
app.use(cors());
app.use(express.json());
app.use("/user",userRouter)
app.use("/complaint",complaintRouter)


const port:number=3000;

app.listen(port,()=>{
  console.log("Listening on port 3000");
})