import type { Metadata } from "next";
import { El_Messiri, Inter } from "next/font/google";
import "./globals.css";

const elMessiri = El_Messiri({
  variable: "--font-el-messiri",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Genesis Estate — Premium Living in Apo, Abuja | Henez Homes",
  description:
    "Own a premium home in Genesis Estate, Apo (Wumba District), Abuja. Fully serviced estate with flexible 12-month payment plans. 2-5 bedroom units from ₦50M. Secure your unit today.",
  keywords: [
    "Genesis Estate",
    "Apo Abuja",
    "Wumba District",
    "Henez Homes",
    "premium estate Abuja",
    "real estate investment Nigeria",
    "luxury homes Abuja",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${elMessiri.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
