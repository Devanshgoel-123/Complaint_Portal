import express,{Response,Request,Express} from "express";
const workerRouter=express.Router();
import {z} from "zod";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

enum category{
    carpenter="carpenter",
    plumber="plumber",
    cleaner="cleaner",
}

const workerSchema=z.object({
    name:z.string(),
    category : z.nativeEnum(category),
    contact:z.number().gt(10),
    hostel:z.string()
})

workerRouter.get("/registerWorker",async (req:Request,res:Response)=>{
    const body=req.body;
   const {success}=workerSchema.safeParse(body);
   if(success){
    const findWorker=await prisma.worker.findFirst({
        where:{
            contact:body.contact
        },
    })
    if(findWorker){
        res.status(401).json({
            message:"Worker already there"
        })
    }else{
        try{
            const worker=await prisma.user.create({
                data:body
            })
            res.status(200).json({
                message:"You have been registered"
            })
        }catch(err){
            res.status(401).json({
                message:"Some error occured try to Re-Register"
            })
        }
    }
   }else{
    return res.status(401).json({
        message:"Incorrect Inputs"
    })
   }
})

export default workerRouter;