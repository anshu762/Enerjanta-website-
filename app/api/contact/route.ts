import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please provide a valid email address"),
  ward: z.string().max(100).optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Server-side validation
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form submission",
          details: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, ward, message } = result.data;

    // Log the submission to server console
    console.log("==========================================");
    console.log("[Enerjanta Contact Form] New Submission:");
    console.log(`Name:    ${name}`);
    console.log(`Email:   ${email}`);
    console.log(`Ward:    ${ward || "Not specified"}`);
    console.log(`Message: ${message}`);
    console.log(`Time:    ${new Date().toISOString()}`);
    console.log("==========================================");

    // TODO: Wire up a transactional email service (e.g. Resend / SendGrid / Postmark)
    // Example:
    // await resend.emails.send({
    //   from: "Enerjanta <notifications@enerjanta.org>",
    //   to: "hello@enerjanta.org",
    //   subject: `New Citizen Inquiry from ${name} (${ward || "General"})`,
    //   text: message,
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for getting involved! Your message has been received.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your message.",
      },
      { status: 500 }
    );
  }
}
