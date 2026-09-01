import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();
    if (!name || !email || !message) return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO;
    const from = process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>";
    if (!apiKey || !to) return NextResponse.json({ error: "Contact service is not configured yet." }, { status: 503 });
    const resend = new Resend(apiKey);
    await resend.emails.send({ from, to, replyTo: email, subject: `Portfolio message from ${name}`, text: `Name: ${name}\nEmail: ${email}\n\n${message}` });
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "Unable to transmit the message." }, { status: 500 }); }
}
