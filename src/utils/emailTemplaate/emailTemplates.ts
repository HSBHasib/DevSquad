//  Approved Email Template with Communication Link & Detailed Info

export const getApprovedEmailTemplate = (
  name: string,
  squadName: string,
  email: string,
  communicationLink?: string
) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #eef2f6;">
    <div style="background: linear-gradient(135deg, #10B981, #059669); padding: 40px 20px; text-align: center;">
      <span style="font-size: 50px;">🎉</span>
      <h1 style="color: #ffffff; margin: 10px 0 0 0; font-size: 24px; font-weight: 700;">Application Approved!</h1>
    </div>
    <div style="padding: 40px 30px; color: #334155; line-height: 1.6;">
      <p style="font-size: 16px; margin-top: 0;">Hey <strong>${name}</strong>,</p>
      <p style="font-size: 15px;">Congratulations! We are absolutely thrilled to inform you that your application to join the squad <strong style="color: #059669;">${squadName}</strong> has been <strong>Approved</strong>! 🚀</p>
      
      <p style="font-size: 15px;">Your profile perfectly matches what we were looking for, and we believe your skills will bring immense value to our group goals.</p>

      ${
        communicationLink
          ? `
      <!-- Communication Box -->
      <div style="background-color: #f0fdf4; border-left: 4px solid #10B981; padding: 20px; margin: 25px 0; border-radius: 8px;">
        <h4 style="margin: 0 0 8px 0; color: #14532d; font-size: 15px; font-weight: 600;">🔗 Official Squad Channel</h4>
        <p style="margin: 0 0 15px 0; font-size: 14px; color: #166534;">The squad leader has set up a communication hub for teamwork and daily collaboration. Please click the button below to join the community:</p>
        <div style="text-align: center; margin: 20px 0 10px 0;">
          <a href="${communicationLink}" target="_blank" style="background-color: #10B981; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block; box-shadow: 0 4px 6px rgba(16,185,129,0.2); transition: all 0.2s ease;">Join Squad Now 💬</a>
        </div>
      </div>
      `
          : `
      <!-- Default Next Steps Box if link is missing -->
      <div style="background-color: #f0fdf4; border-left: 4px solid #10B981; padding: 20px; margin: 25px 0; border-radius: 8px;">
        <h4 style="margin: 0 0 8px 0; color: #14532d; font-size: 15px; font-weight: 600;">What's Next?</h4>
        <p style="margin: 0; font-size: 14px; color: #166534;">The squad leader will connect with you very soon with the official communication channels. Keep an eye on your portal dashboard and get ready to collaborate!</p>
      </div>
      `
      }

      <div style="margin-top: 25px; padding-top: 20px; border-top: 1px dashed #e2e8f0;">
        <p style="font-size: 14px; color: #64748b; margin: 0;"><strong>Important Notes:</strong></p>
        <ul style="font-size: 13px; color: #64748b; margin: 5px 0 0 0; padding-left: 20px;">
          <li>Be respectful and collaborate actively with fellow squad members.</li>
          <li>Check your dashboard regularly for project updates and benchmarks.</li>
        </ul>
      </div>

      <p style="font-size: 15px; margin-top: 25px; margin-bottom: 0;">Welcome aboard, let's build something awesome together!</p>
    </div>
    <div style="background-color: #f8fafc; padding: 25px; text-align: center; border-top: 1px solid #f1f5f9; font-size: 12px; color: #64748b;">
      <p style="margin: 0 0 5px 0;">This email was sent to ${email}.</p>
      <p style="margin: 0;">&copy; ${new Date().getFullYear()} Squad Portal. All rights reserved.</p>
    </div>
  </div>
`;


// Rejected Email Template
export const getRejectedEmailTemplate = (
  name: string,
  squadName: string,
  email: string
) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #eef2f6;">
    <div style="background: linear-gradient(135deg, #6B7280, #4B5563); padding: 40px 20px; text-align: center;">
      <span style="font-size: 50px;">✉️</span>
      <h1 style="color: #ffffff; margin: 10px 0 0 0; font-size: 24px; font-weight: 700;">Application Update</h1>
    </div>
    <div style="padding: 40px 30px; color: #334155; line-height: 1.6;">
      <p style="font-size: 16px; margin-top: 0;">Hello <strong>${name}</strong>,</p>
      <p style="font-size: 15px;">Thank you so much for your interest in joining <strong style="color: #4B5563;">${squadName}</strong> and taking the time to apply.</p>
      <div style="background-color: #f8fafc; border-left: 4px solid #6B7280; padding: 20px; margin: 25px 0; border-radius: 8px;">
        <p style="margin: 0; font-size: 14px; color: #475569;">Unfortunately, after careful review, we are unable to accept your application for this specific squad at this time.</p>
      </div>
      <p style="font-size: 15px;">Please don't be discouraged! There are plenty of other squads looking for members, and we highly encourage you to apply for those.</p>
      <p style="font-size: 15px; margin-bottom: 0;">We wish you all the best in your journey!</p>
    </div>
    <div style="background-color: #f8fafc; padding: 25px; text-align: center; border-top: 1px solid #f1f5f9; font-size: 12px; color: #64748b;">
      <p style="margin: 0 0 5px 0;">This email was sent to ${email}.</p>
      <p style="margin: 0;">&copy; ${new Date().getFullYear()} Squad Portal. All rights reserved.</p>
    </div>
  </div>
`;

