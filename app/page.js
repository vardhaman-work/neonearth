import Header from "@/components/header/";
import Banner from "@/components/home/banner";
import RatingAndFeature from "@/components/home/ratingAndFeature";
import PersonalizedLivingStartsHere from "@/components/home/personalizedLivingStartsHere";
import ExploreDesigns from "@/components/home/exploreDesigns";
import WallBanner from "@/components/home/wallBanner";
import Script from "next/script";
import TrendingHomeDecor from "@/components/home/trendingHomeDecor";
import TimelessTapestries from "@/components/home/timelessTapestries";
import StartCreatingProduct from "@/components/home/startCreatingProduct";
import Footer from "@/components/footer"

import UserContextProvider from "@/context/UploadImageContextProvider";

export default function Home() {
  return (
    <main className="container-fluid">

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
        strategy="afterInteractive"
      />

      <Header />
      <Banner />
      <RatingAndFeature />
      
      <UserContextProvider>
        <StartCreatingProduct />
      </UserContextProvider>
      
      <PersonalizedLivingStartsHere />
      <ExploreDesigns />
      <WallBanner />
      <TrendingHomeDecor />
      <TimelessTapestries />
      <Footer />
    </main>
  );
}
