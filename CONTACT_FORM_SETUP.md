# Contact Form Setup

Your contact form is ready! To make it functional, you need a free Web3Forms API key.

## Steps to Activate:

### 1. Get Free API Key
1. Go to https://web3forms.com
2. Enter your email: **ahmedyasine230@gmail.com**
3. Click "Get Access Key"
4. Check your email for the API key

### 2. Add API Key to Code
1. Open `components/sections/contact.tsx`
2. Find line with: `access_key: "YOUR_WEB3FORMS_KEY"`
3. Replace `YOUR_WEB3FORMS_KEY` with your actual key
4. Save the file

### 3. Test It
1. Go to http://localhost:3000
2. Scroll to contact form
3. Fill it out and submit
4. Check your email (ahmedyasine230@gmail.com)

## How It Works

- Form submissions go to Web3Forms API
- They forward the message to your email
- No backend server needed
- 100% free (250 submissions/month)
- Works on Vercel deployment

## Alternative: FormSpree

If you prefer FormSpree instead:
1. Go to https://formspree.io
2. Sign up with your email
3. Create a new form
4. Get the form endpoint
5. Update the fetch URL in contact.tsx

## Current Status

✅ Form UI complete
✅ Validation working
✅ Animations working
⏳ Needs API key to send real emails

Once you add the API key, the form will send real emails to ahmedyasine230@gmail.com!
