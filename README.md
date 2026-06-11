# BCI Study Platform

A minimal Next.js study platform for Rajasthan Basic Computer Instructor preparation.

## Main updates

- Category filter removed from Tests page.
- Date filter defaults to today and opens calendar on click.
- Professional low-noise header without heavy branding.
- New `/syllabus` page for Paper 1 syllabus and 20-day learning plan.
- New `/learn` section with topic-wise notes, memory tables, PYQ-style traps, micro quiz, personal notes and bookmark/progress storage.
- Topic JSON export endpoint: `/api/learn/topic-json?slug=<topic-slug>`.
- Skip button moves to next question.
- Pointer cursor on buttons, links, date inputs and clickable UI.

## Vercel settings

Framework: Next.js
Install command: `npm install`
Build command: `npm run build`
Root directory: `./`

## Environment variables

```env
MONGODB_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/bci-pro-exam-platform?retryWrites=true&w=majority&appName=Cluster0
NEXT_PUBLIC_DEFAULT_USER_ID=default-user
NEXT_PUBLIC_STUDY_START_DATE=2026-03-10
NEXT_PUBLIC_STUDY_DAYS=65
NEXT_PUBLIC_STUDY_TIME_ZONE=Asia/Kolkata
APP_RATE_LIMIT_PER_MINUTE=120
```

For local development:

```bash
npm install
npm run dev
```

For Vercel, add environment variables in the Vercel dashboard. Do not upload `.env.local`.
