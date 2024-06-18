import Explorer from "@/components/Explore";
import About from "@/components/About";
import Location from "@/components/Location";
import Sponsors from "@/components/Sponsors";
import Speakers from "@/components/Speakers";

export default function Home() {
  return (
    <main className="container flex flex-col w-full text-white/90">
      <Explorer />
<<<<<<< HEAD
      <div className="container mx-auto mt-32 gap-16 flex flex-col px-4">
=======
      <div className="container md:px-16 px-4 w-full mt-32 gap-16 flex flex-col items-center">
>>>>>>> 60f96aa (fix responsive cards)
        <About />
        <Location />
        <Sponsors />
        <Speakers />
      </div>
    </main>
  );
};
