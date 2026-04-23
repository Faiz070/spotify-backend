# Spotify Backend API

Node.js/Express/MongoDB backend for Spotify-like music streaming service.

[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)
[![Node.js](https://img.shields.io/badge/Node.js-v20-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.2.1-blue.svg)](https://expressjs.com/)

## ✨ Features

- **User Authentication** (JWT, bcrypt)
- **Music Management** (upload, CRUD via multer + ImageKit)
- **Album Management**
- **Middleware** (auth, validation)
- **MongoDB** (Mongoose models: User, Music, Album)
- **API Routes** (auth, music)
- **Testing** (Jest + Supertest)
- **File Storage** (multer + ImageKit CDN)

## 📁 Project Structure

```
.
├── server.js              # Entry point
├── src/
│   ├── app.js            # Express app setup
│   ├── controllers/      # Request handlers
│   │   ├── auth.controller.js
│   │   └── music.controller.js
│   ├── middleware/       # Auth & validation
│   │   ├── auth.middleware.js
│   │   └── validation.middleware.js
│   ├── models/           # Mongoose schemas
│   │   ├── user.models.js
│   │   ├── music.models.js
│   │   └── album.models.js
│   ├── routes/           # API routes
│   │   ├── auth.routes.js
│   │   └── music.routes.js
│   ├── services/         # Business logic
│   │   └── storage.service.js
│   └── db/               # Database
│       └── db.js
├── tests/                # Jest tests
├── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- MongoDB (local or Atlas)
- ImageKit account (for file storage/CDN)

### Installation

```bash
git clone https://github.com/Faiz070/spotify-backend.git
cd spotify-backend
npm install
```

### Environment Variables

Create `.env`:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/spotify
JWT_SECRET=
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=
```

### Run

```bash
# Development (nodemon)
npm run dev

# Production
npm start

# Tests
npm test
```

Server runs on `http://localhost:3000`

## 📖 API Endpoints

| Method | Endpoint          | Description              | Auth |
|--------|-------------------|--------------------------|------|
| POST   | `/api/auth/register` | User registration     | -    |
| POST   | `/api/auth/login`    | User login                | -    |
| GET    | `/api/music`         | Get all music             | ?    |
| POST   | `/api/music`         | Upload music              | ✓    |
| PUT    | `/api/music/:id`     | Update music              | ✓    |
| DELETE | `/api/music/:id`     | Delete music              | ✓    |

*? Optional auth, ✓ Required*

## 🧪 Testing

```bash
npm test
```

Uses Jest + Supertest for API testing.

## 🚀 Deployment

- **Render/Vercel/Heroku**: Set env vars, npm install, npm start
- **Docker**: Add Dockerfile
- **PM2**: `pm2 start server.js`

## 🤝 Contributing

1. Fork & clone
2. Create branch:
3. Commit: 
4. Push & PR

## 📄 License

ISC License - see [LICENSE](LICENSE) (Faiz Ansari)
