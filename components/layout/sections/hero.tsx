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
    <section className="container -mt-16 w-full largeTablet:-mt-[6rem]">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-xs py-2">
            <span className="mr-2 text-xs">
              <Badge className="text-xs">Professional</Badge>
            </span>
            <span className="text-xs">Printing & Publishing Press</span>
          </Badge>

          {/* Updated heading with reduced font sizes and adjusted widths */}
          <div className="max-w-screen-md mx-auto text-center smallPhone:text-2xl mediumPhone:text-3xl largePhone:text-4xl largeTablet:text-5xl laptop:text-6xl desktop:text-7xl ultrawide:text-8xl font-bold">
            <h1>
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Humming Bird Musikk™
              </span>
              Limited
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-base smallPhone:text-xs mediumPhone:text-sm largePhone:text-base smallTablet:text-lg largeTablet:text-xl laptop:text-2xl desktop:text-3xl desktop:w-full hdr:w-full hdr:text-4xl">
            {`The Ultimate Publication and Printing Press Company for All Your Book Design and Publishing needs.`}
          </p>


          <div className="pt-2 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
            <Link href="/catalog" className="px-7 transition-transform transform hover:scale-105 group/arrow hover:shadow-lg hover:shadow-orange-500/50 py-3 w-full bg-orange-700 text-white text-center ease-in-out rounded-lg shadow-md block sm:w-auto">
              Explore Our Book Catalog
            </Link>
            <Link href="/about" className="px-7 bg-background ease-in-out text-primary py-3 transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 w-full border shadow-lg rounded-lg border-orange-700 text-center group/arrow block sm:w-auto">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
