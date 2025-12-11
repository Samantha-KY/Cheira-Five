import { NextResponse } from "next/server";
import { sendBookingEmail } from "../../../lib/email";

export async function POST(req: Request) {
  const data = await req.json();
  const {
    name,
    email,
    checkin,
    checkout,
    guests,
    roomType,
    notes,
  } = data || {};

  if (!name || !email || !checkin || !checkout) {
    return NextResponse.json({ ok: false, message: "Missing required fields" }, { status: 400 });
  }

  const html = `
    <div>
      <h2>New Room Booking (Pending)</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Room:</strong> ${roomType || "N/A"}</p>
      <p><strong>Guests:</strong> ${guests || 1}</p>
      <p><strong>Check-in:</strong> ${checkin}</p>
      <p><strong>Check-out:</strong> ${checkout}</p>
      <p><strong>Notes:</strong> ${notes || ""}</p>
      <p>Status: <strong>PENDING</strong></p>
    </div>
  `;

  try {
    await sendBookingEmail({
      to: "mureraksamantha@gmail.com",
      from: process.env.SMTP_FROM || "no-reply@cheira-five.local",
      subject: "New Room Booking - Pending",
      html,
    });
  } catch (err: any) {
    console.error("Email send error:", err);
    const message = err?.message || "Failed to send notification email";
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, status: "pending" });
}
