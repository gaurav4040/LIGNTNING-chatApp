'use client'

import { useState } from "react";
import { Card } from "../componentsUI/ui/card-hero";
import { Spotlight } from "../componentsUI/ui/spotlight-hero";
import { useAuthStore } from "@/store/useAuthStore";
import  {useNavigate}  from 'react-router-dom';

import toast from 'react-hot-toast'



const Signup = () => {

    const [formData,setFormData] = useState({
      fullName:"",
      email:"",
      password:""
    });
    const navigate = useNavigate();
    const {signup} = useAuthStore();

    const validateForm=()=>{
      if(!formData.fullName.trim()) return toast.error("Full Name required");
      if(!formData.email.trim()) return toast.error("email required");
      if(!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email");
      if(!formData.password.trim()) return toast.error("password required");
      if(formData.password.length<6) return toast.error("password must be at least 6 characters");
      
      return true;
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        const success = validateForm();
        if(success===true) signup(formData,navigate)  
    }

  return (
    <Card className="w-[100vw] h-[100vh] bg-black/[0.96] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />
      
      <div className="flex h-full items-center justify-center">
        <div className="w-full max-w-md p-8 relative z-10">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Create Account
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(event)=>setFormData({...formData,fullName:event.target.value})} 
                required 
                className="w-full p-3 rounded-lg bg-neutral-900/90 border border-neutral-800 text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-neutral-600 transition-colors"
              />
            </div>

            <div>
              <input 
                type="email" 
                placeholder="xyz@example.com" 
                value={formData.email}
                onChange={(event)=>setFormData({...formData,email:event.target.value})} 
                required 
                className="w-full p-3 rounded-lg bg-neutral-900/90 border border-neutral-800 text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-neutral-600 transition-colors"
              />
            </div>
            
            <div>
              <input 
                type="password" 
                placeholder="Password"
                value={formData.password}
                onChange={(event)=>setFormData({...formData,password:event.target.value})}  
                required 
                className="w-full p-3 rounded-lg bg-neutral-900/90 border border-neutral-800 text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-neutral-600 transition-colors"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-neutral-300 to-neutral-100 text-neutral-900 rounded-lg font-medium hover:from-neutral-700 hover:to-neutral-800 hover:text-neutral-100 transition-colors"
            >
              Create Account
            </button>
          </form>
          
          <p className="mt-4 text-center text-neutral-400 text-sm hover:text-blue-400">
            Already have an account? <a href="/signin" className="text-neutral-300 hover:text-black">Sign in</a>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Signup;