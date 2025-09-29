import type { Metadata } from "next";
import { Geist_Mono, Inconsolata } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/lib/theme/themeprovider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jovis Jocunda",
  description: "I'm Pull,, no I'm Fullstack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inconsolata.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
