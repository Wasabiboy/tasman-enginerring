# Contact Form with File Uploads - Setup Instructions

## Overview
The contact form now supports file attachments (drawings) up to 10MB total. Files are sent via email to sales@tasmaneng.co.nz using a Netlify serverless function.

## Required Environment Variables

You need to configure the following environment variables in your Netlify dashboard:

### Navigate to: 
Site Settings → Environment Variables → Add a variable

### Required Variables:

1. **SMTP_HOST** (required)
   - Your SMTP server hostname
   - Example: `smtp.gmail.com` or `smtp.office365.com` or your hosting provider's SMTP server
   
2. **SMTP_PORT** (optional, defaults to 587)
   - SMTP port number
   - Use `587` for TLS or `465` for SSL
   
3. **SMTP_USER** (required)
   - SMTP username (usually an email address)
   - Example: `noreply@tasmaneng.co.nz` or any email you want to send from
   
4. **SMTP_PASS** (required)
   - SMTP password or app-specific password
   - For Gmail: Use an [App Password](https://support.google.com/accounts/answer/185833)
   - For Office 365: Use your regular password or app password
   
5. **CONTACT_EMAIL** (optional, defaults to sales@tasmaneng.co.nz)
   - The email address where form submissions should be sent
   - Example: `sales@tasmaneng.co.nz`

## SMTP Provider Options

### Option 1: Gmail (Easiest for testing)
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password
CONTACT_EMAIL=sales@tasmaneng.co.nz
```
**Note:** You MUST use an [App Password](https://support.google.com/accounts/answer/185833), not your regular Gmail password.

### Option 2: Office 365 / Outlook
```
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=noreply@tasmaneng.co.nz
SMTP_PASS=your-password
CONTACT_EMAIL=sales@tasmaneng.co.nz
```

### Option 3: Your Web Hosting Provider
Most web hosting providers (cPanel, Plesk, etc.) offer SMTP servers:
```
SMTP_HOST=mail.yourdomain.com (check with your hosting provider)
SMTP_PORT=587
SMTP_USER=noreply@tasmaneng.co.nz
SMTP_PASS=the-email-account-password
CONTACT_EMAIL=sales@tasmaneng.co.nz
```

### Option 4: Dedicated Email Service (Most Reliable)
For production, consider using a transactional email service:
- **SendGrid** (free tier: 100 emails/day)
- **Mailgun** (free tier: 5,000 emails/month)  
- **Amazon SES** (very cheap, $0.10 per 1,000 emails)

## Deployment Steps

1. **Push code to your repository**
   ```bash
   git push origin master
   ```

2. **Configure environment variables in Netlify**
   - Log into [Netlify Dashboard](https://app.netlify.com)
   - Select your site
   - Go to Site Settings → Environment Variables
   - Add all required variables listed above

3. **Deploy the site**
   - Netlify will automatically deploy when you push to master
   - Or trigger a manual deploy from the Netlify dashboard

4. **Test the form**
   - Visit your live site
   - Fill out the contact form
   - Try attaching 1-2 small PDF files
   - Submit and verify the email arrives at sales@tasmaneng.co.nz

## Supported File Types
- PDF (.pdf)
- AutoCAD (.dwg, .dxf)
- 3D Models (.step, .stp, .iges, .igs)
- Images (.jpg, .jpeg, .png)

## File Size Limits
- Maximum total size: 10MB
- Client-side validation prevents submission if limit exceeded
- Users see clear error messages if files are too large

## Troubleshooting

### Form shows "Email service not configured" error
- Check that all required env vars (SMTP_HOST, SMTP_USER, SMTP_PASS) are set in Netlify
- Redeploy the site after adding env vars (they don't take effect until next deploy)

### Emails not arriving
- Check spam/junk folders
- Verify SMTP credentials are correct
- Check Netlify function logs: Functions → View function logs
- Try a test email from your SMTP provider's webmail/dashboard first

### File upload errors
- Ensure files are under 10MB total
- Check that file types are in the accepted list
- Try with just one small PDF first to isolate the issue

## Security Notes
- Never commit SMTP passwords to git
- Always use environment variables for sensitive data
- Consider using an app-specific password rather than your main email password
- The form includes basic spam protection via required fields and file type validation

## Need Help?
Contact Wasabi Digital for assistance with setup or troubleshooting.
