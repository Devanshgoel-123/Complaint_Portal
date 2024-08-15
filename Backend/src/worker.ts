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
    const contact=req.body.contact;
    const findWorker=await prisma.worker.findFirst({
        where:{
            contact:contact
        },
    })
    if(findWorker){
        res.status(401).json({
            message:"Worker already there"
        })
    }else{
        try{
            const worker=await prisma.worker.create({
                data:body
            })
            if(worker){
                res.status(200).json({
                    message:"You have been registered"
                })
            }  
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

const loginWorkerSchema=z.object({
    name:z.string(),
    password:z.string()
})
workerRouter.get("/login",async (req:Request,res:Response)=>{
   const body=req.body;
   const {success}=loginWorkerSchema.safeParse(body);
   if(!success){
       res.status(401).json({
        message:"Invalid login Details"
       })
   }
   const id=1;
   const { name, password } = body;
   const worker = await prisma.worker.findFirst({
    where: {
      name: name,
      password: password // In practice, passwords should be hashed and compared securely
    }
  });

  if (!worker) {
    return res.status(401).json({
      message: "Worker not found or incorrect password"
    });
  }
  const complaints = await prisma.complaint.findMany({
    where: {
      workerId: worker.id
    }
  });

   return res.status(200).send(complaints);
})

export default workerRouter;