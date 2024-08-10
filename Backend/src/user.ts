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

userRouter.post("/register",async (req:Request,res:Response)=>{
   const body=req.body;
   const {success}=userSchema.safeParse(body);
   if(success){
    const findUser=await prisma.user.findFirst({
        where:{
            email:body.email
        },
    })
    if(findUser){
        res.status(401).json({
            message:"User already there"
        })
    }else{
        try{
            const user=await prisma.user.create({
                data:body
            })
            res.status(200).json({
                message:"You have been registered"
            })
        }catch(err){
            res.status(401).json({
                message:"Some error occured"
            })
        }
    }
   }else{
    return res.status(401).json({
        message:"Incorrect Inputs"
    })
   }
})

export default userRouter;