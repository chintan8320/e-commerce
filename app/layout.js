import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@container/Nav";
import Footer from "@container/Footer";
import ReduxProvider from "@lib/redux_provider";
import Header from "@container/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bath-accessories",
  description: "Bath-accessories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Header />
          <Nav />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
