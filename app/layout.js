import { Open_Sans, Sacramento } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/scss/globals.scss";

const openSans = Open_Sans({
  variable: "--font-open-sans", // Custom variable name
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Specify font weights if needed
});

const sacramento = Sacramento({
  variable: "--font-sacramento", // Custom CSS variable name
  subsets: ["latin"],
  weight: "400", // Sacramento has only one weight (400)
});

export const metadata = {
  title: "Buy Custom Wall Tapestry, Wallpapers, Rugs, Pillows, Curtains & More- Neon Earth",
  description: "Shop for Custom Wall Tapestry, Wallpapers, Rugs, Pillows, Curtains, Bags & more at NeonEarth. Elevate Your Space with Personalized Art. Create Your Perfect Home Today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${sacramento.variable}`}>
        {children}
      </body>
    </html>
  );
}
