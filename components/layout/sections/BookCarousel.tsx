"use client"; // Mark this as a client component

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image"; // Importing Image from Next.js

export const BookCarousel: React.FC = () => {
  // Define an array of image paths for  reference in the carousel
  const imagePaths = [
    "/C2.jpg",
    "/C3.jpg",
    "/C5.jpg",
    "/C6.jpg",
    "/C9.jpg",
    "/book1.jpg",
    "/book2.jpg",
    "/book3.jpg",
    "/book4.jpg",
    "/book5.jpg",
    "/book6.png",
  ];

  // Create a reference to the autoplay plugin
  const autoPlayPlugin = React.useMemo(() => Autoplay({ delay: 2000 }), []);

  return (
    <div className="relative flex justify-center items-center min-h-screen -mb-[10rem] -mt-[10rem]  carousel-spacing">
      <Carousel
        plugins={[autoPlayPlugin]} // Use the autoplay plugin
        className="w-[75%]"
        onMouseEnter={autoPlayPlugin.stop}
        onMouseLeave={() => autoPlayPlugin.play(false)}
        opts={{
          align: "center",
          loop: true, // Enable continuous looping
        }}
      >
        <CarouselContent className="-ml-4">
          {imagePaths.map((src, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-rectangle items-center justify-center p-2">
                    <Image
                      src={src}
                      alt={`Carousel Image ${index + 1}`}
                      className="object-fill aspect-rectangle w-full rounded-md h-full"
                      width={600} 
                      height={600}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Position Previous and Next buttons */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
