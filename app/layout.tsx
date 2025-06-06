import type { Metadata } from "next";
import "./globals.css"; // globals.cssも作成します

export const metadata: Metadata = {
  title: "Simple Vercel App",
  description: "A very simple app to display text on Vercel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <header style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
          Simple App Header
        </header> */}
        <main style={{ padding: "1rem" }}>{children}</main>
        {/* <footer style={{ padding: "1rem", backgroundColor: "#f0f0f0", marginTop: "2rem" }}>
          Simple App Footer
        </footer> */}
      </body>
    </html>
  );
}
