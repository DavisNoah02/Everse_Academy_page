export interface HunterResponse {
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