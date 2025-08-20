import express from 'express'
import {protectRouter} from '../middleware/authMiddleware.js'
import {getMessages, getUserForSideBar, sendMessages} from '../controller/messageController.js'

const messageRouter = express.Router();

messageRouter.get("/users",protectRouter,getUserForSideBar);
messageRouter.get("/:id",protectRouter,getMessages);

messageRouter.post("/send/:id",protectRouter,sendMessages);


export default messageRouter;