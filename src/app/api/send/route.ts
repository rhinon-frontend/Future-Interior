// app/api/send-email/route.ts

import { ContactFormEmail } from "@/emails/ContactFormEmail";
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

    // Admin email
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: "Future Interior <onboarding@resend.dev>",
      to: "frontend@rhinontech.com", // your email
      subject: "🚀 New Estimate Request",
      react: await ContactFormEmail({
        full_name,
        email,
        phone_number,
        bhk,
        location,
        preferences,
        floor_plan_url,
        additional_notes,
      }),
    });

    if (adminError) {
      return Response.json({ error: adminError }, { status: 500 });
    }

    // Auto-reply to user
    const { error: userError } = await resend.emails.send({
      from: "Future Interior <onboarding@resend.dev>",
      to: [email],
      subject: "✅ We've received your request!",
      html: `
        <p>Hi ${full_name},</p>
        <p>Thanks for reaching out to <strong>Future Interior</strong>.</p>
        <p>We’ve received your request and our team will contact you soon.</p>
        <p><strong>Your Details:</strong></p>
        <ul>
          <li>BHK: ${bhk}</li>
          <li>Location: ${location}</li>
          <li>Preferences: ${preferences}</li>
        </ul>
        <br/>
        <p>Best regards,<br/>The Future Interior Team</p>
      `,
    });

    if (userError) {
      return Response.json({ error: userError }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
