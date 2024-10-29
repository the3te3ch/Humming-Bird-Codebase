import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Comprehensive Publishing Support",
    description:
      "Expert guidance through every stage of the publishing process, with personalized assistance for both self-published and traditionally published authors.",
  },
  {
    icon: "BadgeCheck",
    title: "Printing Press Excellence",
    description:
      "High-quality, precision-driven printing that brings your work to life, using durable, professional materials that reflect the value of your content.",
  },
  
  {
    icon: "MousePointerClick",
    title: "Tailored Experiences",
    description:
      "Customized solutions designed to meet the unique needs and goals of every client.",
  },
 
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container mt-6 py-24 -mb-20 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Our Commitment to Quality
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
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
