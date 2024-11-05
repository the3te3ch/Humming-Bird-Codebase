"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

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

export const AboutHero = () => {
  const { theme } = useTheme();
  return (
    <section  className="container  -mt-16 w-full ">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-xs py-2">
            <span className="mr-2 text-primary">
              <Badge>About Us</Badge>
            </span>
            <span> Who Are We? </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                 Publishing and Printing Press
              </span>
            </h1>
          </div>
          <p className="max-w-fill mx-auto  text-xl ">
            {`Our mission is to deliver exceptional book designs, printing, and publishing services that elevate educational and literacy experiences for Kenyan Students.`}
          </p>
          <p className="max-w-fill mx-auto  text-xl ">
            {`Our Vision is to be the leading provider of innovative and high-quality book solutions empowering authors and educators to inspire generations.`}
          </p>

         
        </div>
      </div>
    </section>
  );
};
