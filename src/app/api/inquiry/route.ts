import { NextResponse } from "next/server";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = inquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Please complete all required fields." },
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;
    const senderEmail = process.env.RESEND_FROM ?? "Tarakeeb <onboarding@resend.dev>";

    if (!resendApiKey || !contactEmail) {
      console.info("Inquiry received (email disabled):", parsed.data);
      return NextResponse.json({
        message: "Inquiry received. Email delivery is not configured yet.",
      });
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: senderEmail,
        to: [contactEmail],
        subject: `Tarakeeb Inquiry: ${parsed.data.name}`,
        reply_to: parsed.data.email,
        text: [
          `Name: ${parsed.data.name}`,
          `Email: ${parsed.data.email}`,
          `Phone: ${parsed.data.phone}`,
          "",
          parsed.data.message,
        ].join("\n"),
      }),
    });

    if (!emailResponse.ok) {
      return NextResponse.json(
        { message: "Unable to send inquiry right now. Please try again shortly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: "Thank you. We will be in touch shortly." });
  } catch (error) {
    console.error("Inquiry submission failed:", error);
    return NextResponse.json(
      { message: "Unexpected error. Please try again." },
      { status: 500 },
    );
  }
}
