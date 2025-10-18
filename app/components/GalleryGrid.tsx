import Image from "next/image";

export default function GalleryGrid({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <div key={i} className="relative w-full h-44 md:h-56 rounded-xl overflow-hidden">
          <Image
            src={src}
            alt={`Gallery ${i + 1}`}
            fill
            sizes="(min-width: 768px) 33vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
