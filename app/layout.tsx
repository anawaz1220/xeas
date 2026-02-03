import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoadingBar from "@/components/LoadingBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "XEAS Technologies - Custom Software & Location Intelligence",
  description: "Leading IT services company specializing in custom software development, map-based applications, and data-driven web platforms.",
  keywords: ["software development", "location intelligence", "geospatial", "custom software", "map applications"],
  authors: [{ name: "XEAS Technologies" }],
  openGraph: {
    title: "XEAS Technologies",
    description: "Custom Software Development & Location Intelligence Solutions",
    url: "https://xeas.net",
    siteName: "XEAS Technologies",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <LoadingBar />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
