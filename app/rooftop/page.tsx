export default function RooftopPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Rooftop Bar</h1>
      <p className="text-foreground/70 mb-6">Enjoy the skyline with curated cocktails and live ambiance.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <img src="/images/rooftop-bar.jpg" alt="Rooftop" className="rounded-2xl w-full object-cover aspect-[16/9]" />
        <div className="bg-surface p-6 rounded-2xl shadow border border-muted/60">
          <h3 className="font-semibold mb-2 text-foreground">Highlights</h3>
          <ul className="list-disc ml-5 text-sm text-foreground/80 space-y-1">
            <li>Sunset views</li>
            <li>Signature cocktails</li>
            <li>Live DJ on weekends</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
