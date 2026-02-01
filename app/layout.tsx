import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khawaja Showzib - Portfolio",
  description:
    "Portfolio of Khawaja Showzib — Frontend Developer specializing in modern web applications, performance, and user-focused design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer
          linkedinUrl="https://www.linkedin.com/in/khawaja-showzib"
          email="khawajashowzib22@email.com"
        />
      </body>
    </html>
  );
}
