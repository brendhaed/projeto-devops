import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import ThemeRegistry from "./ThemeRegistry";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.variable} suppressHydrationWarning>

        <ThemeRegistry>
          <NavBar />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
