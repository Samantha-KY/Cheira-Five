export default function GalleryGrid({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <img key={i} src={src} alt={`Gallery ${i + 1}`} className="rounded-xl object-cover w-full h-44 md:h-56" />
      ))}
    </div>
  );
}
