import jwt from 'jsonwebtoken';
import {Request,Response} from "express";

export const validateToken = (req:Request,res:Response)=>{
    console.log("Validating Token")
    // @ts-ignore
    const jwtSecretKey:string = process.env.JWT_SECRET_KEY.toString();

    try{
        const token:string | undefined = req.headers.authorization?.split(' ')[1];
        if(token){
            const verified = jwt.verify(token, jwtSecretKey);
            if(!verified){
                console.log("Invalid Token", token);
                return res.status(401).send("Invalid Authorisation");
            }
            console.log("Validated Successfully");
            return res.send("Successfully verified");
        }
        console.log("Invalid authentication",token);
        return res.status(401).send("Invalid authentication")
    }
    catch (e) {
        return res.status(401).send(e);
    }
};
