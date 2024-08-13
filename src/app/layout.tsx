import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./variable.css";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-bai-jamjuree",
});

export const metadata: Metadata = {
  title: "NextSky",
  description: "NextSky Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={baiJamjuree.className}>{children}</body>
    </html>
  );
}
