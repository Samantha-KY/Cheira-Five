import BookingForm from "../components/BookingForm";
import { Section } from "../components/ui/Section";

export default function BookingPage() {
  return (
    <main>
      <Section className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-3 text-foreground animate-slide-up">Booking</h1>
        <p className="text-foreground/70 mb-6 animate-slide-up [animation-delay:120ms]">Fill the form and we&apos;ll confirm availability as soon as possible.</p>
        <BookingForm />
        <p className="text-xs text-foreground/60 mt-4">Alternatively, integrate your provider (Cal.com/Google) later.</p>
      </Section>
    </main>
  );
}
