import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { BookModal } from "./BookModal";

export const GeneralCatalog = () => {
  const bookList = [
    {
      imageUrl: "/C6.jpg",
      title: "Creative Arts Learner’s Book - Grade 6",
      description: "A comprehensive course book aligned with the Competency-Based Curriculum, featuring engaging activities that promote practical learning.",
      link: "/books/learners/creative-arts/grade-6",
    },
    {
      imageUrl: "/C9.jpg",
      title: "Creative Arts and Sports Learner’s Book - Grade 9",
      description: "This learner-centered book incorporates essential core competencies, Pertinent and Contemporary Issues (PCIs), as well as key values, skills, and attitudes through interactive activities.",
      link: "/books/learners/creative-arts-and-sports/grade-9",
    },
    {
      imageUrl: "/C2.jpg",
      title: "Creative Activities Learner’s Book - Grade 2",
      description: "Features a variety of activities with simple, clear instructions designed to encourage self-study.",
      link: "/books/learners/creative-activities/grade-2",
    },
    {
      imageUrl: "/C5.jpg",
      title: "Creative Arts Learner’s Book - Grade 5",
      description: "An all-encompassing course book adhering to the Competency-Based Curriculum; enabling learners to appreciate and apply the knowledge they acquire in their daily lives.",
      link: "/books/learners/creative-arts/grade-5",
    },
    {
      imageUrl: "/C3.jpg",
      title: "Creative Arts Learner’s Book - Grade 3",
      description: "This book introduces Grade 3 students to hands-on creative arts activities, fostering imagination and skill development through fun, practical lessons.",
      link: "/books/learners/creative-arts/grade-3",
    },
    {
      imageUrl: "/book1.jpg",
      title: "Music Workbook 1",
      description: "Covers the fundamentals of music theory, complete with exercises aimed at enhancing note-reading and rhythm skills.",
      link: "/books/workbooks/music-workbook-1",
    },
    {
      imageUrl: "/book2.jpg",
      title: "Music Workbook 2",
      description: "Builds upon Workbook 1 with advanced rhythm exercises and melodic exploration.",
      link: "/books/workbooks/music-workbook-2",
    },
    {
      imageUrl: "/book3.jpg",
      title: "Music Workbook 3",
      description: "Enhances understanding of musical notation and harmony to improve sight-reading skills.",
      link: "/books/workbooks/music-workbook-3",
    },
    {
      imageUrl: "/book4.jpg",
      title: "Music Workbook 4",
      description: "Challenges students with complex music theory concepts, including intervals and chord progressions.",
      link: "/books/workbooks/music-workbook-4",
    },
    {
      imageUrl: "/book5.jpg",
      title: "Music Workbook 5",
      description: "Focuses on advanced harmony and composition techniques, fostering creative expression.",
      link: "/books/workbooks/music-workbook-5",
    },
    {
      imageUrl: "/book6.png",
      title: "Music Workbook 6",
      description: "Completes the series with exercises focusing on counterpoint and advanced chord structures.",
      link: "/books/workbooks/music-workbook-6",
    },
  ];

  return (
    <section id="catalog" className="container hdr:w-[100%] w-[100%] py-24  sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary mb-2 tracking-wider">Catalog</h2>
        <h2 className="text-3xl md:text-4xl font-bold">Explore Our Collection</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {bookList.map(({ imageUrl, title, description, link }, index) => (
          <Card key={index} className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50"> {/* Added hover effects */}
            <CardHeader className="p-0">
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
