import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import "./favicon.ico"
export const metadata: Metadata = {
  title: "Jeevan",
  description: "Portfolio showcasing my work and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
       <head>
      <link rel="icon" href="/favicon.ico" />
     
    </head>
      <body className={`${GeistSans.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}

