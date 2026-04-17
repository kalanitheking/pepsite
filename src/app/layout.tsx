import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ClientProviders from "@/components/modals/ClientProviders";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "King Research | Premium Research Peptides",
  description:
    "Research-grade peptides with third-party verified purity. COA documentation on every batch. For laboratory use only.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="font-roboto text-dark-text bg-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <ClientProviders />
      </body>
    </html>
  );
}
