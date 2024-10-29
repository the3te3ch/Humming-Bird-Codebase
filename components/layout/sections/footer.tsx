import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "/workbooks", label: "Workbooks" },
  { href: "/learners", label: "Learners' Books"},
  { href: "/catalog", label: "Catalog"},
  { href: "/about", label: "About Us" },
  ];

export const FooterSection = () => {
  return (
    <footer id="footer" className="container items-center justify-center py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full items-center xl:col-span-2">
          <Link href="/" className="flex font-bold items-center">
              <Image
                src="/Logo.png" // Ensure the logo path is correct
                alt="Hummingbird Musikk Logo"
                width={180}
                height={180}
                className="w-[28%] h-[28%] mr-2"
              />
              <h4 className="text-xl font-bold">Hummingbird Musikk Limited</h4>
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
              <Link href="contact" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>
            
          </div>
        </div>

        <Separator className="my-6" />
        
        <section className="text-center">
          <p className="text-primary">&copy;2024</p>
          <h3>
            Built and Maintained by
            <Link
              target="_blank"
              href="https://github.com/theyardmic"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Strucker Inc.&copy;
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
              Resleen Tech Native Ltd.&copy;
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};