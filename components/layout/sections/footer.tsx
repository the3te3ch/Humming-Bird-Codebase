// FooterSection.js
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "/Projects", label: "Projects" },
  { href: "/learners", label: "Learners' Books" },
  { href: "/catalog", label: "Catalog" },
  { href: "/about", label: "About Us" },
];

export const FooterSection = () => {
  return (
    <footer id="footer" className="w-full  bg-card border-t border-secondary p-10">
      <div className="container mx-auto p-3">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full items-center xl:col-span-2">
            <Link href="/" className="flex font-bold items-center">
              
              <h1 className="text-[12px] lg:text-xl font-bold">The3 Te3ch Company &copy;2024</h1>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-md">Quick Links</h3>
            {routeList.map(({ href, label }) => (
              <Link key={href} href={href} className="opacity-60 hover:opacity-100">
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-md">Got an enquiry?</h3>
            <div>
              <Link href="/contact" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-3" />

        <section className="text-center">
        
          <h3>
            Built and Maintained by
            <Link
              target="_blank"
              href="https://github.com/theyardmic"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Strucker Inc&copy;2024
            </Link>
          </h3>
        </section>

        <section className="text-center">
          <h3>
            Powered By
            <Link
              target="_blank"
              href="https://linktr.ee/resleentechnative"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Resleen Tech Native Ltd&copy;2024
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
