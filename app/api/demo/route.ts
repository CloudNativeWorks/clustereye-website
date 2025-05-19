import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Nodemailer configuration - Store these securely in .env
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER || 'smtp.example.com',
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER || 'user@example.com',
    pass: process.env.EMAIL_PASSWORD || 'password',
  },
  tls: {
    // Disable SSL validation (contains security risk)
    rejectUnauthorized: process.env.EMAIL_REJECT_UNAUTHORIZED !== 'false'
  }
});

// Error object type definition
interface MailError extends Error {
  code?: string;
  responseCode?: number;
  command?: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, role, db_type, db_count, message } = body;
    
    // Form validation
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Name, email, and company fields are required' },
        { status: 400 }
      );
    }
    
    // Check if database types is selected
    if (!db_type || (Array.isArray(db_type) && db_type.length === 0)) {
      return NextResponse.json(
        { error: 'Please select at least one database type' },
        { status: 400 }
      );
    }
    
    // Check if database count is selected
    if (!db_count) {
      return NextResponse.json(
        { error: 'Please select a database count range' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Log SMTP settings (hiding password)
    console.log('SMTP Configuration for demo request:', {
      host: process.env.EMAIL_SERVER || 'smtp.example.com',
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER || 'user@example.com',
        pass: process.env.EMAIL_PASSWORD ? '******' : 'not set',
      },
    });

    // Prepare database types as a string
    const dbTypesString = Array.isArray(db_type) ? db_type.join(', ') : db_type;

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'website@clustereye.com',
      to: process.env.EMAIL_TO || 'info@clustereye.com',
      subject: `Demo Request: ${name} from ${company}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Company: ${company}
Phone: ${phone || 'Not specified'}
Role/Position: ${role || 'Not specified'}
Database Types: ${dbTypesString}
Database Count: ${db_count}

Additional Information:
${message || 'None provided'}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #6b46c1;">ClusterEye Demo Request</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Company:</strong> ${company}</p>
  <p><strong>Phone:</strong> ${phone || 'Not specified'}</p>
  <p><strong>Role/Position:</strong> ${role || 'Not specified'}</p>
  <p><strong>Database Types:</strong> ${dbTypesString}</p>
  <p><strong>Database Count:</strong> ${db_count}</p>
  <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #6b46c1;">
    <p style="margin-top: 0;"><strong>Additional Information:</strong></p>
    <p style="white-space: pre-line;">${message || 'None provided'}</p>
  </div>
</div>
      `
    };

    try {
      // Send email if configuration is valid
      if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
        await transporter.sendMail(mailOptions);
        console.log('Demo request email sent successfully:', {
          to: mailOptions.to,
          subject: mailOptions.subject,
        });
      } else {
        // Just log if configuration is missing (for dev/testing)
        console.log('Demo request email sending simulated:', {
          to: mailOptions.to,
          subject: mailOptions.subject,
          note: 'EMAIL_USER or EMAIL_PASSWORD variables not set',
        });
      }
      
      // Success response
      return NextResponse.json(
        { success: true, message: 'Your demo request has been successfully sent' },
        { status: 200 }
      );
    } catch (error) {
      const emailError = error as MailError;
      console.error('Demo request email sending detailed error:', emailError);
      
      // Return error message and details
      return NextResponse.json(
        { 
          error: 'An error occurred while sending your demo request', 
          details: emailError.message || 'Unknown error',
          code: emailError.code || 'UNKNOWN',
          responseCode: emailError.responseCode || null,
          command: emailError.command || null
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Demo form submission detailed error:', error);
    
    return NextResponse.json(
      { 
        error: 'An error occurred while processing your demo request',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 