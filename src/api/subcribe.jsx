import { Resend } from "@resend/node";

const resend = new Resend("YOUR_RESEND_API_KEY");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      // Send email using Resend
      await resend.emails.send({
        from: "no-reply@everseacademy.com",
        to: email,
        subject: "Welcome to Everse Academy!",
        html: `<p>Thank you for subscribing to Everse Academy. We'll keep you updated with the latest news and updates!</p>`,
      });

      return res.status(200).json({ message: "Subscription successful" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to subscribe" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}