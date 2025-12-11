export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="mx-auto max-w-6xl px-4 py-12 flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-10 text-center md:text-left">
        <div className="flex-1">
          <h4 className="font-semibold mb-2">Cheira Five</h4>
          <p className="text-sm/6 opacity-90">A cozy stay with a rooftop bar and delightful kitchen.</p>
        </div>
        <div className="flex-1">
          <h5 className="font-semibold mb-2 text-accent">Contact</h5>
          <p className="text-sm/6">Address: Bugesera, Rwanda</p>
          <p className="text-sm/6">Phone: +250 782 181 047</p>
          <p className="text-sm/6">Email: cheirafive@gmail.com</p>
        </div>
        <div className="flex-1">
          <h5 className="font-semibold mb-2 text-accent">Hours</h5>
          <p className="text-sm/6">Reception: 24/7</p>
          <p className="text-sm/6">Rooftop Bar: 5pm - 1am</p>
          <p className="text-sm/6">Kitchen: 7am - 8pm</p>
        </div>
      </div>
      <div className="text-center text-xs border-t border-white/15 py-4">© {new Date().getFullYear()} Cheira Five. All rights reserved.</div>
    </footer>
  );
}
