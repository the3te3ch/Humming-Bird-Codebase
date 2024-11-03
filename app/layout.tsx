import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { FooterSection } from "@/components/layout/sections/footer";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hummingbird Musikk Limited",
  description: "Sing the Moment.",
  icons: {
    icon: '/Logo.png', // Link to your favicon
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        {/* Favicon links */}
        <head>

          <link rel="icon" type="image/png" sizes="1302x1302" href="/Logo.png" />
          <link rel="icon" type="image/png" sizes="316x316" href="/Logo.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/Logo.png" />
          <link rel="icon" type="image/png" sizes="300x300" href="/Logo.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </head>

      </head>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <SpeedInsights />
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
