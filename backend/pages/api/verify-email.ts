import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailVerificationResult } from '../../lib/types';

// Add type definition for process.env
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HUNTER_API_KEY: string;
      FRONTEND_URL: string;
    }
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EmailVerificationResult>
) {
   // 1. CORS Headers - Allow frontend to access this API
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
   //  Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ result: false, reason: 'method_not_allowed' });
  }

  // Get email from request body
  const { email } = req.body;

    // Validate email parameter
  if (!email || typeof email !== 'string') {
    return res.status(400).json({ result: false, reason: 'invalid_email_parameter' });
  }

  // Get API key from server environment variables (secure)
  const apiKey = process.env.HUNTER_API_KEY;

  if (!apiKey) {
    console.error('Hunter.io API key not configured');
    return res.status(500).json({ result: false, reason: 'service_unavailable' });
  }

  try {
    console.log('Verifying email with Hunter.io:', email);
    
    const response = await fetch(
      `https://api.hunter.io/v2/email-verifier?email=${encodeURIComponent(email)}&api_key=${apiKey}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      }
    );
      // Handle Hunter.io API errors
    if (!response.ok) {
      //console.error('Hunter.io API error:', response.status, response.statusText);
      
      if (response.status === 401) {
        return res.status(500).json({ result: false, reason: 'invalid_api_key' });
      }
      
      if (response.status === 429) {
        return res.status(429).json({ result: false, reason: 'rate_limit_exceeded' });
      }
      
      return res.status(500).json({ result: false, reason: `api_error_${response.status}` });
    }

    const data = await response.json();
    //console.log('Hunter.io response:', data);
    const { result, score, regexp, gibberish, disposable, webmail, mx_records, smtp_server, smtp_check, accept_all, block } = data.data;

    // Determine if email is valid based on Hunter.io result
    const isValid = result === 'deliverable' || (result === 'risky' && score > 50);
    
    // Provide detailed reason for invalid emails
    let reason: string = result;
    if (!isValid) {
      if (block) reason = 'blocked_email';
      else if (disposable) reason = 'disposable_email';
      else if (gibberish) reason = 'gibberish_email';
      else if (!regexp) reason = 'invalid_format';
      else if (!mx_records) reason = 'no_mx_records';
      else if (!smtp_server) reason = 'no_smtp_server';
      else reason = result;
    }



    //  Send response back to frontend
    return res.status(200).json({
      result: isValid,
      reason,
      score,
      details: {
        disposable,
        webmail,
        mx_records,
        smtp_server,
        smtp_check
      }
    });

  } catch (error) {
    // other errors
    console.error('Hunter.io verification error:', error);
    return res.status(500).json({ result: false, reason: 'verification_failed' });
  }
} 