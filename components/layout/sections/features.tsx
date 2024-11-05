import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { MdBook, MdPrint } from "react-icons/md"; // Importing Material Design icons
import { GiPaintBrush } from "react-icons/gi"; // Importing Game Icons for Paint Brush

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Book",
    title: "Professional Publishing",
    description:
      "Comprehensive publishing services that ensure your vision is fully realized throughout every project.",
  },
  {
    icon: "Printer",
    title: "Printing Press",
    description:
      "High-quality, precision-driven printing that brings your work to life, utilizing durable, professional materials that enhance the visual appeal of your content.",
  },
  {
    icon: "Brush",
    title: "Book Design",
    description:
      "Expert design services that create visually captivating and engaging book layouts, covers, and illustrations tailored to meet your specific needs and target audience.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container w-[100%] mt-6 py-24 my-6 -mb-32 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        What We Do
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-6">
        Our Services
      </h2>

      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border border-orange-600 rounded-lg shadow-none transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50"> {/* Added hover effects */}
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
