"use client"; // Mark this as a client component

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image"; // Importing Image from Next.js

export const BookCarousel: React.FC = () => {
  // Define an array of image paths for reference in the carousel
  const imagePaths = [
    "/C2.jpg",
    "/C3.jpg",
    "/C5.jpg",
    "/C6.jpg",
    "/C9.jpg",
    "/cre-2.jpg",
    "/cre-3.jpg",
    "/cre-4.jpg",
    "/cre-9.jpg",
    "/environmental-activities-1.jpg",
    "/environmental-activities-2.jpg",
    "/environmental-activities-3.jpg",
    "/book1.jpg",
    "/book2.jpg",
    "/book3.jpg",
    "/book4.jpg",
    "/book5.jpg",
    "/book6.png",
  ];

  // Create a reference to the autoplay plugin
  const autoPlayPlugin = React.useMemo(() => Autoplay({ delay: 1450 }), []);

  return (
    <div
      className="
    relative flex justify-center items-center min-h-screen
    mt-[-12rem] mb-[-14rem]    
    largePhone:mb-[-12rem] largePhone:mt-[-10rem]    /* Default for mobile */
    largeTablet:mt-[-10rem] largeTablet:mb-[-12rem]
  "
    >

      <Carousel
        plugins={[autoPlayPlugin]} // Use the autoplay plugin
        className="
          w-[75%] smallPhone:w-[75%] mediumPhone:w-[75%] largePhone:w-[75%]
          smallTablet:w-[75%] largeTablet:w-[75%] laptop:w-[90%] desktop:w-[90%] hdr:w-[90%] ultraWide:w-[90%]
        "
        onMouseEnter={autoPlayPlugin.stop}
        opts={{
          align: "center",
          loop: true, // Enable continuous looping
        }}
      >
        <CarouselContent className="carousel-track">
          {imagePaths.map((src, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="p-1 flex aspect-rectangle items-center justify-center">
                <Image
                  src={src}
                  alt={`Carousel Image ${index + 1}`}
                  className="object-cover aspect-rectangle w-full rounded-tr-2xl rounded-br-2xl h-full"
                  width={600}
                  height={600}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Position Previous and Next buttons */}
        <div className="flex justify-between mx-3">
          <CarouselPrevious aria-label="Previous Item" className="m-3" />
          <CarouselNext aria-label="Next Item" className="m-3" />
        </div>
      </Carousel>
    </div>
  );
};
