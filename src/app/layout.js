import { Manrope } from "next/font/google";
import "./globals.css";

// Non-Apple font fix 2026-08-23: SF Pro itself can't be licensed for web
// self-hosting (see the --font-system comment in globals.css), so
// -apple-system/BlinkMacSystemFont only ever resolves to real SF Pro on
// Mac/iOS. Everywhere else the stack used to fall through to each OS's own
// system font (Segoe UI on Windows, Roboto on Android) — replaced here with
// Manrope, loaded as a variable font via next/font so it's self-hosted at
// build time (no runtime Google Fonts request, no layout shift) and covers
// every weight the site uses (300–700) without listing discrete cuts.
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Sukhman — UX / Product Designer",
  description:
    "Portfolio of Sukhmanpreet Singh Saini — UX & Product Designer. Through structure, strategy and design thinking, crafting interaction and experience designs that connect human behaviour with digital systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased ${manrope.variable}`}>
      <body className="min-h-full flex flex-col bg-white text-black">
        {children}
      </body>
    </html>
  );
}
