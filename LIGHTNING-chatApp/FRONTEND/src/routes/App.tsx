import {Footer} from "../componentsUI/ui/Footer";
import {Routes,Route, Navigate } from "react-router-dom";
import { SplineSceneBasic } from "../componentsUI/ui/hero";
import { Socket } from "socket.io-client";
import { useAuthStore } from "@/store/useAuthStore";
import { useEffect } from "react";
import {Toaster} from 'react-hot-toast';

import Header from "../componentsUI/ui/Header";
import HomePage from "../pages/homePage";
import ProfilePage from "../pages/profilePage";
import Signin from "../pages/SignIn";
import Signup from "../pages/signup";
import NotFoundPage from "@/pages/pageNotFound";
import Loader from "@/componentsUI/ui/Loader";



function App() {

  const {authUser,checkAuth,isCheckingAuth,isSigningIn,isSigningUp,isUpdatingProfile} = useAuthStore();

  useEffect(()=>{
    checkAuth();
  },[checkAuth])

  console.log(`authUser is : `,authUser)

  if((isCheckingAuth&&!authUser)||isSigningIn||isSigningUp||isUpdatingProfile){
    return(
      <div className="ml-[49vw] scale-150">
        <Loader/>
      </div>
    )
  }


  return (
    <div >
      <Header />
       <Routes>
        <Route path="/" element={!authUser ?<SplineSceneBasic/>:<Navigate to="/home"/>} />
        <Route path="/home" element={authUser ? <HomePage/>:<Navigate to="/signin"/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={authUser ? <ProfilePage/>:<Navigate to="/signin"/>} />
        <Route path="/*" element = {<NotFoundPage/>}/>
       </Routes>
       <Toaster />
      <Footer/>  
    </div>
  );
}

export default App;
