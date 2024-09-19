import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CoreCourses from "@/components/widget/Core-Courses";
import Hero from "@/components/widget/Hero";
import Outcome from "@/components/widget/Outcome";
import SpecializedTracks from "@/components/widget/SpecializedTracks";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero/>
      {/* Core courses section */}
      <CoreCourses/>
      {/* Specialized Tracks */}
      <SpecializedTracks/>
      {/* Outcome Section */}
      <Outcome/>
    </main>
  );
}
