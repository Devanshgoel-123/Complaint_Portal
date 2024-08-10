import express,{Response,Request,Express} from "express";
import cors from "cors";
import { PrismaClient } from '@prisma/client'
import userRouter from "./user"
import complaintRouter from "./Complaint"
const prisma = new PrismaClient();

const app:Express=express();
app.use(cors());
const port:number=3000;
app.use("/user",userRouter)
app.use("/complaint",complaintRouter)




app.listen(port,()=>{
  console.log("Listening on port 3000");
})