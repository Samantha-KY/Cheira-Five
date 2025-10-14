This is a [Next.js](https://nextjs.org) mini hotel website built with React and Tailwind CSS.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing content by modifying `app/page.tsx` and pages under `app/`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load [Geist](https://vercel.com/font).

## Project Structure

- `app/layout.tsx` — site layout with `Navbar` and `Footer`.
- `app/page.tsx` — homepage with hero, featured rooms, and spaces.
- `app/rooms/page.tsx` — rooms listing.
- `app/rooftop/page.tsx` — rooftop bar page.
- `app/kitchen/page.tsx` — kitchen page.
- `app/gallery/page.tsx` — gallery.
- `app/booking/page.tsx` — booking form page.
- `app/api/book/route.ts` — mock booking API (logs request and returns success).
- `app/components/` — shared UI components.
- `lib/data.ts` — update rooms, spaces, and gallery images here.
- `public/images/` — place your images here.

## Add Your Images

1. Place images into `public/images/` (create the folder if it doesn't exist).
2. Update paths in `lib/data.ts` for `rooms`, `spaces`, and `galleryImages` to match your filenames.

Recommended sizes:

- Rooms & spaces: 1200x900 (4:3)
- Gallery: 1200x800 (varies), JPG optimized for web

## Update Room Prices & Details

Edit `lib/data.ts`:

- `price`: set per-night price string (e.g., `$120 / night`).
- `description`: short description for each room.

## Booking Integration

- The current form posts to `POST /api/book` and shows a success message.
- To send emails or integrate Cal.com/Google Calendar:
  - Replace handler in `app/api/book/route.ts` with your provider call.
  - Or change the Booking page CTA to link to an external booking link.

## Styling

- Tailwind CSS v4 is enabled via `app/globals.css` with `@import "tailwindcss";`.
- Adjust component styles in `app/components/*` as needed.

## Deploy

- Any Node host that supports Next.js 15 works (Vercel recommended).
- Build: `npm run build`
- Start: `npm start`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
