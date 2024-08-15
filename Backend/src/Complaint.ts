import express,{Response,Request,Express} from "express";
const complaintRouter=express.Router();
import {z} from "zod";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
import generate_otp from "./Otp";
enum category{
    carpenter="carpenter",
    plumber="plumber",
    cleaner="cleaner",
}
enum hostel{
    Budh="Budh",
    Krishna="Krishna",
    Gandhi="Gandhi",
    Ram="Ram",
    Meera="Meera",
    Vyas="Vyas",
    Sr="Sr",
    Malviya="Malviya",
    RanaPratap="RanaPratap",
    Ashok="Ashok",
    CVR="CVR"
}
const complaintSchema=z.object({
    category : z.nativeEnum(category),
    subCategory : z.string(),
    hostel:z.nativeEnum(hostel),
    room:z.number(),
    time:z.coerce.date(),
    
})

complaintRouter.post("/registerComplaint",async (req:Request,res:Response)=>{
   const complaintBody=req.body;
   console.log(complaintBody);
   const {success,data}=complaintSchema.safeParse(complaintBody);
   if(success){
    const otp:number=generate_otp();
    const complaint=await prisma.complaint.create({
        data:{
            ...data,
            otp:otp,
            userId:1,  //dynamically assign these things 
            workerId:1
        }
    })
    if(complaint){
        return res.status(200).json({
            message:"Complaint registered SuccessFully",
            otp:otp
        })
    }else{
        res.status(400).json({
            message:"Server Error couldn't register Complaint",
            
        })
    }
   }else{
      res.status(401).json({
        message:"Incorrect Inputs"
      })
   }
})

export default complaintRouter;