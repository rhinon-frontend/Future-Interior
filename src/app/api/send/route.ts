import ContactFormEmail from "@/emails/ContactFormEmail";
import { Resend } from "resend";

export async function POST(req: Request) {
  if (!process.env.NEXT_RESEND_API_KEY) {
    console.error("❌ NEXT_RESEND_API_KEY is missing");
    return Response.json({ error: "Missing API key" }, { status: 500 });
  }

  const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

  try {
    const body = await req.json();
    const {
      full_name,
      email,
      phone_number,
      bhk,
      location,
      floor_plan_url,
      additional_notes,
      preferences,
    } = body;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "frontend@rhinontech.com",
      subject: "New Interior Design Estimate Request",
      react: ContactFormEmail({
        full_name,
        email,
        phone_number,
        bhk,
        location,
        floor_plan_url,
        additional_notes,
        preferences,
      }),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
