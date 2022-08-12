import express, {Express, Response, Request} from "express";
import dotenv from 'dotenv'
import {generateToken} from "./utils/generateToken";
import {validateToken} from './utils/validateToken';

dotenv.config();

const app:Express = express();

//Routes for JWT token
app.get('/',(req:Request,res:Response)=> res.send("<h1>Welcome To JWT simple Example </h1>"))
app.post('/user/generateToken', generateToken);
app.get('/user/validateToken',validateToken);


let PORT:number = Number(process.env.PORT) || 8091;
app.listen(PORT,()=>console.log(`Server is running on PORT : ${PORT}`));
