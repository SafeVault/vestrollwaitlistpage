import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bkFirma = localFont({
  src: [
    {
      path: "../fonts/BR Firma Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/BR Firma Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Vestroll | Modern Payroll & Workforce Management",
  description:
    "Secure, seamless crypto and fiat payroll for modern teams. Manage contracts, track time, and automate payments with Vestroll.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bkFirma.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
