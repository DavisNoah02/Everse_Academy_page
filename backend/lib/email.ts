// import sgMail from '@sendgrid/mail';

// if (!process.env.SENDGRID_API_KEY) {
//   throw new Error('SENDGRID_API_KEY environment variable is not set');
// }

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// interface WelcomeEmailData {
//   name: string;
//   email: string;
//   interest: string;
// }

// export async function sendWelcomeEmail(data: WelcomeEmailData) {
//   const msg = {
//     to: data.email,
//     from: process.env.SENDGRID_FROM_EMAIL!, // Verified sender email
//     subject: 'Welcome to Everse Academy Beta Program! 🎉',
//     html: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//         <h1 style="color: #2563eb;">Welcome to Everse Academy!</h1>
        
//         <p>Dear ${data.name},</p>
        
//         <p>Thank you for joining our Beta Program! We're excited to have you on board.</p>
        
//         <p>Your application details:</p>
//         <ul>
//           <li>Name: ${data.name}</li>
//           <li>Email: ${data.email}</li>
//           <li>Area of Interest: ${data.interest}</li>
//         </ul>
        
//         <p>What's next?</p>
//         <ol>
//           <li>We'll review your application</li>
//           <li>You'll receive access instructions within 24-48 hours</li>
//           <li>Start your learning journey with us!</li>
//         </ol>
        
//         <p>If you have any questions, feel free to reply to this email.</p>
        
//         <p>Best regards,<br>The Everse Academy Team</p>
        
//         <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
//           <p>This is an automated message, please do not reply directly to this email.</p>
//         </div>
//       </div>
//     `,
//   };

//   try {
//     await sgMail.send(msg);
//     console.log('Welcome email sent successfully');
//     return true;
//   } catch (error) {
//     console.error('Error sending welcome email:', error);
//     return false;
//   }
// } 