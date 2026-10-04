import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar";
import CustomCursor from "../components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ADAMSON | Accountants & Tax Consultants",
  description: "Expert accounting, tax, and financial advisory services.",
  icon: "/logo.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CustomCursor />
        <Preloader />
        <Navbar />

        {children}
      </body>
    </html>
  );

}
