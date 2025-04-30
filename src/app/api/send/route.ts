import ContactFormEmail from "@/emails/ContactFormEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function POST(req: Request) {
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

    // ✅ Pass the data into your email template
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
    return Response.json({ error: String(error) }, { status: 500 });
  }
}
