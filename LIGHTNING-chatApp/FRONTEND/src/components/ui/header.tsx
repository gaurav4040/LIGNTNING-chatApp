"use client";

import { Button } from "@/components/ui/button-footer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu-footer";
import { useAuthStore } from "@/store/useAuthStore";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

import { Link } from "react-router-dom";

function Header1() {
  const {signOut,authUser} = useAuthStore();
 
  const confirmation=()=>{
    toast.custom((t) => (
      <div
        className={`bg-black p-4 rounded-xl shadow-md border border-gray-200 w-[300px] ${
          t.visible ? "animate-enter" : "animate-leave"
        }`}
      >
        <p className="font-medium text-gray-200">Are you sure?</p>
        <p className="text-sm text-gray-400 mb-3">This action cannot be undone.</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              toast.dismiss(t.id)
            }}
            className="text-sm px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              toast.dismiss(t.id)
              signOut();
            }}
            className="text-sm px-3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    ))
  }

  const navigationItems = [
    {
      title: "Home",
      href: "/home",
      description: "",
    },
    
    {
      title: "Company",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "About us",
          href: "/about",
        },
        {
          title: "Fundraising",
          href: "/fundraising",
        },
        {
          title: "Investors",
          href: "/investors",
        },
        {
          title: "Contact us",
          href: "/contact",
        },
      ],
    },
  ];
  const profile = [

    {
      title: "Profile",
      description: "Here is your profile",
      items: [
        {
          title: "view profile",
          href: "/profile",
        },
        {
          title: "Dashboards",
          href: "/dashboards",
        },
      ],
    }
  ]
  const register = [
    {
      title: "Sign In",
      href: "/signin",
    },
    {
      title: "Get Started",
      href: "/signup",
    },
  ];
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background">
      <div className="container relative mx-auto min-h-12 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <>
                      <NavigationMenuLink href="/">
                          <Button variant="ghost" >{item.title}</Button>
                      </NavigationMenuLink>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base">{item.title}</p>
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </div>
                            <Button size="sm" className="mt-10">
                              Book a call today
                            </Button>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex lg:justify-center">
          <p className="font-bold text-2xl bg-gradient-to-r from-black via-slate-500 to-black bg-clip-text text-transparent">LIGHTNING</p>
        </div>
        <div>
          <div className="flex justify-end w-full gap-4">
            {    
            !authUser?register.map((item) => (

                <NavigationMenu key={item.title}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuLink href={item.href}>
                        {item.title == "Sign In" ? (
                          <Button variant="outline">{item.title}</Button>
                        ) : (
                          <Button>{item.title}</Button>
                        )}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>    
            )):
            <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
                <NavigationMenuItem /><NavigationMenuItem/>
                <NavigationMenuItem /><NavigationMenuItem/>
                {/* <NavigationMenuItem/><NavigationMenuItem /> */}
                {/* <NavigationMenuItem/><NavigationMenuItem />
                <NavigationMenuItem/><NavigationMenuItem />
                <NavigationMenuItem/><NavigationMenuItem /> */}
                {/* <NavigationMenuItem/><NavigationMenuItem />
                <NavigationMenuItem/><NavigationMenuItem /> */}
  
              {profile.map((item) => (
            
                  <NavigationMenuItem key={item.title} className="border border-black rounded-lg hover:border-none">
                    {(
                      <>
                        <NavigationMenuTrigger className="font-medium text-sm">
                          {item.title}
                        </NavigationMenuTrigger>
                        {/* profile grid menu */}
                        <NavigationMenuContent className="!w-[200px] p-4">
                          <div className="flex flex-col sm:grid grid-cols-1 gap-2">
                            <div className="flex flex-col h-full justify-between">
                              <div className="flex flex-col">
                                {/* {profile pic div} */}
                                <div className="flex-col items-center ">
                                  <div className="flex justify-center select-none">
                                    <div className="relative ">
                                        <img
                                        src={authUser.profilePic || "/avatar.jpeg"}
                                        alt="Profile Pic"
                                        className="w-14 h-14 rounded-full border-2 border-gray-600"
                                        />
                                    </div>
                                  </div>
                                <p className=" flex text-base justify-center mt-2">{authUser?authUser.fullName:item.title}</p>
                                </div>
                                {/* pic div end */}
                                {/* <p className="text-muted-foreground text-sm">
                                  {item.description}
                                </p> */}
                              </div>
                            </div>
                            <div className="flex flex-col text-sm h-full justify-end">
                              {item.items?.map((subItem) => (
                                <NavigationMenuLink
                                  href={subItem.href}
                                  key={subItem.title}
                                  className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                                >
                                  <span>{subItem.title}</span>
                                  <MoveRight className="w-4 h-4 text-muted-foreground" />
                                </NavigationMenuLink>
                              ))}
                            </div>
                            <Button onClick={confirmation} size="sm" className="mt-2">
                                signOut
                              </Button>
                          </div>
                        </NavigationMenuContent>
                      </>
                    )}
                  </NavigationMenuItem>
           
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
          }
          </div>

        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link
                        to={item.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                      </Link>
                    ) : (
                      <p className="text-lg">{item.title}</p>
                    )}
                    {item.items &&
                      item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.href}
                          className="flex justify-between items-center"
                        >
                          <span className="text-muted-foreground">
                            {subItem.title}
                          </span>
                          <MoveRight className="w-4 h-4 stroke-1" />
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export { Header1 };
