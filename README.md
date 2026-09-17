# Job Navigator 💼

A full-stack job search and recruitment platform built with **React.js, Node.js, Express.js, and MongoDB**.

Job Navigator brings job seekers and recruiters together in one workflow. Candidates can create profiles, upload resumes, discover relevant openings, apply for jobs, and track applications. Recruiters can create company/job listings and manage incoming applications.

## Core Features

### 👤 Job Seekers
- Account registration and login
- Professional profile
- Resume upload
- Browse and search job openings
- Filter jobs by location, type and category
- Apply to jobs
- Track application status
- View application history

### 🏢 Recruiters
- Recruiter registration/login
- Recruiter profile
- Create and manage job openings
- View applications
- Review candidate profiles and resumes
- Update application status

### 🔐 Platform
- Role-based access
- REST API architecture
- MongoDB persistence
- Secure password hashing
- JWT-ready authentication structure
- Resume/file upload support
- Responsive React interface

## Architecture

```text
React Client
     |
     v
Express REST API
     |
     +---- Authentication
     +---- Job Management
     +---- Applications
     +---- Resume Uploads
     |
     v
MongoDB
```

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, HTML, CSS, JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| API | REST |
| Authentication | JWT / bcrypt |
| File Upload | Multer |

## Project Structure

```text
JobNavigator/
├── client/
│   └── src/
├── server/
│   └── src/
│       ├── controllers/
│       ├── models/
│       └── routes/
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Main Data Models

- **User** — candidate/recruiter account and profile
- **Job** — title, company, location, type, description and requirements
- **Application** — candidate application and status
- **Resume** — uploaded resume metadata

## Application Flow

```text
Candidate creates profile
        ↓
Uploads resume
        ↓
Searches jobs
        ↓
Opens job details
        ↓
Applies
        ↓
Recruiter reviews application
        ↓
Shortlist / Reject / Interview
```

## REST API Areas

| Area | Example |
|---|---|
| Auth | `/api/auth/register`, `/api/auth/login` |
| Jobs | `/api/jobs`, `/api/jobs/:id` |
| Applications | `/api/applications` |
| Recruiters | `/api/recruiters` |
| Resume | `/api/resume/upload` |

## Setup

### Backend

```bash
cd server
npm install
```

Create `.env` from `.env.example`.

Example:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/jobnavigator
JWT_SECRET=change-this-secret
CLIENT_URL=http://localhost:5173
```

Start:

```bash
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:5000
```

> A local MongoDB instance or MongoDB Atlas connection is required for persistence.

## Security

- Passwords should be stored using bcrypt hashing.
- JWT should be used for protected routes.
- Resume uploads should be validated for file type and size.
- Secrets belong in environment variables and must never be committed.

## Future Enhancements

- Email notifications
- Recruiter company pages
- Advanced search ranking
- Saved jobs
- Interview scheduling
- Admin moderation dashboard
- Application analytics
- Cloud resume storage
- Job recommendation engine

## Author

**Akmal Ahmad Khan**

GitHub: https://github.com/Akmal291786
