type Room = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
};

export default function RoomCard({ room }: { room: Room }) {
  return (
    <div className="group bg-surface rounded-2xl shadow hover:shadow-lg transition p-4 border border-muted/60">
      <img src={room.image} alt={room.name} className="rounded-xl mb-4 aspect-[4/3] object-cover w-full" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-lg font-semibold text-foreground">{room.name}</h4>
          <p className="text-foreground/70 text-sm">{room.description}</p>
        </div>
        <span className="text-primary font-semibold whitespace-nowrap">{room.price}</span>
      </div>
    </div>
  );
}
