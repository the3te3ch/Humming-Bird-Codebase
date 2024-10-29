"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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

export const HeroSection = () => {
  return (
    <section className="container mt-3 w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-sm ">
              <Badge>Professional</Badge>
            </span>
            <span className="text-sm"> Printing & Publishing Press</span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Humming Bird Musikk™  
              </span>
              Limited
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`The Ultimate Publication and Printing Press Company for All Your Book Design and Publishing needs.`}
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Link href={routeList[2].href} passHref>
              <Button asChild variant="default" className="w-5/6 md:w-1/4 font-bold group/arrow">
                <span className="flex items-center">
                  Explore Catalog
                  <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>

            <Link href={routeList[3].href} passHref>
              <Button asChild variant="secondary" className="w-5/6 md:w-1/4 font-bold">
                <span className="flex items-center">
                  Learn More
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
