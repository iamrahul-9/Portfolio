# Contact Form Setup Instructions

Your contact form is now ready! It uses **Resend** - a modern email API with a generous free tier (100 emails/day, 3,000/month).

## Setup Steps (5 minutes):

### 1. Create a Resend Account
- Go to [https://resend.com/](https://resend.com/)
- Sign up for a **FREE account** (no credit card required)
- Free tier includes: **3,000 emails/month** (100/day)

### 2. Get Your API Key
- Once logged in, go to **API Keys** in the dashboard
- Click **"Create API Key"**
- Name it "Portfolio Contact Form"
- Copy the API key (starts with `re_...`)

### 3. Add Environment Variable
- Create a `.env.local` file in your project root (if it doesn't exist)
- Add your API key:
  ```
  RESEND_API_KEY=re_your_actual_api_key_here
  ```
- Save the file

### 4. Restart Your Dev Server
- Stop your current dev server (Ctrl+C)
- Run `npm run dev` again
- The server will now load your environment variables

### 5. Test It!
- Fill out the contact form on your portfolio
- Click "Send Message"
- You should receive an email at **rahulbgupta24@gmail.com**

## Features Included:

✅ **Generous Free Tier** - 3,000 emails/month (100/day)
✅ **Email Notifications** - Get instant emails when someone contacts you
✅ **Reply-To Set** - Reply directly to the sender from your email
✅ **Clean Email Template** - Professional HTML email formatting
✅ **Loading States** - Shows "Sending..." while submitting
✅ **Success/Error Messages** - User-friendly feedback
✅ **Server-Side API** - Secure, API key never exposed to client
✅ **Simple Form** - Just Name, Email, and Message

## Important Notes:

### Test Domain Limitation
- Resend's free tier initially uses `onboarding@resend.dev` as the sender
- Emails might go to spam with this domain
- **Solution**: Verify your own domain (free on Resend) to improve deliverability

### Domain Verification (Optional but Recommended):
1. Go to **Domains** in Resend dashboard
2. Click **"Add Domain"**
3. Add your domain (e.g., `yourdomain.com`)
4. Add the DNS records Resend provides
5. Once verified, update `/app/api/contact/route.ts` line 19:
   ```typescript
   from: "Portfolio Contact <noreply@yourdomain.com>",
   ```

### Deploy to Vercel:
When deploying, add the environment variable:
1. Go to Vercel project settings
2. Navigate to **Environment Variables**
3. Add `RESEND_API_KEY` with your key
4. Redeploy your project

## Alternative Options:

If you prefer different services:
- **Formspree** (https://formspree.io/) - 50 submissions/month free
- **Web3Forms** (https://web3forms.com/) - 250 submissions/month free
- **EmailJS** (https://www.emailjs.com/) - 200 emails/month free

## Current Form Behavior:

- ✅ All fields are required
- ✅ Email validation
- ✅ Auto-reset after successful submission
- ✅ Disabled button while sending
- ✅ Success message shows for 5 seconds
- ✅ Error message shows for 5 seconds
- ✅ Contact info is clickable (email, phone)
- ✅ Social links to GitHub and LinkedIn
- ✅ Server-side processing (secure)

---

**That's it!** Your contact form will be fully functional once you add your Resend API key to `.env.local`.
