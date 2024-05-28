import SpeakerCard from "./SpeakerCard";

export default function About() {
  return (
    <section id="speakers" className="grid grid-cols-4 gap-8">
      <SpeakerCard />
      <SpeakerCard />
      <SpeakerCard />
      <SpeakerCard />
    </section>
  )
}
