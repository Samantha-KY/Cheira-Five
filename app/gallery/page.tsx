import GalleryGrid from "../components/GalleryGrid";
import { galleryImages } from "../../lib/data";

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Gallery</h1>
      <p className="text-foreground/70 mb-8">A glimpse of our spaces and experiences.</p>
      <GalleryGrid images={galleryImages} />
    </main>
  );
}
