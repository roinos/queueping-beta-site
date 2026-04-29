# QueuePing Beta Website

Standalone Next.js landing site for QueuePing beta distribution.

## Local development

1. `cd website`
2. `npm install`
3. `npm run dev`
4. Open `http://localhost:3000`

## Production build

1. `cd website`
2. `npm install`
3. `npm run build`
4. `npm run start`

## Vercel deployment

1. Import this repository into Vercel.
2. Set the project root to `website`.
3. Framework preset: `Next.js`
4. Build command: `npm run build`
5. Output setting: default Next.js output
6. Deploy

## Replace placeholder URLs

Update these placeholders in `app/page.tsx`:

- `WINDOWS_DOWNLOAD_URL`
- `MACOS_DOWNLOAD_URL`
- `ANDROID_DOWNLOAD_URL`
- `IOS_BETA_REQUEST_URL`
- `FEEDBACK_FORM_URL`
