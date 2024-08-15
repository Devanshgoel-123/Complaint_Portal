import express,{Response,Request,Express} from "express";
const userRouter=express.Router();
import {z} from "zod";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
const userSchema=z.object({
    name:z.string(),
    email:z.string().email(),
    hostel:z.string(),
    room:z.number().int().gt(5)
})

userRouter.get("/register",async (req:Request,res:Response)=>{
   const body=req.body;
   const {success}=userSchema.safeParse(body);
   if(!success){
    return res.status(401).json({
        message:"Incorrect Inputs"
    })
   }
   const {email}=body;
   try{
    const existingUser=await prisma.user.findFirst({
        where:{email}
    })
    if(existingUser){
        res.status(401).json({
            message:"User already there"
        });
    }
      await prisma.user.create({data:body})
      res.status(200).json({
           message:"You have been registered"
       })
    }catch(err){
        console.error("Error registering user:", err);
        res.status(500).json({ // Changed to 500 Internal Server Error
          message: "Internal server error"
        });   
}
});

const userValidationSchema=z.object({
    name:z.string(),
    password:z.string()
})
userRouter.get("/login",async (req:Request,res:Response)=>{
    const body=req.body;
    const {success}=userValidationSchema.safeParse(body);
    if(!success){
        return res.status(400).json({
            message:"Please Provide the correct Inputs"
        })
    }
    const existingUser=await prisma.user.
})

export default userRouter;