import express from 'express';
import { signin , signup,updateProfile,checkAuth, signout } from '../controller/authController.js';
import { protectRouter } from '../middleware/authMiddleware.js';


const authRouter = express.Router();

authRouter.post("/signup",signup);
authRouter.post("/signin",signin);
authRouter.post("/signout",signout);

authRouter.put("/update-profile",protectRouter,updateProfile);

authRouter.get("/check",protectRouter,checkAuth);

export default authRouter;