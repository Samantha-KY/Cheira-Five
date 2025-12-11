"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Update the WhatsApp phone here (international format without +)
const PHONE = "250782181047";

export default function WhatsAppFAB() {
  const [offsetSafe, setOffsetSafe] = useState(16);

  useEffect(() => {
    const onResize = () => {
      // Keep away from bottom bar on mobile
      const safe = Math.max(16, 16 + (window.visualViewport?.height ? window.innerHeight - (window.visualViewport.height) : 0));
      setOffsetSafe(safe);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <Link
      aria-label="Contact via WhatsApp"
      href={`https://wa.me/${PHONE}`}
      target="_blank"
      className="fixed right-4 md:right-6 rounded-full shadow-lg bg-[#25D366] text-white hover:brightness-95 active:brightness-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/40"
      style={{ bottom: offsetSafe }}
    >
      <div className="h-12 w-12 md:h-14 md:w-14 grid place-items-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.91 11.91 0 0 0 12.06 0C5.46 0 .13 5.34.13 11.94c0 2.1.55 4.16 1.6 5.98L0 24l6.26-1.65a11.86 11.86 0 0 0 5.8 1.5h.01c6.6 0 11.94-5.34 11.94-11.94 0-3.18-1.23-6.17-3.49-8.43ZM12.07 21.1h-.01c-1.84 0-3.63-.5-5.2-1.43l-.37-.22-3.72.98 1-3.63-.24-.37A9.85 9.85 0 0 1 2.2 11.94C2.2 6.95 6.99 2.17 12.06 2.17c2.64 0 5.12 1.03 6.98 2.89a9.77 9.77 0 0 1 2.9 6.89c0 6.05-4.9 11.15-9.87 11.15Zm5.7-7.4c-.31-.16-1.82-.89-2.1-1-.28-.1-.48-.15-.68.16-.2.31-.78 1-.96 1.2-.18.2-.35.23-.65.08-.31-.16-1.3-.48-2.48-1.55-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.13-.64.13-.13.31-.35.46-.52.16-.18.2-.31.31-.52.1-.2.05-.39-.02-.55-.08-.16-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.5-.18 0-.39-.02-.6-.02-.2 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.12 3.05 1.27 3.27.16.2 2.2 3.36 5.33 4.72.75.32 1.33.51 1.78.65.75.24 1.43.2 1.96.12.6-.09 1.82-.75 2.08-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.2-.6-.36Z" />
        </svg>
      </div>
    </Link>
  );
}
