/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from '@/lib/axios'
import toast from 'react-hot-toast';
import  {useNavigate}  from 'react-router-dom';
import { io } from 'socket.io-client';

import { create } from 'zustand'

const BASE_URL =
  typeof process !== "undefined" && process.env && process.env.NODE_ENV === "development"
    ? "http://localhost:5170"
    : `${process.env.BASE_URL}/`;

interface userData{
    fullName:string,
    email:string,
    password:string,
  }

interface signinData{
    email:string,
    password:string
}
interface profileData{
    profilePic:string | ArrayBuffer | null,
} 

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const useAuthStore = create<any>((set,get:any)=>({
    
      authUser:null,
      isSigningUp:false,
      isSigningIn:false,
      isUpdatingProfile:false,
      isCheckingAuth:true,
      onlineUsers:[],
      socket: null,
      
    checkAuth:async ():Promise<any>=>{
          try {
              const res = await axiosInstance.get("/auth/check");
              
              set({authUser:res.data});
              get().connectSocket();
            } catch (error) {
                console.log(`error in checkAuth useAuthStore : `,error);
                set({authUser:null})
                
            }finally{
                set({isCheckingAuth:false});
            }
        },
        
    signup:async (data:userData, navigate: ReturnType<typeof useNavigate>):Promise<any>=>{
        set({isSigningUp:true});
        try {
            const res = await axiosInstance.post("/auth/signup",data);
            set({authUser:res.data});
            toast.success("Account created successfully");
            get().connectSocket();
            navigate("/home")
        } catch (err:any) {
            toast.error(err.response.data.message);
        }finally{
            set({isSigningUp:false});
        }
    },
    
    signin:async (data:signinData,navigate:ReturnType<typeof useNavigate>):Promise<any>=>{
        set({isSigningIn:true})
        try {
            const res = await axiosInstance.post("/auth/signin",data);
            set({authUser:res.data});
            toast.success("signed In successfully");
            get().connectSocket();
            navigate("/home");
        } catch (error:any) {
            toast.error(error.response.data.message);
        }finally{
            set({isSigningIn:false})
        }
    },

    signOut:async ()=>{

        try {
            await axiosInstance.post("/auth/signout");
            set({authUser:null});
            toast.success("signed Out successfully")
            get().disconnectSocket();
        } catch (error:any) {
            toast.error(error.response.data.message);
        }
    },

    updateProfile:async(data:profileData,navigate:ReturnType<typeof useNavigate>)=>{
         set({isUpdatingProfile:true});
         try {
            const res =await axiosInstance.put("/auth/update-profile",data);
            set({authUser:res.data});
            toast.success("Profile updated successfully");
            navigate("/profile");
         } catch (error:any) {
            toast.error(error.response.data.message);
         }finally{
            set({isUpdatingProfile:false});
         }
    },

    connectSocket: () => {
        const { authUser } = get();
        if (!authUser || get().socket?.connected) return;
    
        const socket = io(BASE_URL, {
          query: {
            userId: authUser._id,
          },
        });
        socket.connect();
    
        set({ socket: socket });
    
        socket.on("getOnlineUsers", (userIds) => {
          set({ onlineUsers: userIds });
        });
      },

      disconnectSocket: () => {
        if (get().socket?.connected) get().socket.disconnect();
      },

}))