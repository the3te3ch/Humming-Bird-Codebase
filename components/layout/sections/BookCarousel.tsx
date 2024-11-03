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

  // Crea=te a reference to the autoplay plugin
  const autoPlayPlugin = React.useMemo(() => Autoplay({ delay: 1450 }), []);

  return (
    <div className="relative  flex justify-center items-center min-h-screen
     smallPhone:-mb-[8rem] smallPhone:-mt-[6rem] 
     largePhone:-mb-[4rem] largePhone:-mt-[4rem]
      largeTablet:-mb-[6rem] largeTablet:-mt-[6rem]  
     laptop:-mb-[6rem] laptop:-mt-[8rem]
     desktop:-mb-[6rem] desktop:-mt-[12rem]
     hdr:-mb-[8rem] hdr:-mt-[12rem]
     ultraWide:-mb-[8rem] ultraWide:-mt-[12rem]
">

      <Carousel
        plugins={[autoPlayPlugin]} // Use the autoplay plugin
        className=" w-[70%] 
     smallPhone:w-[75%] 
     largePhone:w-[75%] 
     smallTablet:w-[90%] 
     largeTablet:w-[90%] 
     laptop:w-[92%] 
     desktop:w-[94%] 
     hdr:w-[96%] 
     ultraWide:w-[100%]   "
        onMouseEnter={autoPlayPlugin.stop}

        opts={{
          align: "center",
          loop: true, // Enable continuous looping
        }}
      >
        <CarouselContent className="-ml-3 carousel-track">
          {imagePaths.map((src, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="p-1 flex aspect-rectangle items-center justify-center">
                <Image
                  src={src}
                  alt={`Carousel Image ${index + 1}`}
                  className="object-fill carousel-image aspect-rectangle w-full rounded-tr-2xl rounded-br-2xl h-full"
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
