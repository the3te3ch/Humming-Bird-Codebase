import {LearnersCatalog} from "@/components/layout/sections/LearnersCatalog";


export const metadata = {
  title: "Hummingbird Musikk",
  description: "Sing the Moment.",
  openGraph: {
    type: "website",
    url: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Hummingbird Musikk",
    description: "Sing the Moment.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Hummingbird Musikk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Hummingbird Musikk",
    description: "Sing the Moment.",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
     < LearnersCatalog />
    </>
  );
}
