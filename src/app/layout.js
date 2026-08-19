import "./globals.css";

export const metadata = {
  title: "Sukhman — UX / Product Designer",
  description:
    "Portfolio of Sukhmanpreet Singh Saini — UX & Product Designer. Through structure, strategy and design thinking, crafting interaction and experience designs that connect human behaviour with digital systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-black">
        {children}
      </body>
    </html>
  );
}
