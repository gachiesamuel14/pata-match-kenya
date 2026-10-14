# Pata Match Kenya 🇰🇪

**Location-based dating platform for Kenya.**

Connect with people near you using GPS. Filter by county, distance, age, interests, tribe, religion, lifestyle. Built for Nairobi, Mombasa, Kisumu, Kiambu and all 47 counties.

## Live Features in This Starter
- Beautiful landing page
- Discover / swipe demo (mock profiles)
- Kenya-themed design (green, red, black)
- Responsive and ready for Netlify

## Recommended Tech Stack for Full Version
| Feature              | Recommended Tool          |
|----------------------|---------------------------|
| Frontend             | Next.js (this repo)      |
| Auth + Database      | **Supabase** (free tier) |
| Location / Matching  | Supabase + PostGIS       |
| Photos               | Supabase Storage         |
| Realtime Chat        | Supabase Realtime or Stream |
| Payments             | M-Pesa (Daraja API)      |
| Hosting              | **Netlify** (this repo)  |

## Quick Start (Local)
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy to Netlify (Recommended)
1. This repo is already on GitHub.
2. Go to [Netlify](https://app.netlify.com) → **Add new site** → **Import an existing project**.
3. Connect GitHub → select `pata-match-kenya`.
4. Build settings (usually auto-detected):
   - Build command: `npm run build`
   - Publish directory: `.next` (or leave default for Next.js)
5. Deploy. Netlify will give you a live URL.

## Next Steps to Make It Real
1. **Create a Supabase project** (supabase.com — free).
2. Set up tables: `profiles`, `likes`, `matches`, `messages`.
3. Enable PostGIS extension for real distance queries.
4. Add Supabase Auth (email + Google / phone).
5. Store user lat/lng on profile.
6. Build matching algorithm (nearby users within X km).
7. Add photo upload to Supabase Storage.
8. Implement realtime chat.
9. Add filters: county dropdown (47 counties), age, interests, etc.
10. Safety: report / block system + verification badges.
11. Optional: M-Pesa for premium boosts.

### Suggested Profile Fields (Kenya-specific)
- Name, age, gender, photos
- Bio
- County + precise location (GPS)
- Interests
- Tribe (optional)
- Religion (optional)
- Mode: Student / Professional / Church / Casual
- Preferred distance or county-only

## Contributing / Extending
Feel free to fork and build the full backend. This starter gives you a clean frontend foundation ready for Netlify continuous deployment.

**Karibu!** Let's build the best local dating experience in Kenya.
