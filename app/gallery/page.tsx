import GalleryGrid from "../components/GalleryGrid";
import { galleryImages } from "../../lib/data";
import { Section } from "../components/ui/Section";

export default function GalleryPage() {
  return (
    <main>
      <Section>
        <h1 className="text-3xl font-bold mb-3 text-foreground animate-slide-up">Gallery</h1>
        <p className="text-foreground/70 mb-8 animate-slide-up [animation-delay:120ms]">A glimpse of our spaces and experiences.</p>
        <GalleryGrid images={galleryImages} />
      </Section>
    </main>
  );
}
