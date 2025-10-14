export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="font-semibold mb-2">Mini Hotel</h4>
          <p className="text-sm/6 opacity-90">A cozy stay with a rooftop bar and delightful kitchen.</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2 text-accent">Contact</h5>
          <p className="text-sm/6">Address: Your street, City</p>
          <p className="text-sm/6">Phone: +XXX XXX XXXX</p>
          <p className="text-sm/6">Email: info@minihotel.com</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2 text-accent">Hours</h5>
          <p className="text-sm/6">Reception: 24/7</p>
          <p className="text-sm/6">Rooftop Bar: 5pm - 1am</p>
          <p className="text-sm/6">Kitchen: 7am - 10pm</p>
        </div>
      </div>
      <div className="text-center text-xs border-t border-white/15 py-4">© {new Date().getFullYear()} Mini Hotel. All rights reserved.</div>
    </footer>
  );
}
