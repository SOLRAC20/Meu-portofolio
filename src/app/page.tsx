import Image from "next/image";
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components = [
  {
    title: "GitHub",
    href: "/docs/primitives/components/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
    icon: CircleIcon,
  },
  {
    title: "LinkedIn",
    href: "/docs/primitives/components/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
    icon: CircleIcon,
  },
  {
    title: "Instagram",
    href: "/docs/primitives/components/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
    icon: CircleIcon,
  },
  {
    title: "Twitter",
    href: "/docs/primitives/components/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
    icon: CircleIcon,
  },
  ]

export default function Home() {
  return (
    <div className="font-sans bg-[#101318] flex flex-col items-center justify-items-center min-h-screen py-10 m-0">
      
      <img src="iconbg.png" className="absolute top-0 right-0" alt="" />
        <div className="container w-full">
          <div className="flex relative mb-20">
          <NavigationMenu viewport={false} className="w-full justify-between">
      <NavigationMenuList className="">
        <NavigationMenuItem className="">
          <Button className="bg-[#101318] hover:bg-[#101318] hover:text-[#FCE803] text-white">Button</Button>
          
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className="">
        <NavigationMenuItem className="flex">
          <Button className="bg-[#101318] hover:bg-[#101318] hover:text-[#FCE803] text-white">Button</Button>
          
        </NavigationMenuItem>
      </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="w-full flex justify-between relative">
          <div className="flex flex-col items-start justify-center gap-2">
            <h1 className="text-white text-2xl font-bold">Carlos Xavier</h1>
            <p className="text-[#FCE803] text-4xl font-bold">FRONT END  DEVELOPER</p>
            <p className="text-white">Software Engineer</p>
            <p className="text-white">Web Developer</p>
          </div>

          <div className="relative">
            
            <div className="relative top-0 left-0 w-[400px] h-[400px] blur-lg border-8 border-[#FCE803] rounded-full flex items-center justify-center">
            </div>
            <div className="absolute top-0 left-0 w-[400px] h-[400px] border-10 border-[#FCE803] rounded-full flex items-center justify-center overflow-hidden">
              <img src="/00212.jpg" alt="" className="object-top w-full h-full" />

            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-4">
        {components.map((component) => (
          <div className="w-full relative mt-10 border-1 border-[#FFFFFF0A] bg-[#FFFFFF05] rounded-[32px] p-4 px-10 shadow-[inset_0px_1px_0px_0px_#ffffff14]  min-h-[200px] flex items-center justify-between">
          <div className="flex flex-col items-start justify-center gap-2">
            <h2 className="text-white text-xl font-bold">{component.title}</h2>
            <p className="text-white">{component.description}</p>
          </div>
        </div>
        ))}

        </div>
        <div className="w-full relative mt-10 border-1 border-[#FFFFFF0A] bg-[#FFFFFF05] rounded-[32px] p-4 px-10 shadow-[inset_0px_1px_0px_0px_#ffffff14]  min-h-[200px] flex items-center justify-between">
          <div className="flex flex-col items-start justify-center gap-2">
            <h2 className="text-white text-xl font-bold">About Me</h2>
            <p className="text-white">I am a passionate front-end developer with a knack for creating stunning user interfaces.</p>
          </div>
        </div>
        </div>


    </div>
  );
}
