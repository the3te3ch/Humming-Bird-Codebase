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
    <header className="shadow-inner bg-opacity-15 w-full top-0 sticky z-40 bg-card">
      <div className="flex items-center justify-between p-4 lg:px-8 w-full">
        
        {/* Logo and Logo Text */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/Logo.png"
            alt="Hummingbird Musikk Logo"
            width={30}
            height={30}
            className="w-8 h-8"
          />
          <h6 className="text-sm lg:text-md font-bold">
            Hummingbird Musikk Limited
          </h6>
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex items-center justify-center mx-auto">
          <NavigationMenuList className="flex space-x-8">
            {routeList.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={href}
                    className="relative text-md font-semibold transition duration-200 ease-in-out
                               after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
                               after:bg-primary after:shadow-b-lg after:transition-all after:duration-300
                               hover:after:w-full"
                  >
                    {label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Toggle Theme for Desktop */}
        <div className="hidden lg:flex">
          <ToggleTheme />
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Menu
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer text-lg"
              />
            </SheetTrigger>

            <SheetContent
              side="left"
              className="flex flex-col justify-center p-4 bg-card rounded-tr-2xl rounded-br-2xl"
            >
              <SheetHeader className="mb-4">
                <SheetTitle className="flex items-center space-x-2">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/Logo.png"
                      alt="Hummingbird Musikk Logo"
                      width={30}
                      height={30}
                      className="w-8 h-8"
                    />
                    <h6 className="text-sm font-bold">
                      Hummingbird Musikk Limited
                    </h6>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col text-sm space-y-3">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>

              <SheetFooter className="flex flex-col mt-4 items-start">
                <Separator className="mb-2" />
                <ToggleTheme />
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Orange line with shadow effect */}
      <div className="w-full h-[0.1rem] bg-orange-600 shadow-b-xl"></div>
    </header>
  );
};
