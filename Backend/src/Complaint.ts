import express,{Response,Request,Express} from "express";
const complaintRouter=express.Router();
import {z} from "zod";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
enum category{
    carpenter="carpenter",
    plumber="plumber",
    cleaner="cleaner",
}

const complaintSchema=z.object({
    category : z.nativeEnum(category),
    subCategory : z.string(),
})
complaintRouter.post("/register",async (req:Request,res:Response)=>{
   const complaintBody=req.body;
   const {success}=complaintSchema.safeParse(complaintBody);
   if(success){
    const complaint=await prisma.complaint.create({
        data:complaintBody
    })
    if(complaint){
        return res.status(200).json({
            message:"Complaint registered SuccessFully"
        })
    }else{
        res.status(400).json({
            message:"Server Error couldn't register Complaint"
        })
    }
   }else{
      res.status(401).json({
        message:"Incorrect Inputs"
      })
   }
})

export default complaintRouter;