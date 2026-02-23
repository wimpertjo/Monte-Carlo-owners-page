# Monte Carlo Offshorer Owners Club — Website (Ready to Deploy)

You said: *“I don’t want to build anything myself.”*  
So the goal is: you do **minimal clicking**, and the site goes live.

This repo is a **complete website** (Next.js) using **only your images** in `/public/photos`.

## The only things you will need to do
### A) Put it online (Vercel)
1) Create a free Vercel account  
2) Upload this project to GitHub (drag & drop via GitHub website is fine)  
3) In Vercel: **New Project → Import Repo → Deploy**

That’s it. Vercel hosts everything.

### B) Replace 3 links (30 seconds)
Search for `href="#"` in:
- `/app/membership/page.jsx`  → your application form URL
- `/app/forum/page.jsx`       → your forum URL
- `/app/shop/page.jsx`        → your shop URL

## Membership workflow (fastest + board approval)
1) Application form (Tally/Typeform/Google Form) emails the board
2) Board approves manually
3) Send approved applicant a Stripe payment link for €250/year
4) After payment, send:
   - Forum posting access instructions
   - Member discount details (10%)

## Forum recommendation
Use **Discourse** (best searchable technical archive).  
Host it on `forum.yourdomain.com` and link to it.

## Shop recommendation
Use **Shopify** and link to it (or embed later).  
Members receive a 10% discount (start with a member-only code; automate later).

## Run locally (optional)
Install Node.js LTS, then:
```bash
npm install
npm run dev
```
Open http://localhost:3000
