"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#rooms", label: "Rooms" },
  { href: "/#spaces", label: "Spaces" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Booking" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 80) setHidden(y > lastY);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);
  return (
    <header className={`sticky top-0 z-40 border-b border-muted/50 transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"} bg-surface/80 backdrop-blur-xl`}>
      <div className="mx-auto max-w-6xl px-4 py-3 md:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="Mini Hotel logo" width={36} height={36} className="h-9 w-9 rounded-lg shadow-sm" />
          <span className="font-bold text-lg md:text-xl tracking-tight text-foreground">Cheira Five</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm transition hover:text-primary ${pathname === item.href ? "text-primary" : "text-foreground/80"}`}
            >
              {item.label}
              {pathname === item.href ? (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-primary rounded-full" />
              ) : null}
            </Link>
          ))}
        </nav>
        <Link href="/booking" className="hidden md:inline-flex bg-primary text-white px-5 py-2.5 rounded-xl text-sm hover:brightness-95 shadow-sm transition">
          Book Now
        </Link>
      </div>
    </header>
  );
}
