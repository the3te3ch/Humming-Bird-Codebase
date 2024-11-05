import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { BookModal } from "./BookModal";

interface Book {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

export const WorkBooksCatalog = () => {
  const workbooks: Book[] = [
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
    <section id="workbooks-catalog" className="container -mt-16 py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">Workbooks</h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold">Explore Our Workbooks Collection</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {workbooks.map(({ imageUrl, title, description, link }: Book, index) => (
          <Card key={index} className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50"> {/* Added hover effects */}
            <CardHeader className="p-0 gap-0">
              <div className="h-full overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={title}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover transition-all duration-200 ease-linear group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                />
              </div>
              <CardTitle className="py-6 text-md pb-4 px-6">{title}</CardTitle>
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
