interface HunterResponse {
  data: {
    result: 'deliverable' | 'undeliverable' | 'risky' | 'unknown';
    score: number;
    email: string;
    regexp: boolean;
    gibberish: boolean;
    disposable: boolean;
    webmail: boolean;
    mx_records: boolean;
    smtp_server: boolean;
    smtp_check: boolean;
    accept_all: boolean;
    block: boolean;
  };
  meta: {
    params: {
      email: string;
    };
  };
}

export interface EmailVerificationResult {
  result: boolean;
  reason?: string;
  score?: number;
  details?: {
    disposable: boolean;
    webmail: boolean;
    mx_records: boolean;
    smtp_server: boolean;
    smtp_check: boolean;
  };
}

export async function verifyEmailHunter(email: string): Promise<EmailVerificationResult> {
  try {
    // console.log('Verifying email via backend API:', email);
    
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/verify-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      console.error('Backend email verification error:', response.status, response.statusText);
      
      // Only allow submission on rate limit or server errors
      if (response.status === 429) {
        console.warn('Rate limit exceeded. Allowing form submission.');
        return { result: true, reason: 'rate_limit_exceeded' };
      }
      
      if (response.status >= 500) {
        console.warn('Server error during email verification. Allowing form submission.');
        return { result: true, reason: 'server_error' };
      }
      
      // Block submission on all other errors
      return { result: false, reason: `api_error_${response.status}` };
    }

    const data: EmailVerificationResult = await response.json();
    console.log('Email verification response:', data);

    // Only allow submission if email is valid
    if (!data.result) {
      return { result: false, reason: data.reason || 'verification_failed' };
    }

    return data;

  } catch (error) {
    console.error('Email verification error:', error);
    
    // Only allow network errors to pass through
    if (error instanceof TypeError && error.message.includes('fetch')) {
      console.warn('Network error during email verification. Allowing form submission.');
      return { result: true, reason: 'network_error' };
    }
    
    // Block submission on all other errors
    return { result: false, reason: 'verification_failed' };
  }
}

// Alternative: Simple email verification without external API
export function verifyEmailBasic(email: string): EmailVerificationResult {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    return { result: false, reason: 'invalid_format' };
  }
  
  // Check for common disposable email domains
  const disposableDomains = [
    '10minutemail.com',
    'tempmail.org',
    'guerrillamail.com',
    'mailinator.com',
    'yopmail.com',
    'throwaway.email',
    'temp-mail.org',
  ];
  
  const domain = email.split('@')[1]?.toLowerCase();
  if (disposableDomains.includes(domain)) {
    return { result: false, reason: 'disposable_email' };
  }
  
  return { result: true, reason: 'valid_format' };
}

// Helper function to get user-friendly error messages
export function getEmailErrorMessage(reason: string): string {
  const errorMessages: { [key: string]: string } = {
    'invalid_format': 'Please enter a valid email address (e.g., name@domain.com)',
    'disposable_email': 'Sorry, temporary email addresses are not accepted. Please use your permanent email address.',
    'blocked_email': 'This email address has been blocked. Please use a different email address.',
    'gibberish_email': 'This email address appears to be invalid. Please check and try again.',
    'no_mx_records': 'This email domain does not exist. Please check your email address.',
    'no_smtp_server': 'Unable to verify this email address. Please use a different email provider.',
    'undeliverable': 'This email address cannot receive messages. Please use a different email address.',
    'risky': 'This email address appears to be risky. Please use a different email address.',
    'network_error': 'Unable to verify your email. Please check your internet connection and try again.',
    'api_error_401': 'Email verification service is temporarily unavailable. Please try again in a few minutes.',
    'api_error_429': 'Too many verification attempts. Please wait a moment and try again.',
    'verification_failed': 'Unable to verify your email. Please try again or use a different email address.',
    'method_not_allowed': 'Invalid request method. Please try again.',
    'invalid_email_parameter': 'Please enter a valid email address.',
    'service_unavailable': 'Email verification service is currently unavailable. Please try again later.',
  };
  
  return errorMessages[reason] || 'Unable to verify your email. Please try again.';
}