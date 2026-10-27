# Aneeb Graphic Studio — Complete React Portfolio

Responsive portfolio built with React + Vite, React Router DOM, Formik + Yup, Motion, Swiper and Lucide. Includes all **63 uploaded images** and **4 uploaded videos**, the designer portrait, and a transparent-gradient monogram.

## Local run

1. Install Node.js 20+.
2. Open the folder in VS Code and run `npm install`.
3. Run `npm run dev` and open the displayed address (normally http://localhost:5173).
4. For production run `npm run build`; output is in `dist/`.

## Folder guide

- `src/App.jsx` — complete line-editable React JSX pages, components, navigation, carousel, modal, and form.
- `src/style.css` — custom mobile/tablet/desktop styles and animations.
- `src/data.js` — profile, services and **all numbered assets** mapped to portfolio sections.
- `public/assets/` — uploaded artworks `work-01.jpg` to `work-63.jpg`, videos `reel-01.mp4` to `reel-04.mp4`, portrait and the transparent logo.
- `api/contact.js` — optional Vercel backend mail endpoint (Resend).

## Form delivery — important setup

Formik + Yup validate fields; they do **not** send email by themselves. To enable real sending, choose one method:

**Option A: EmailJS** (simple, no custom backend):

1. Create an EmailJS service linked to an email inbox and an email template.
2. Template variables: `{{from_name}}`, `{{from_email}}`, `{{reply_to}}`, `{{service}}`, `{{message}}`, `{{to_email}}`.
3. Create `.env.local` from `.env.example` and fill `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`.
4. Ensure email template sends to `aneebdesignerlhr@gmail.com`.
5. Restart development server and submit a test enquiry. In Vercel, configure these env variables and redeploy.

**Option B: Resend + Vercel** (server-side secrets):

1. Verify your sending domain with Resend; set `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` as **Vercel server environment variables** (no VITE prefix).
2. `CONTACT_FROM_EMAIL` must use a verified sender address.
3. The form posts to `/api/contact`; the endpoint emails `aneebdesignerlhr@gmail.com`. Test on the actual Vercel deployment, not only Vite dev server.

**Without configuration, the form displays an honest error and a mailto alternative. It cannot silently send emails.** Do not commit secrets to git. The form includes a spam honeypot; for high traffic, add rate limiting and captcha on the server.

## Social links

The uploaded info has not specified Facebook / Instagram / LinkedIn profile URLs. Icons are intentionally non-clickable placeholders, not invented profile destinations. In `src/App.jsx`, update the `Socials` component once exact URLs are available.

## Vercel deployment

1. Push to GitHub and import repo into Vercel.
2. Framework: Vite; build: `npm run build`; output: `dist`.
3. `vercel.json` handles browser deep routes and `/api`.
4. Add email environment variables, deploy, open a project detail deep link and test the contact form.

## Design & assets

The original ZIP images were renamed by their **original order**, not filtered. Every uploaded image appears on the `/portfolio` gallery, and the 4 videos appear in two working swipeable galleries with video controls. Project/category assignments are editorial estimates from artwork thumbnails; update `src/data.js` as desired.

User-provided Behance reference inspired the **creative direction**, not copied text or copyrighted artwork. All displayed work imagery comes from the supplied ZIP. The name/social profile/skills/content are editable and should be confirmed before publishing.

## Latest update
Homepage: Fitness Gym and We Are Hiring featured artwork (third featured slot omitted); five accessible animated FAQs; additional 11 images and 3 video assets added to Portfolio archive without deleting original media. Email configuration remains necessary for delivery.


## Final updates (additive, no removals)
- "Web Designer" replaces the web/development-related intro tag. UI/UX Graphics is now "Creative Visual Design".
- Homepage Work That Stands Out now retains Gym + Hiring and adds iDrive Arabia and AAA Cargo cards.
- Extra Aneeb personal brand artwork is available in the Portfolio gallery.
- Put your optional new video at `public/assets/aneeb-extra-video.mp4` with this **exact** name. The homepage has a ready player slot. Before the file is added, it shows a neutral placeholder. No existing videos were removed.
- Ensure media rights/permissions before publishing.
