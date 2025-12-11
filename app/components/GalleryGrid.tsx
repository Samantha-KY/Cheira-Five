import Image from "next/image";

export default function GalleryGrid({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {images.map((src, i) => (
        <div key={i} className="relative w-full aspect-[4/3] md:aspect-[3/2] rounded-xl overflow-hidden group animate-fade-in">
          <Image
            src={src}
            alt={`Gallery ${i + 1}`}
            fill
            sizes="(min-width: 768px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Optional: wrap each in a link to prepare for a lightbox implementation */}
        </div>
      ))}
    </div>
  );
}
