import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
