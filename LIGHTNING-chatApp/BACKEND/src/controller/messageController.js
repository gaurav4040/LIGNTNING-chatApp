import Message from '../models/messageModel.js';
import User from '../models/userModel.js';
import {v2 as cloudinary} from 'cloudinary'

export const getUserForSideBar=async(req,res)=>{

    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log('error in getUserForSideBar : ',error.message);
        res.status(500).json({message:'internal server error'});
    }
}

export const getMessages = async(req,res)=>{
    try {
        const {id:userToChatId} = req.params;
        const myId = req.user._id;

        const messages = await Message.find({
            $or:[
                {senderId:myId,receiverId:userToChatId},
                {senderId:userToChatId,receiverId:myId}
            ]
        });
        res.status(200).json(messages)
    } catch (error) {
        console.log('error in getMessages : ',error.message);
        res.status(500).json({message:'internal server error'});
    }
}

export const sendMessages = async(req,res)=>{
     try {
        
        const {text,image}=req.body;
        const {id:receiverId}= req.params;
        const myId=req.user._id;

        let imageUrl;

        if(image){
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl=uploadResponse.secure_url;
        }
        const newMessage = new Message({
            senderId:myId,
            receiverId,
            text,
            image:imageUrl
        })

        await newMessage.save();

        //---------------------------------------------todo

        res.status(201).json(newMessage);
        
     } catch (error) {
        console.log('error in sendMessages : ',error.message);
        res.status(500).json({message:'internal server error'});
     }
}