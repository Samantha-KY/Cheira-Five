import Link from "next/link";
import Hero from "./components/Hero";
import RoomCard from "./components/RoomCard";
import { rooms, spaces } from "../lib/data";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-foreground">Featured Rooms</h3>
          <Link href="/rooms" className="text-sm text-primary hover:underline">View all</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {rooms.slice(0, 3).map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 bg-bg-soft rounded-[2rem] border border-muted/60">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-foreground">Explore Our Spaces</h3>
          <Link href="/gallery" className="text-sm text-primary hover:underline">See gallery</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {spaces.map((s) => (
            <div key={s.id} className="group bg-surface rounded-2xl shadow hover:shadow-lg transition p-4 border border-muted/60">
              <img src={s.image} alt={s.name} className="rounded-xl mb-4 aspect-[4/3] object-cover w-full" />
              <h4 className="text-lg font-semibold text-foreground">{s.name}</h4>
              <p className="text-foreground/70 text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center">
        <h3 className="text-3xl font-semibold mb-4 text-foreground">Ready to book your stay?</h3>
        <p className="text-foreground/70 mb-6">Secure your dates in seconds. No credit card required to request.</p>
        <Link href="/booking" className="bg-primary text-white px-6 py-3 rounded-xl hover:brightness-95 transition">Book Now</Link>
      </section>
    </main>
  );
}
