import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rahul Gupta | Full Stack & AI Developer",
  description: "Building Intelligence into Experiences. Expert in Next.js, React, AI/ML, and Cloud Technologies.",
  keywords: ["Full Stack Developer", "AI Developer", "Next.js", "React", "Machine Learning", "Rahul Gupta"],
  authors: [{ name: "Rahul Gupta" }],
  openGraph: {
    title: "Rahul Gupta | Full Stack & AI Developer",
    description: "Building Intelligence into Experiences",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Gupta | Full Stack & AI Developer",
    description: "Building Intelligence into Experiences",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <LoadingScreen />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
