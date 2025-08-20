import { Card } from "@/componentsUI/ui/card-hero";
import { Spotlight } from "@/componentsUI/ui/spotlight-hero";

// src/pages/NotFoundPage.jsx
const NotFoundPage = () => {
    return (
      <Card className="w-[100vw] h-[100vh] bg-black/[0.96] relative overflow-hidden">
      <Spotlight className="-top-40 opacity-75 left-0 md:left-60 md:-top-20" />
      <div className="flex mt-[40vh] justify-center text-white text-center mt-20">
        <div>
          <h1 className="text-4xl font-bold">404</h1>
          <p className="text-xl">Page Not Found</p>
        </div>
      </div>
      </Card>
    );
  };
  
  export default NotFoundPage;
  