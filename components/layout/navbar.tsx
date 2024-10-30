"use client";
import { Github, Menu } from "lucide-react";
import React from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "/workbooks", label: "Workbooks" },
  { href: "/learners", label: "Learner's Books" },
  { href: "/catalog", label: "Catalog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[90%] lg:w-[90%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-lg flex justify-center items-center text-center p-2 bg-card">
      <Link href="/" className="font-bold text-md flex items-center">
        <Image
          src="/Logo.png"
          alt="Hummingbird Musikk Logo"
          width={150}
          height={150}
          className="w-[18%] h-[18%]"
        />
        <h5 className="text-md font-bold text-center justify-center items-center">Hummingbird Musikk 
          Limited</h5>
      </Link>

      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-center rounded-tr-lg rounded-br-lg bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex ">
                    <Image
                      src="/Logo.png"
                      alt="Hummingbird Musikk Logo"
                      width={150}
                      height={150}
                      className="w-[32%] h-[32%] "
                    />
                    <h6 className="text-md  justify-center items-center  text-center ml-1 -mt-0.8 ">Hummingbird Musikk Limited</h6>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col items-center justify-center  text-center text-sm gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden p-1 lg:flex">
        <ToggleTheme />
        
      </div>
    </header>
  );
};