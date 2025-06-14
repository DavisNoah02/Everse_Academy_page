// services/hunter.ts

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
  // Call your backend API instead of Hunter.io directly
  try {
    console.log('Verifying email via backend API:', email);
    
    const response = await fetch('/api/verify-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      console.error('Backend email verification error:', response.status, response.statusText);
      
      if (response.status === 429) {
        console.warn('Rate limit exceeded. Allowing form submission.');
        return { result: true, reason: 'rate_limit_exceeded' };
      }
      
      if (response.status >= 500) {
        console.warn('Server error during email verification. Allowing form submission.');
        return { result: true, reason: 'server_error' };
      }
      
      return { result: false, reason: `api_error_${response.status}` };
    }

    const data: EmailVerificationResult = await response.json();
    console.log('Email verification response:', data);

    return data;

  } catch (error) {
    console.error('Email verification error:', error);
    
    // Network errors shouldn't block form submission
    if (error instanceof TypeError && error.message.includes('fetch')) {
      console.warn('Network error during email verification. Allowing form submission.');
      return { result: true, reason: 'network_error' };
    }
    
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
    'invalid_format': 'Please enter a valid email address',
    'disposable_email': 'Disposable email addresses are not allowed',
    'blocked_email': 'This email address is blocked',
    'gibberish_email': 'Email address appears to be invalid',
    'no_mx_records': 'Email domain does not exist',
    'no_smtp_server': 'Email server is not reachable',
    'undeliverable': 'Email address cannot receive emails',
    'risky': 'Email address appears to be risky',
    'network_error': 'Unable to verify email. Please check your connection.',
    'api_error_401': 'Email verification service is temporarily unavailable',
    'api_error_429': 'Too many verification requests. Please try again later.',
    'verification_failed': 'Email verification failed. Please try again.',
  };
  
  return errorMessages[reason] || 'Email verification failed';
}