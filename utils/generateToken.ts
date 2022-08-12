import jwt from 'jsonwebtoken';
import {Request,Response} from "express";

interface Idata {
    time: string,
    userId : number
}

export const generateToken = (req:Request,res:Response)=>{
    console.log("Generating JWT token")
    // @ts-ignore
    const jwtSecretKey:jwt.Secret = process.env.JWT_SECRET_KEY;
    const data:Idata = {
        time : Date(),
        userId : 12,
    }
    const token:string = jwt.sign(data, jwtSecretKey);
    console.log("Generated Token successfully", token);
    res.send(token);
}
