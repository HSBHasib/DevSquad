import { NextResponse } from "next/server";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

export async function POST(req: Request) {
  // Check if the environment variable is successfully loaded
  if (!apiKey) {
    console.error("CRITICAL: RESEND_API_KEY is not defined in .env");
    return NextResponse.json(
      { success: false, error: "Server environment key configuration missing." }, 
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { fullName, email, inquiryType, message } = await req.json();

    // For Developer Email Formating Design
    await resend.emails.send({
      from: "DevSquad <onboarding@resend.dev>",
      to: ["cr7corono77@gmail.com"],
      subject: `DevSquad ${inquiryType} Inquiry - ${fullName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 20px; background-color: #f8fafc; color: #1e293b; max-width: 500px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px;">
          
          <!-- Header -->
          <div style="border-bottom: 1px solid #e2e8f0; padding-bottom: 12px; margin-bottom: 16px;">
            <h3 style="color: #4f46e5; margin: 0; font-size: 16px; font-weight: 600; tracking-spacing: -0.2px;">DevSquad | Client Inquiry Received</h3>
            <p style="margin: 4px 0 0 0; font-size: 12px; color: #64748b;">A new business request has been generated via web channel.</p>
          </div>
          
          <!-- Info Grid -->
          <div style="background: #ffffff; padding: 12px 14px; border-radius: 8px; border: 1px solid #f1f5f9; font-size: 13px; line-height: 1.5;">
            <div style="margin-bottom: 6px;"><strong>Name:</strong> <span style="color: #334155;">${fullName}</span></div>
            <div style="margin-bottom: 6px;"><strong>Email:</strong> <span style="color: #334155;">${email}</span></div>
            <div><strong>Type:</strong> <span style="color: #4f46e5; font-weight: 500;">${inquiryType}</span></div>
          </div>
          
          <!-- Message -->
          <div style="margin-top: 16px;">
            <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 6px;">Message</div>
            <div style="white-space: pre-wrap; color: #334155; background-color: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0; line-height: 1.5; font-size: 13px;">${message}</div>
          </div>

        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Resend Execution Crash Log:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Internal dispatch pipeline failure." }, 
      { status: 500 }
    );
  }
}
