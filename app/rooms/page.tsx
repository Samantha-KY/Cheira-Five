import RoomCard from "../components/RoomCard";
import { rooms } from "../../lib/data";

export default function RoomsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Our Rooms</h1>
      <p className="text-foreground/70 mb-8">Choose from our comfortable selection tailored for every traveler.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </main>
  );
}
