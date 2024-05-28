import Explorer from "@/components/Explore";
import About from "@/components/About";
import Location from "@/components/Location";
import Sponsors from "@/components/Sponsors";
import Speakers from "@/components/Speakers";

export default function Home() {
  return (
    <main>
      <Explorer />
      <div className="container mx-auto gap-8 flex flex-col">
        <About />
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-3">
            <Sponsors />
          </div>
          <div className="col-span-2">
            <Location />
          </div>
        </div>
        <Speakers />
      </div>
    </main>
  );
}
