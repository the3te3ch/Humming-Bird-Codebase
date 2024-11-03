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
    <header className="shadow-inner  bg-opacity-15 w-full top-0 sticky z-40 bg-card">
      <div className="w-full flex justify-between items-center p-2 px-4"> {/* Adjusted container */}
        <Link href="/" className="font-bold text-md flex items-center">
          <Image
            src="/Logo.png"
            alt="Hummingbird Musikk Logo"
            width={180}
            height={180}
            className="w-[18%] h-[18%]"
          />
          <h6 className="text-xs ml-3 mr-5 font-semibold items-center justify-center text-center">
            Hummingbird Musikk Limited
          </h6>
        </Link>

        {/* Mobile Menu */}
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
              className="flex flex-col justify-center rounded-tr-2xl rounded-br-2xl bg-card"
            >
              <div>
                <SheetHeader className="mb-4">
                  <SheetTitle className="flex items-center">
                    <Link href="/" className="flex">
                      <Image
                        src="/Logo.png"
                        alt="Hummingbird Musikk Logo"
                        width={180}
                        height={180}
                        className="w-[24%] h-[24%]"
                      />
                      <h6 className="text-sm font-semibold">
                        Hummingbird Musikk Limited
                      </h6>
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col text-xs gap-1">
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

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex">
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
      </div>

      {/* Orange line with shadow effect */}
      <div className="w-full h-[0.1rem] bg-orange-600 shadow-b-xl"></div>
    </header>
  );
};
