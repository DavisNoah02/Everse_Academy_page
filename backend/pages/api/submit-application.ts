import type { NextApiRequest, NextApiResponse } from 'next';

// Define the shape of your request body for type safety
interface FormData {
  name: string;
  email: string;
  // Add other form fields as needed
}

// Define the shape of your response data
interface SubmissionResult {
  success: boolean;
  message?: string;
  // Add other response fields as needed
}

// Add type definition for process.env if you use any env vars here
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FRONTEND_URL: string; // Used for CORS
      SENDGRID_API_KEY: string; // If you plan to send emails here
      SENDGRID_FROM_EMAIL: string; // If you plan to send emails from here
    }
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SubmissionResult>
) {
  // 1. CORS Headers - Allow frontend to access this API
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL || '*'); // Use your frontend URL
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request for CORS
  if (req.method === 'OPTIONS') {
    res.status(200).end(); // Respond with 200 OK for preflight
    return;
  }

  // Only allow POST requests for form submission
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  // Get data from request body
  const { name, email /* ... other form fields */ } = req.body as FormData;

  // --- Implement your form submission logic here ---
  // Examples:
  // - Save to database
  // - Send an email (using SendGrid, etc.)
  // - Integrate with another service (e.g., Mailchimp)

  try {
    // Example: Basic logging
    console.log('Received form submission:', { name, email });

    // Example: You might want to call another service/function here,
    // e.g., if you have a separate service for sending welcome emails.
    // Make sure to handle any errors from those services.

    // If everything is successful
    return res.status(200).json({ success: true, message: 'Form submitted successfully!' });

  } catch (error) {
    console.error('Error submitting form:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
} 