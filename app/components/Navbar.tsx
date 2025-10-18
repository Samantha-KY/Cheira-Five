"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/rooftop", label: "Rooftop Bar" },
  { href: "/kitchen", label: "Kitchen" },
  { href: "/gallery", label: "Gallery" },
  { href: "/booking", label: "Booking" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur border-b border-muted/50">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="Mini Hotel logo" width={32} height={32} className="h-8 w-8" />
          <span className="font-bold text-xl tracking-tight text-foreground">Cheira Five</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition hover:text-primary ${pathname === item.href ? "text-primary" : "text-foreground/80"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/booking" className="md:inline-block bg-primary text-white px-4 py-2 rounded-lg text-sm hover:brightness-95 transition">
          Book Now
        </Link>
      </div>
    </header>
  );
}
