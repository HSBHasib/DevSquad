"use server"; 

import nodemailer from "nodemailer";
import { serverMutation } from "../core/server";
import { ApplicationStatus, UpdateStatusPayload, UpdateStatusResponse } from "@/utils/DBResponce";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

export const updateApplicationStatus = async (
  id: string,
  status: ApplicationStatus,
): Promise<UpdateStatusResponse> => {
  return serverMutation<UpdateStatusResponse, UpdateStatusPayload>(
    `/api/squads/${id}`,
    { status },
    "PATCH"
  );
};

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async ({ to, subject, html }: SendEmailParams) => {
  try {
    const mailOptions = {
      from: `"Squad Team" <${process.env.EMAIL_USER}>`, 
      to,
      subject,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    
    console.log("Nodemailer: Email sent successfully! MessageID:", info.messageId);
    return { success: true };
  } catch (err: any) {
    console.error("Error sending email via Nodemailer:", err);
    return { success: false, error: err.message || "Unknown error" };
  }
};


