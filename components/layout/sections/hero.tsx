"use client";
import { Badge } from "@/components/ui/badge";
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
            <span className="mr-2 text-sm">
              <Badge>Professional</Badge>
            </span>
            <span className="text-sm">Printing & Publishing Press</span>
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
          
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
            <Link href="/catalog" className="px-7 py-3 w-full bg-orange-700 text-white text-center rounded-md shadow-md block sm:w-auto">
              Explore Our Catalog
            </Link>
            <Link href="/about" className="px-7 py-3 w-full border shadow-md rounded-lg border-orange-700 text-white text-center  block sm:w-auto">
             Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
