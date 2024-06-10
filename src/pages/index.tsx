import Explorer from "@/components/Explore";
import About from "@/components/About";
import Location from "@/components/Location";
import Sponsors from "@/components/Sponsors";
import Speakers from "@/components/Speakers";

export default function Home() {
  return (
    <main>
      <Explorer />
      <div className="container mx-auto mt-32 gap-16 flex flex-col">
        <About />
        <Location />
        <Sponsors />
        <Speakers />
      </div>
    </main>
  );
};
