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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function Home() {
  return (
    <div className="font-sans bg-[#101318] flex flex-col items-center justify-items-center min-h-screen py-10 m-0">
      
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
            
            <div className="relative top-0 left-0 w-[500px] h-[500px] blur-lg border-8 border-[#FCE803] rounded-full flex items-center justify-center">

            </div>
            <div className="absolute top-0 left-0 w-[500px] h-[500px] border-10 border-[#FCE803] rounded-full flex items-center justify-center">

            </div>
          </div>
        </div>
        </div>



    </div>
  );
}
