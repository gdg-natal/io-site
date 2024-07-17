import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Explorer from "@/components/Explore";
import About from "@/components/About";
import Location from "@/components/Location";
import Sponsors from "@/components/Sponsors";
import Speakers from "@/components/Speakers";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full mt-16 text-white/90">
        <Explorer />
        <div className="container mx-auto mt-16 sm:mt-32 gap-16 flex flex-col px-4">
          <About />
          <Location />
          <Sponsors />
          <Speakers />
        </div>
      </main>
      <Footer />
    </>
  );
};
