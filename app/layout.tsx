import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";

import { cn } from "@/lib/utils"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"

// Dynamic segments not included in generateStaticParams will return a 404
// export const dynamicParams = false 
// Commented out due to causing errors on output: export => https://github.com/vercel/next.js/issues/56253 

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap", // Necessary for loading the font correctly https://stackoverflow.com/questions/69388400/nextjs-google-font-is-not-loading-or-displaying-on-the-website
})

export const metadata: Metadata = {
  title: "Bike123 - Experts em manutenção de bicicletas",
  description: "Montagens, revisões e reparos de bicicletas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
          <Navbar />
          <div className="min-h-screen">
            {children}
          </div>
          
          <Footer />
        </body>
      
    </html>
  );
}
