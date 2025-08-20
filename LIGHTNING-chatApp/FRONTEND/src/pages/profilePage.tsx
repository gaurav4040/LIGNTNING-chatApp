import { useState } from "react";
import { Card } from "../componentsUI/ui/card-hero";
import { Spotlight } from "../componentsUI/ui/spotlight-hero";
import { useAuthStore } from "@/store/useAuthStore";
import { FaCamera, FaUser, FaEnvelope } from "react-icons/fa"; // Importing icons
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const ProfilePage = () => {
    const navigate = useNavigate();
    
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg,setSelectedImg] = useState(null);
    
  const handleInputUpload = async (e) => {
    const file = e.target.files[0];
    if(!file) return 

    const reader = new FileReader();
    
    reader.readAsDataURL(file);

    reader.onload = async ()=>{
      try {
        const base64Image = reader.result;
        setSelectedImg(base64Image);
        await updateProfile({profilePic:base64Image},navigate);
      } catch (error) {
        console.log("onload error : ",error)
        toast.error("File size should be less than 80 KB");
      }
    }
  };

  return (
    <Card className="w-[100vw] h-[100vh] bg-black/[0.96] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />

      <div className="flex h-full items-center justify-center">
      <div className="w-full max-w-[45vw] p-8 mt-20 relative z-10 rounded-xl bg-black/30">
          <h2 className="text-4xl  font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Profile
          </h2>

          <div className="space-y-4 text-white ">
            {/* {avatar upload section} */}
            <div className="flex-col items-center mb-10 ">
              <div className="flex justify-center select-none">
                <div className="relative ">
                    <img
                    src={selectedImg||authUser.profilePic || "/avatar.jpeg"}
                    alt="Profile Pic"
                    className="w-24 h-24 rounded-full border-4 object-cover border-gray-600"
                    />
                    <label
                    htmlFor="avatar-upload"
                    className={`${
                        isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
                    } absolute top-0 left-0 flex items-center justify-center w-full h-full`}
                    >
                    <FaCamera className="mt-20 ml-14 text-gray-500" size={24} />
                    <input
                        type="file"
                        id="avatar-upload"
                        className="hidden"
                        accept="image/*"
                        onChange={handleInputUpload}
                        disabled={isUpdatingProfile}
                    />
                    </label>
                </div>
              </div>
              <div className="flex justify-center text-white/50 select-none  ">
                <p >
                    {isUpdatingProfile
                    ? "Uploading..."
                    : "Click the profile Icon to update your photo"}
                </p>
              </div>
            </div>

            <div className="mb- mt-8  ">
              <div className="flex-col items-center mt-2 ">
                <div className="flex items-center mt-2 ">
                    <FaUser className="mr-2" />
                     <div>Fullname</div>
                </div>
                <div className="border p-3 bg-black/80 mt-2 rounded-lg border-white/50">
                  <p >{authUser?.fullName}</p>
                </div>
              </div>

              <div className="flex-col items-center mt-2 ">
                <div className="flex items-center mt-2 ">
                    <FaEnvelope className="mr-2" />
                        <div>Email Address</div>
                </div>
                  <div className="border p-3 bg-black/80 mt-2 rounded-lg border-white/50">
                    <p>{authUser?.email}</p>        
                  </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Account Information
              </h2>
              <div className="flex-col text-white/35">
                <div className="flex justify-between mb-2 ">
                  <span>Member since</span>
                  <span>{authUser.createdAt?.split("T")[0]}</span>
                </div>
                <div className="border-b border-zinc-500"></div>
                <div className="flex justify-between mt-2">
                  <span>Account Status</span>
                  <span className="text-green-500">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfilePage;
