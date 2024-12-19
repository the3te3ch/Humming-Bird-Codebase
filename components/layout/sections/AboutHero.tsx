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
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Learner's Books" },
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

          <div className="max-w-screen-md mx-auto text-center text-3xl md:text-5xl  font-bold">
          <h1>
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
              At Th3Tech, We Use Technology to solve Kenya’s most pressing challenges With passion and innovation at our core.
              </span>
              
            </h1>
          </div>
          <div className="pt-2 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
            <Link href="/catalog" className="px-7 transition-transform transform hover:scale-105 group/arrow hover:shadow-lg hover:shadow-orange-500/50 py-3 w-full bg-orange-700 text-white text-center ease-in-out rounded-lg shadow-md block sm:w-auto">
              Explore Our Previous Projects
            </Link>
            <Link href="/about" className="px-7 bg-background ease-in-out text-primary py-3 transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 w-full border shadow-lg rounded-lg border-orange-700 text-center group/arrow block sm:w-auto">
              Learn More About Us
            </Link>
          </div>
          <p className="max-w-fill mx-auto  text-xl ">
            {`We don’t just create tech—we create solutions that matter.`}
          </p>
         
          <p className="max-w-fill mx-auto mt-3 text-xl ">
            {`Our Mission Is To provide sustainable, impactful technology solutions that address Kenya’s unique needs, driving growth and enhancing everyday life.`}
          </p>
          <p className="max-w-fill mx-auto  text-xl ">
            {`Our Vision Is To be Kenya’s leading tech brand, known for innovation and a commitment to transforming lives through cutting-edge solutions.`}
          </p>

         
        </div>
      </div>
    </section>
  );
};
