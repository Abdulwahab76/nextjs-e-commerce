import "@/styles/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Container/Navbar";
import Footer from "@/components/Container/Footer";

export const metadata: Metadata = {
  title: "E-commerce website",
  description: "E-commerce website with",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="app relative">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
