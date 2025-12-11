import Image from "next/image";
import { Button } from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Replace the image below to change hero background */}
        <Image src="/frontImage.jpg" alt="Cheira Five" fill priority className="object-cover" />
        <div className="absolute inset-0 hero-overlay" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-24 md:py-32 text-center">
        <h1 className="animate-slide-up text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white drop-shadow-md">
          Stay. Sip. Savor.
        </h1>
        <p className="animate-slide-up [animation-delay:120ms] max-w-2xl mx-auto mb-8 text-white/90 drop-shadow">
          Experience our boutique rooms, rooftop skyline views, and a kitchen that celebrates local flavors.
        </p>
        <div className="animate-slide-up [animation-delay:220ms] flex items-center justify-center gap-3 md:gap-4">
          <Button href="#contact" size="lg">Book Now</Button>
          <Button href="https://wa.me/123456789" variant="outline" size="lg">WhatsApp</Button>
        </div>
      </div>
    </section>
  );
}
