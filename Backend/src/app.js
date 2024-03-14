import express from 'express';
import CookiesParser from 'cookies-parser';
import cors from 'cors';


const app = express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    Credential:true
}));

app.use(CookiesParser());


export {app};