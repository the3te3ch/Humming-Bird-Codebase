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
    icon: "Code",
    title: "Web and Software Development",
    description:
      "We create custom, user-friendly websites and robust software solutions and applications designed to meet the unique needs of your business.",
  },
  {
    icon: "Palette",
    title: "Branding and Graphic Design",
    description:
      "Our expert team crafts memorable branding, printing, and stunning visual designs to establish a strong identity and leave a lasting impression.",
  },
  {
    icon: "Megaphone",
    title: "Digital Marketing",
    description:
      "We help you reach your target audience through effective digital marketing strategies that drive traffic, engagement, and conversions.",
  },
  {
    icon: "Film",
    title: "Digital Animation",
    description:
      "We bring your ideas to life with captivating digital animations that enhance storytelling and engage your audience visually.",
  },
  {
    icon: "Camera",
    title: "Photography",
    description:
      "Our professional photography services capture high-quality images that showcase your products, people, and brand in the best light.",
  },
  {
    icon: "Video",
    title: "Videography and Video Post Production",
    description:
      "We produce compelling video content and expertly edit footage to tell your story, enhancing your brand’s message and reach.",
  },
  {
    icon: "Cpu",
    title: "AI-Augmented Professional Development",
    description:
      "We offer cutting-edge AI tools and training to elevate the skills of professionals, driving growth and innovation in your workforce.",
  },
  {
    icon: "Server",
    title: "IT Services and Consultation",
    description:
      "We provide expert IT consultation and tailored technology solutions to empower businesses with seamless, efficient, and scalable digital transformations.",
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
