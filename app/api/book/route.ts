import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  // TODO: Integrate real provider or email sending. For now, log and return success.
  console.log("Booking request:", data);
  return NextResponse.json({ ok: true });
}
