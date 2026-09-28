import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";
import { Cinzel_Decorative, Plus_Jakarta_Sans } from "next/font/google";

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <body className="min-h-full flex flex-col">
        
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}
