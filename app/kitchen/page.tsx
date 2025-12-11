import Image from "next/image";
import { Section } from "../components/ui/Section";

export default function KitchenPage() {
  return (
    <main>
      <Section>
        <h1 className="text-3xl font-bold mb-3 text-foreground animate-slide-up">Kitchen</h1>
        <p className="text-foreground/70 mb-6 animate-slide-up [animation-delay:120ms]">From breakfast to dinner, our kitchen serves seasonal dishes with local ingredients.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl w-full overflow-hidden aspect-[16/9] animate-fade-in">
            <Image src="/images/kitchen.jpg" alt="Kitchen" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="bg-surface p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-muted/60 animate-fade-in">
            <h3 className="font-semibold mb-2 text-foreground">Specialties</h3>
            <ul className="list-disc ml-5 text-sm text-foreground/80 space-y-1">
              <li>Chef&apos;s tasting menu</li>
              <li>Local seafood</li>
              <li>Vegan and gluten-free options</li>
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
}
