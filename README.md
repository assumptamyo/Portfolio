# Myo Thandar — Portfolio (MERN)

Personal portfolio built with **MongoDB, Express, React (Vite) and Node.js**.

```
portfolio/
├── frontend/      React + Vite
│   ├── public/images/
│   └── src/components/   Navbar, Hero, About, Skills, Projects, Contact, Footer
└── backend/       Express + Mongoose API
    ├── models/    Project, Skill, Certification, Message
    ├── routes/    /api/projects, /api/skills, /api/contact
    └── seed.js    loads skills & projects into MongoDB
```

## Setup

Requires Node 20+ and MongoDB running locally (or a MongoDB Atlas URI in `backend/.env`).

Backend (terminal 1):

```bash
cd backend
npm install
cp .env.example .env
npm run seed            # load skills + projects into MongoDB
npm run dev             # API on http://localhost:5000
```

Frontend (terminal 2):

```bash
cd frontend
npm install
npm run dev             # React on http://localhost:5173 (proxies /api to :5000)
```

## API

| Method | Route           | Description                         |
| ------ | --------------- | ----------------------------------- |
| GET    | `/api/skills`   | List skills                         |
| GET    | `/api/projects` | List projects                       |
| POST   | `/api/contact`  | Save a contact-form message to DB   |

## Editing content

- **Skills, projects, certifications** live in MongoDB — edit `backend/seed.js` and re-run `npm run seed` in `backend/`.
- **Experience, education, hero stats** live in `frontend/src/data.js`.
- **Certificate photos**: put the image in `frontend/public/certificates/` (e.g. `unlox.jpg`), add
  `image: '/certificates/unlox.jpg'` to that entry in `seed.js`, and re-seed. The card then shows a
  thumbnail that opens full-size on click.
- **CV**: `frontend/public/Myo-Thandar-CV.pdf` (used by the Download CV button).
- Messages from the contact form are stored in the `messages` collection.

## Production

```bash
cd frontend && npm run build   # builds frontend/dist
cd ../backend && npm start     # Express serves the API and the built React app on :5000
```
