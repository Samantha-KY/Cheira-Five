export type Room = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
};

export const rooms: Room[] = [
  { id: 1, name: "Deluxe Room", price: "$120 / night", image: "/images/deluxe-room.jpg", description: "Spacious room with city view." },
  { id: 2, name: "Suite", price: "$200 / night", image: "/images/suite.jpg", description: "Luxury suite with private balcony." },
  { id: 3, name: "Standard Room", price: "$90 / night", image: "/images/standard-room.jpg", description: "Cozy and comfortable for short stays." },
];

export const spaces = [
  { id: 1, name: "Rooftop Bar", image: "/images/rooftop-bar.jpg", description: "Panoramic views and signature cocktails." },
  { id: 2, name: "Lounge", image: "/images/lounge.jpg", description: "Relax and unwind in comfort." },
  { id: 3, name: "Kitchen", image: "/images/kitchen.jpg", description: "Where culinary magic happens." },
];

export const galleryImages: string[] = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
];
