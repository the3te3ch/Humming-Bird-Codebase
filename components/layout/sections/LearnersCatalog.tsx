import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { BookModal } from "./BookModal";

interface LearnerBook {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

export const LearnersCatalog = () => {
  const learnersBooks: LearnerBook[] = [
    {
      imageUrl: "/P6.jpg",
      title: "Service 1",
      description: "A comprehensive course book aligned with the Competency-Based Curriculum, featuring engaging activities that promote practical learning.",
      link: "/books/learners/creative-arts/grade-6",
    },
    {
      imageUrl: "/P1.jpg",
      title: "Service 2",
      description: "This learner-centered book incorporates essential core competencies, Pertinent and Contemporary Issues (PCIs), as well as key values, skills, and attitudes through interactive activities.",
      link: "/books/learners/creative-arts-and-sports/grade-9",
    },
    {
      imageUrl: "/P2.jpg",
      title: "Service 3",
      description: "Features a variety of activities with simple, clear instructions designed to encourage self-study.",
      link: "/books/learners/creative-activities/grade-2",
    },
    {
      imageUrl: "/P5.jpg",
      title: "Service 4",
      description: "An all-encompassing course book adhering to the Competency-Based Curriculum; enabling learners to appreciate and apply the knowledge they acquire in their daily lives.",
      link: "/books/learners/creative-arts/grade-5",
    },
    {
      imageUrl: "/P3.jpg",
      title: "Service 5",
      description: "This book introduces Grade 3 students to hands-on creative arts activities, fostering imagination and skill development through fun, practical lessons.",
      link: "/books/learners/creative-arts/grade-3",
    },
    {
      imageUrl: "/P4.jpg",
      title: "Service 6",
      description: "Covers the fundamentals of music theory, complete with exercises aimed at enhancing note-reading and rhythm skills.",
      link: "/books/Projects/music-workbook-1",
    },
  ];

  return (
    <section id="learners-catalog" className="container -mt-16 w-[100%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">Learner's Books</h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold">Explore Our Learner's Books Collection</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {learnersBooks.map(({ imageUrl, title, description, link }: LearnerBook, index) => (
          <Card
            key={index}
            className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50"
          >
            <CardHeader className="p-0 gap-0">
              <div className="h-full overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={title}
                  width={300}
                  height={300}
                  className="w-full aspect-rectangle object-fill transition-all duration-200 ease-linear group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                />
              </div>
              <CardTitle className="py-6 pb-4 text-md font-bold px-6">{title}</CardTitle>
            </CardHeader>

            <CardFooter className="mt-auto font-bold items-center justify-center">
              <BookModal title={title} description={description} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
