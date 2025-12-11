import Link from "next/link";
import Hero from "./components/Hero";
import RoomCard from "./components/RoomCard";
import { rooms, spaces, galleryImages } from "../lib/data";
import Image from "next/image";
import { Section, SectionHeader } from "./components/ui/Section";
import { Card, CardBody, CardMedia } from "./components/ui/Card";
import { Button } from "./components/ui/Button";
import GalleryGrid from "./components/GalleryGrid";
import BookingForm from "./components/BookingForm";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* About / Story */}
      <Section id="about">
        <SectionHeader
          title="Our Story"
          subtitle="A boutique stay with warm hospitality, skyline views, and a kitchen that celebrates local flavors."
        />
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm animate-fade-in">
            {/* Replace the image below to update About section visuals */}
            <Image src="/garden.jpg" alt="About Cheira Five" fill className="object-cover" />
          </div>
          <div className="space-y-4 animate-slide-up">
            <h4 className="text-xl font-semibold text-foreground">Stay. Sip. Savor.</h4>
            <p className="text-foreground/80">
              Designed for unwinding and connection, our mini hotel blends modern comfort with a sense of place. From
              thoughtfully appointed rooms to an inviting rooftop bar, it’s a destination for slow mornings and lively
              evenings.
            </p>
            <div className="flex gap-3">
              <Button href="#rooms">Explore Rooms</Button>
              <Button href="https://wa.me/123456789" variant="outline">WhatsApp</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section id="rooms">
        <SectionHeader title="Featured Rooms" subtitle="Comfort, light, and refined simplicity." cta={<Link href="/rooms" className="text-sm text-primary hover:underline">View all</Link>} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.slice(0, 3).map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </Section>

      <Section id="spaces" className="bg-bg-soft rounded-[2rem] border border-muted/60">
        <SectionHeader title="Explore Our Spaces" subtitle="From golden hour on the rooftop to quiet lounge corners." cta={<Link href="/gallery" className="text-sm text-primary hover:underline">See gallery</Link>} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {spaces.map((s) => (
            <Card key={s.id} className="p-4 animate-fade-in">
              <CardMedia className="mb-4 aspect-[4/3]">
                <Image src={s.image} alt={s.name} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </CardMedia>
              <CardBody className="p-0">
                <h4 className="text-lg font-semibold text-foreground">{s.name}</h4>
                <p className="text-foreground/70 text-sm">{s.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* Gallery */}
      <Section id="gallery">
        <SectionHeader title="Gallery" subtitle="A glimpse into our spaces." cta={<Link href="/gallery" className="text-sm text-primary hover:underline">Open gallery</Link>} />
        <GalleryGrid images={galleryImages} />
      </Section>

      {/* Contact / Booking */}
      <Section id="contact" className="pt-4">
        <SectionHeader title="Location & Contact" subtitle="Reach out to plan your stay." />
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <div className="rounded-2xl border border-muted/60 bg-surface p-5 animate-fade-in">
              <h4 className="font-semibold mb-2">Visit Us</h4>
              <p className="text-sm text-foreground/80">Bugesera, Rwanda</p>
            </div>
            <div className="flex gap-3">
              <Button href="https://wa.me/123456789" variant="outline">WhatsApp Booking</Button>
              <Button href="/booking" variant="primary">Full Booking Page</Button>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <h4 className="text-xl font-semibold">Quick Request</h4>
              <p className="text-sm text-foreground/70">Send your preferred dates and we’ll confirm shortly.</p>
            </div>
            <BookingForm />
          </div>
        </div>
      </Section>
    </main>
  );
}
