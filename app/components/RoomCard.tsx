import Image from "next/image";
import { Card, CardBody, CardMedia } from "./ui/Card";

type Room = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
};

export default function RoomCard({ room }: { room: Room }) {
  return (
    <Card className="animate-fade-in">
      <CardMedia className="mb-4 aspect-[4/3]">
        <Image src={room.image} alt={room.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </CardMedia>
      <CardBody>
        <div>
          <h4 className="text-lg font-semibold text-foreground">{room.name}</h4>
          <p className="text-foreground/70 text-sm">{room.description}</p>
        </div>
      </CardBody>
    </Card>
  );
}
