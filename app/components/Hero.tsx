import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">Stay. Sip. Savor.</h1>
        <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
          Experience our boutique rooms, rooftop skyline views, and a kitchen that celebrates local flavors.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/rooms" className="bg-primary text-white px-6 py-3 rounded-xl hover:brightness-95 transition">Explore Rooms</Link>
          <Link href="/booking" className="px-6 py-3 rounded-xl border border-muted hover:bg-bg-soft transition">Book Now</Link>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-bg-soft via-bg to-accent-soft/30" />
    </section>
  );
}
