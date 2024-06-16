import Explorer from "@/components/Explore";
import About from "@/components/About";
import Location from "@/components/Location";
import Sponsors from "@/components/Sponsors";
import Speakers from "@/components/Speakers";

export default function Home() {
  return (
    <main className="container flex p-4 flex-col mx-auto w-full text-white/90">
      <Explorer />
      <div className="container mx-auto mt-32 gap-16 flex flex-col px-4">
        <About />
        <Location />
        <Sponsors />
        <Speakers />
      </div>
    </main>
  );
};
