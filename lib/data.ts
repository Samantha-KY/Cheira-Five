export type Room = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
};

export const rooms: Room[] = [
  { id: 1, name: "Deluxe Room", price: "$120 / night", image: "/room.jpg", description: "Spacious room with city view." },
  { id: 2, name: "Suite", price: "$200 / night", image: "/room.jpg", description: "Luxury suite with private balcony." },
  { id: 3, name: "Standard Room", price: "$90 / night", image: "/room.jpg", description: "Cozy and comfortable for short stays." },
];

export const spaces = [
  { id: 1, name: "Rooftop Bar", image: "/rooftop.jpg", description: "Panoramic views and signature cocktails." },
  { id: 2, name: "Lounge", image: "/rooftop2.jpg", description: "Relax and unwind in comfort." },
  { id: 3, name: "Rooftop Counter", image: "/rooftopCounter.jpg", description: "Where culinary magic happens." },
];

export const galleryImages: string[] = [
  "/corridor.jpg",
  "/frontImage.jpg",
  "/garden.jpg",
  "/launge.jpg",
  "/rooftop.jpg",
  "/rooftop2.jpg",
];
