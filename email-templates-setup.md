# EmailJS Setup Guide for XPORIA OVERSEAS

This guide will help you set up EmailJS to enable email notifications for your contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click **"Sign Up"** and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Select your email provider (Gmail recommended)
4. Follow the instructions to connect your Gmail account
5. **Copy the Service ID** (e.g., `service_abc123`) - you'll need this later    s
## Step 3: Create Email Templates

You need to create **two email templates**: one for user confirmation and one for client notification.

### Template 1: User Confirmation Email

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. **Template Name**: `User Confirmation`
4. **Subject**: `Thank You for Contacting XPORIA OVERSEAS`
5. **Content**: Copy and paste the HTML below

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .content {
            background: #f9fafb;
            padding: 30px;
            border-radius: 0 0 10px 10px;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            color: #666;
            font-size: 14px;
        }
        .accent {
            color: #d4af37;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>XPORIA OVERSEAS</h1>
            <p>Your Trusted Partner in Global Trade</p>
        </div>
        <div class="content">
            <h2>Dear {{to_name}},</h2>
            <p>Thank you for reaching out to <span class="accent">{{company_name}}</span>!</p>
            <p>We have received your inquiry and our team will review your requirements carefully. One of our export specialists will get back to you within <strong>24 hours</strong>.</p>
            <p>In the meantime, feel free to explore our website to learn more about our premium products and services.</p>
            <p>We look forward to serving you!</p>
            <p><strong>Best regards,</strong><br>
            The XPORIA OVERSEAS Team</p>
        </div>
        <div class="footer">
            <p>📧 info@xporiaoverseas.com | 📱 +91 79873 52105</p>
            <p>1049, Sche No. 114/2 part - 2, AB Road, Indore, Madhya Pradesh 452010, India</p>
        </div>
    </div>
</body>
</html>
```

6. Click **"Save"**
7. **Copy the Template ID** (e.g., `template_xyz789`)

---

### Template 2: Client Notification Email

1. Click **"Create New Template"** again
2. **Template Name**: `Client Notification`
3. **Subject**: `New Inquiry from {{user_name}} - XPORIA OVERSEAS`
4. **Content**: Copy and paste the HTML below

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .content {
            background: #ffffff;
            padding: 30px;
            border: 1px solid #e5e7eb;
        }
        .info-section {
            background: #f9fafb;
            padding: 15px;
            margin: 15px 0;
            border-left: 4px solid #d4af37;
            border-radius: 5px;
        }
        .info-label {
            font-weight: bold;
            color: #1e3a8a;
            display: inline-block;
            width: 120px;
        }
        .message-box {
            background: #f3f4f6;
            padding: 20px;
            border-radius: 8px;
            margin-top: 15px;
        }
        .footer {
            background: #1f2937;
            color: white;
            padding: 15px;
            text-align: center;
            border-radius: 0 0 10px 10px;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>🔔 New Customer Inquiry</h2>
            <p>XPORIA OVERSEAS Contact Form Submission</p>
        </div>
        <div class="content">
            <h3>Customer Details</h3>
            
            <div class="info-section">
                <p><span class="info-label">Name:</span> {{user_name}}</p>
                <p><span class="info-label">Email:</span> <a href="mailto:{{user_email}}">{{user_email}}</a></p>
                <p><span class="info-label">Phone:</span> {{user_phone}}</p>
                <p><span class="info-label">Company:</span> {{user_company}}</p>
                <p><span class="info-label">Location:</span> {{user_address}}</p>
            </div>

            <h3>Message/Requirements</h3>
            <div class="message-box">
                <p>{{user_message}}</p>
            </div>

            <p style="margin-top: 20px; color: #666; font-size: 14px;">
                <strong>Submitted on:</strong> {{submission_date}}
            </p>
        </div>
        <div class="footer">
            <p>This is an automated notification from your XPORIA OVERSEAS website contact form.</p>
        </div>
    </div>
</body>
</html>
```

5. Click **"Save"**
6. **Copy the Template ID** (e.g., `template_abc456`)

---

## Step 4: Get Your Public Key

1. Click on your **account name** in the top right
2. Go to **"Account"** → **"API Keys"**
3. **Copy your Public Key** (e.g., `abcXYZ123_public_key`)

---

## Step 5: Update Your .env File

Open the `.env` file in your project root and replace the placeholder values:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_USER=template_xyz789
REACT_APP_EMAILJS_TEMPLATE_CLIENT=template_abc456
REACT_APP_EMAILJS_PUBLIC_KEY=abcXYZ123_public_key
```

**Important:** Replace the example values with your actual IDs from EmailJS.

---

## Step 6: Test the Setup

1. **Restart your development server** (stop and run `npm start` again)
2. Go to your contact form
3. Fill out all fields including the new **Address/Location** field
4. Submit the form
5. Check:
   - ✅ User receives confirmation email at their provided email address
   - ✅ You (client) receive detailed notification email with all form data

---

## Troubleshooting

### Emails not sending?

1. **Check console for errors** - Open browser DevTools (F12) and check the Console tab
2. **Verify .env values** - Make sure all IDs are correct and match your EmailJS dashboard
3. **Restart dev server** - Environment variables require a server restart
4. **Check EmailJS dashboard** - Go to "Email History" to see if requests are reaching EmailJS
5. **Email quota** - Free tier has 200 emails/month limit

### Template variables not working?

Make sure the variable names in your templates **exactly match** the ones in the code:
- User template: `{{to_name}}`, `{{to_email}}`, `{{company_name}}`
- Client template: `{{user_name}}`, `{{user_email}}`, `{{user_phone}}`, `{{user_company}}`, `{{user_address}}`, `{{user_message}}`, `{{submission_date}}`

---

## Email Limits (Free Tier)

- **200 emails per month**
- **2 email services**
- **Unlimited templates**

For higher volume, consider upgrading to a paid plan or implementing a backend email solution.

---

## Next Steps

Once emails are working:
1. Customize the email templates with your branding
2. Update the "From Name" in EmailJS service settings
3. Consider adding email notifications to other forms on your site

---

**Need Help?** Contact EmailJS support at https://www.emailjs.com/docs/
