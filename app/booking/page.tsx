import BookingForm from "../components/BookingForm";

export default function BookingPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Booking</h1>
      <p className="text-gray-600 mb-6">Fill the form and we&apos;ll confirm availability as soon as possible.</p>
      <BookingForm />
      <p className="text-xs text-gray-500 mt-4">Alternatively, integrate your provider (Cal.com/Google) later.</p>
    </main>
  );
}
