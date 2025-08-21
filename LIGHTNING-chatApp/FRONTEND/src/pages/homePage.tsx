/* eslint-disable @typescript-eslint/no-explicit-any */
import { useChatStore } from "@/store/useChatStore";
import { Card } from "../componentsUI/ui/card-hero";
import { Spotlight } from "../componentsUI/ui/spotlight-hero";
import Sidebar from "@/componentsUI/sideBar";
import NoChatSelected from "@/componentsUI/noChatSelected";
import ChatContainer from "@/componentsUI/ChatContainer";

const HomePage=()=>{
    const {selectedUser}:any = useChatStore();
    return(
        <Card className="w-[100vw] h-[100vh] bg-black/[0.96] relative overflow-hidden">
      <Spotlight className="-top-40 opacity-15 left-0 md:left-60 md:-top-20" />
      <div className="bg-black ">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="w-[100vw] h[100vh] bg-base-200 h-[calc(100vh-6rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />
            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
    </Card>
    )
}

export default HomePage;