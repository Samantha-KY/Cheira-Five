import Image from "next/image";
import { Section } from "../components/ui/Section";

export default function RooftopPage() {
  return (
    <main>
      <Section>
        <h1 className="text-3xl font-bold mb-3 text-foreground animate-slide-up">Rooftop Bar</h1>
        <p className="text-foreground/70 mb-6 animate-slide-up [animation-delay:120ms]">Enjoy the skyline with curated cocktails and live ambiance.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl w-full overflow-hidden aspect-[16/9] animate-fade-in">
            <Image src="/rooftop.jpg" alt="Rooftop" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="bg-surface p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-muted/60 animate-fade-in">
            <h3 className="font-semibold mb-2 text-foreground">Highlights</h3>
            <ul className="list-disc ml-5 text-sm text-foreground/80 space-y-1">
              <li>Sunset views</li>
              <li>Signature cocktails</li>
              <li>Live DJ on weekends</li>
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
}
