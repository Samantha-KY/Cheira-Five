import RoomCard from "../components/RoomCard";
import { rooms } from "../../lib/data";
import { Section } from "../components/ui/Section";

export default function RoomsPage() {
  return (
    <main>
      <Section>
        <h1 className="text-3xl font-bold mb-3 text-foreground animate-slide-up">Our Rooms</h1>
        <p className="text-foreground/70 mb-8 animate-slide-up [animation-delay:120ms]">Choose from our comfortable selection tailored for every traveler.</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </Section>
    </main>
  );
}
