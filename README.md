# STFR.in - STAY THE **** REAL

React + Vite frontend for anonymous messages. Visit `/username` to send.

## Quick Start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production
npm run preview  # preview build
npm run lint     # ESLint
```

## How It Works

- Username from URL path (`/alice` → `alice`)
- Fetches question from `https://dev-api.stfr.in/api/web/v1/question/:username`
- Sends messages to `https://dev-api.stfr.in/api/web/v1/question/:username/answer/`
- Uses `allorigins.win` proxy (replace for production)

## Structure

```
src/
├── App.jsx              # routing, API calls, state
├── main.jsx             # entry
├── theme.js             # styles system
├── global.css           # animations
├── assets/              # images, icons
└── components/
    ├── MainCard.jsx
    ├── UserHeader.jsx
    ├── AnswerSection.jsx
    ├── SubmitButton.jsx
    ├── SentConfirmation.jsx
    ├── DecorationIcons.jsx
    └── PoweredBy.jsx
```

## Deploy

Output: `dist/`

Works with: Netlify, Vercel, GitHub Pages

⚠️ Configure CORS and remove public proxy for production
