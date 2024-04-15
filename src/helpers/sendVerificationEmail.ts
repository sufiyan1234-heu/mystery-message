import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerficationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Mystry message Verification Code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return {
      success: true,
      message: "Verification email sent successfully",
    };
  } catch (emailerr) {
    console.error("error in email", emailerr);
    return {
      success: false,
      message: "Internal server error",
    };
  }
}
