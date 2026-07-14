"use server";

import nodemailer from "nodemailer";

// Transporter Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

interface ContactFormInputs {
  fullName: string;
  email: string;
  inquiryType: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormInputs) {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    return {
      success: false,
      error: "Server environment email configuration missing.",
    };
  }

  try {
    const { fullName, email, inquiryType, message } = data;

    // Developer | SupportTeam
    const adminMailOptions = {
      from: `"DevSquad Operations" <${emailUser}>`,
      to: emailUser,
      subject: `🚨 [${inquiryType.toUpperCase()}] New Project Pipeline From ${fullName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background-color: #FAFAFA; padding: 40px 20px; color: #1E293B; max-width: 600px; margin: 0 auto; border-radius: 20px; border: 1px solid #E2E8F0; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);">
          
          <!-- Top Accent Line -->
          <div style="height: 4px; background: linear-gradient(90deg, #6366F1 0%, #3B82F6 100%); border-radius: 10px 10px 0 0; margin: -40px -20px 30px -20px;"></div>

          <!-- Header Section -->
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="display: inline-block; background-color: rgba(99, 102, 241, 0.06); border: 1px solid rgba(99, 102, 241, 0.15); padding: 6px 16px; border-radius: 99px; margin-bottom: 12px;">
              <span style="font-size: 11px; font-weight: 700; color: #4F46E5; letter-spacing: 1.5px; text-transform: uppercase;">⚠️ System Alert: New Lead</span>
            </div>
            <h2 style="color: #0F172A; font-size: 22px; font-weight: 800; margin: 0; letter-spacing: -0.5px;">DevSquad Core Portal</h2>
            <p style="color: #64748B; font-size: 13px; margin: 6px 0 0 0;">An external transmission has breached the contact vector.</p>
          </div>

          <!-- Metadata Section -->
          <div style="background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-size: 11px; color: #64748B; text-transform: uppercase; letter-spacing: 1px; width: 35%; font-weight: 600;">Client Name</td>
                <td style="padding: 10px 0; font-size: 14px; color: #0F172A; font-weight: 600;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-size: 11px; color: #64748B; text-transform: uppercase; letter-spacing: 1px; border-top: 1px solid #F1F5F9; font-weight: 600;">Email Context</td>
                <td style="padding: 10px 0; font-size: 14px; border-top: 1px solid #F1F5F9;">
                  <a href="mailto:${email}" style="color: #4F46E5; text-decoration: none; font-weight: 600;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-size: 11px; color: #64748B; text-transform: uppercase; letter-spacing: 1px; border-top: 1px solid #F1F5F9; font-weight: 600;">Inquiry Class</td>
                <td style="padding: 10px 0; border-top: 1px solid #F1F5F9;">
                  <span style="background-color: rgba(99, 102, 241, 0.08); color: #4F46E5; padding: 3px 10px; border-radius: 6px; font-size: 11px; font-weight: 700; border: 1px solid rgba(99, 102, 241, 0.15); text-transform: uppercase;">
                    ${inquiryType}
                  </span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-size: 11px; color: #64748B; text-transform: uppercase; letter-spacing: 1px; border-top: 1px solid #F1F5F9; font-weight: 600;">Timestamp</td>
                <td style="padding: 10px 0; font-size: 13px; color: #64748B; border-top: 1px solid #F1F5F9;">
                  ${new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka", hour12: true })} (BST)
                </td>
              </tr>
            </table>
          </div>

          <!-- Message Payload -->
          <div style="margin-bottom: 25px;">
            <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: #64748B; letter-spacing: 1.5px; margin-bottom: 8px; padding-left: 4px;">Message Payload</div>
            <div style="white-space: pre-wrap; color: #334155; background-color: #FFFFFF; padding: 20px; border-radius: 12px; border: 1px solid #E2E8F0; line-height: 1.6; font-size: 14px; border-left: 4px solid #4F46E5;">${message}</div>
          </div>

          <!-- Quick Action Button -->
          <div style="text-align: center; margin-bottom: 20px;">
            <a href="mailto:${email}?subject=Re: Your Inquiry to DevSquad - ${inquiryType}" style="display: inline-block; background: linear-gradient(90deg, #4F46E5 0%, #3B82F6 100%); color: #FFFFFF; font-weight: 700; font-size: 13px; text-decoration: none; padding: 14px 28px; border-radius: 10px; box-shadow: 0 4px 14px rgba(79, 70, 229, 0.25); text-transform: uppercase; letter-spacing: 1px;">
              ⚡ Quick Reply Channel
            </a>
          </div>

          <!-- Footer/Security Stamp -->
          <div style="border-top: 1px dashed #E2E8F0; padding-top: 20px; text-align: center;">
            <p style="margin: 0; font-size: 11px; color: #94A3B8; letter-spacing: 0.5px; text-transform: uppercase;">
              DevSquad Ops Sec-Shield Activated &copy; ${new Date().getFullYear()}
            </p>
          </div>
        </div>
      `,
    };

    // User Response Email
    const clientMailOptions = {
      from: `"DevSquad Support" <${emailUser}>`,
      to: email,
      subject: `We've received your query, ${fullName}!`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; padding: 25px; background-color: #fafafa; color: #2d3748; max-width: 550px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
          <div style="text-align: center; padding-bottom: 10px;">
            <span style="font-size: 40px;">⚡</span>
          </div>

          <div style="text-align: center; margin-bottom: 25px;">
            <h2 style="color: #4f46e5; margin: 0; font-size: 22px; font-weight: 700;">Thank You for Reaching Out!</h2>
            <p style="margin: 6px 0 0 0; font-size: 14px; color: #718096;">Your transmission has safely breached our network.</p>
          </div>

          <div style="background-color: #ffffff; padding: 20px; border-radius: 12px; border: 1px solid #edf2f7; font-size: 14px; line-height: 1.6; color: #4a5568;">
            <p style="margin-top: 0;">Hi <strong>${fullName}</strong>,</p>
            <p>We wanted to let you know that we have successfully received your <strong>${inquiryType}</strong> inquiry.</p>
            
            <div style="background-color: #f7fafc; padding: 12px 15px; border-left: 4px solid #4f46e5; margin: 15px 0; border-radius: 4px; font-style: italic; font-size: 13px; color: #4a5568;">
              "Our engineering and management desks are analyzing your workflow sync request. We usually respond within 12-24 hours."
            </div>

            <p style="margin-bottom: 0;">If you have any extra documentation or updates to append, simply reply directly to this email stream.</p>
          </div>

          <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #a0aec0; border-top: 1px solid #edf2f7; padding-top: 20px;">
            <p style="margin: 0 0 4px 0; font-weight: 600; color: #718096;">DevSquad Core Infrastructure</p>
            <p style="margin: 0;">&copy; ${new Date().getFullYear()} DevSquad Portal. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    // Email Send
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions),
    ]);

    return { success: true };
  } catch (error: any) {
    console.error("Nodemailer Action Crash Log:", error);
    return {
      success: false,
      error: error?.message || "Internal dispatch pipeline failure.",
    };
  }
}
