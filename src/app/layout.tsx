import type { Metadata } from "next";
import { DotGothic16 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dotGothic = DotGothic16({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "株式会社エコロジーコミュニケーション",
    template: "%s | 株式会社エコロジーコミュニケーション",
  },
  description:
    "人と人、企業と企業をつなぎ、双方のビジネスが円滑に展開できる提案に注力。経費削減・物流・サービス事業を展開する宮城県仙台市の企業です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${dotGothic.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
