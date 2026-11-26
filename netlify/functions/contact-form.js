const nodemailer = require('nodemailer');
const multiparty = require('multiparty');

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse multipart form data
    const form = new multiparty.Form();
    
    const parseForm = () => {
      return new Promise((resolve, reject) => {
        form.parse(event, (err, fields, files) => {
          if (err) reject(err);
          else resolve({ fields, files });
        });
      });
    };

    const { fields, files } = await parseForm();

    // Extract form fields
    const firstName = fields.firstName?.[0] || '';
    const lastName = fields.lastName?.[0] || '';
    const phone = fields.phone?.[0] || '';
    const email = fields.email?.[0] || '';
    const enquiry = fields.enquiry?.[0] || '';

    // Validate required fields
    if (!firstName || !lastName || !phone || !email || !enquiry) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'All fields are required' })
      };
    }

    // Check for email configuration
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT || '587';
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_EMAIL || 'sales@tasmaneng.co.nz';

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error('Missing SMTP configuration');
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          error: 'Email service not configured. Please contact us directly at sales@tasmaneng.co.nz' 
        })
      };
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: smtpPort === '465',
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    // Prepare email
    const mailOptions = {
      from: smtpUser,
      to: toEmail,
      replyTo: email,
      subject: `New Enquiry from ${firstName} ${lastName} - Tasman Engineering Website`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Enquiry:</strong></p>
        <p>${enquiry.replace(/\n/g, '<br>')}</p>
        ${files.attachments ? '<p><strong>Attachments:</strong> See attached files</p>' : ''}
        <hr>
        <p style="color: #666; font-size: 12px;">This enquiry was submitted via the Tasman Engineering website contact form.</p>
      `,
      attachments: []
    };

    // Add attachments if present
    if (files.attachments) {
      const attachmentFiles = Array.isArray(files.attachments) ? files.attachments : [files.attachments];
      
      for (const file of attachmentFiles) {
        mailOptions.attachments.push({
          filename: file.originalFilename,
          path: file.path
        });
      }
    }

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Thank you for your enquiry! We will get back to you soon.' 
      })
    };

  } catch (error) {
    console.error('Error processing form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to send enquiry. Please try again or email us directly at sales@tasmaneng.co.nz' 
      })
    };
  }
};
