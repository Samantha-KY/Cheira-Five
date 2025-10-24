"use client";
import { useState } from "react";

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData.entries())),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (res.ok) setResult("Booking request received. We'll confirm shortly.");
      else setResult(data.message || "Something went wrong.");
    } catch {
      setResult("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4 bg-surface p-6 rounded-2xl shadow border border-muted/60">
      <div className="grid md:grid-cols-2 gap-4">
        <input name="name" required placeholder="Full name" className="border border-muted rounded-lg px-3 py-2 bg-bg text-foreground" />
        <input type="email" name="email" required placeholder="Email" className="border border-muted rounded-lg px-3 py-2 bg-bg text-foreground" />
        <input type="date" name="checkin" required className="border border-muted rounded-lg px-3 py-2 bg-bg text-foreground" />
        <input type="date" name="checkout" required className="border border-muted rounded-lg px-3 py-2 bg-bg text-foreground" />
        <input type="number" name="guests" min={1} defaultValue={1} className="border border-muted rounded-lg px-3 py-2 bg-bg text-foreground" />
        <select name="roomType" className="border border-muted rounded-lg px-3 py-2 bg-bg text-foreground">
          <option>Deluxe Room</option>
          <option>Suite</option>
          <option>Standard Room</option>
        </select>
      </div>
      <textarea name="notes" placeholder="Notes (optional)" className="border border-muted rounded-lg px-3 py-2 w-full min-h-24 bg-bg text-foreground" />
      <button disabled={loading} className="bg-primary text-white px-4 py-2 rounded-lg hover:brightness-95 disabled:opacity-50">
        {loading ? "Submitting..." : "Request Booking"}
      </button>
      {result && <p className="text-sm text-foreground/70">{result}</p>}
    </form>
  );
}
