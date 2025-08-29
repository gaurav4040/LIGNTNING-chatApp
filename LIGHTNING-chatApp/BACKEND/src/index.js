import express from 'express';
import authRouter from './routes/authRouter.js';
import messageRouter from './routes/messageRouter.js'
// import errorRouter from './routes/errorRouter.js'
import dotenv from 'dotenv';
import { connectDB } from './lib/DB.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';


const app = express();
const server = http.createServer(app);

dotenv.config();
const PORT = process.env.PORT||3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"https://ligntning-app.vercel.app",
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}));

app.use("/api/auth",authRouter);
app.use("/api/messages",messageRouter);

app.use("/api", (req, res) => {
    console.log("error is coming")
    res.status(404).json({ message: "Page not found" });
  });


  connectDB()

export default app;
export {server};

  