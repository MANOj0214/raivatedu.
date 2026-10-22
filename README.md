# Raivatedu – Next.js marketing site

Frontend assignment for Meru Technosoft. Pages: Home, Courses listing, Course detail (8 dynamic routes).

## Run
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production check
```

## Design decisions
- **Colours** (tokens in `tailwind.config.js`): indigo `#4338CA` for trust, sunny yellow `#FFC93C` for energy and CTAs, off-white `#FBF9F4`, deep ink `#1E1B4B`. Yellow is only used with dark ink text to keep contrast above 4.5:1.
- **Fonts** (`next/font`): Baloo 2 for rounded, friendly headings; Nunito for body text.
- **Motion**: one floating hero shape; disabled under `prefers-reduced-motion`.
- **Data**: courses, mentors, FAQs live in `lib/data.js`. No backend.

## Assumptions
- Prices in INR; mentor and learner names are fictional.
- Initials avatars are used instead of stock photos to keep pages fast.

## With more time
Add real images via `next/image`, dark mode, a page transition, and an enrol form with validation.
