<img width="200" height="80" alt="Screenshot 2025-10-19 134029-Photoroom" src="https://github.com/user-attachments/assets/8805d023-5923-4b37-8e8c-101a431e65c8" />


**AI-Powered GitHub Analytics Platform**

en-git transforms your GitHub data into actionable insights with advanced analytics, gamification, AI-powered career advice, and beautiful visualizations.
<p align="center">
    <img src="https://skillicons.dev/icons?i=react,vite,tailwind,nodejs,express,mongodb,git,github,vercel,postman&perline=10" />
</p>


Get your personalized developer badge — show off your skills, top languages, and activity with a clean, shareable card.

<img width="1279" height="678" alt="image" src="https://github.com/user-attachments/assets/8df56508-ab2c-49b2-b67d-73e90f14ea6a" />
Engage smarter, grow faster — let data guide your next project and highlight what matters most.

<img width="1919" height="994" alt="image" src="https://github.com/user-attachments/assets/09126b5e-7c6f-44fc-a06e-bae24ee12e0d" />


Compare with peers — analyze profiles side-by-side to track your growth and benchmark your progress.

<img width="1888" height="913" alt="image" src="https://github.com/user-attachments/assets/6428e18e-3f50-40a8-bd59-fc77088eaa43" />




## ✨ Features

### 📊 Core Analytics

- **Language Analysis** - Top 3 programming languages with usage percentages
- **Repository Insights** - Most starred & active repositories
- **Contribution Calendar** - Interactive heatmap of your coding activity
- **Activity Patterns** - Weekly & hourly contribution charts
- **Coding Profile** - Early bird vs night coder detection
- **Topics & Tags** - Popular technologies in your projects
- **Domain Detection** - Skill classification (Web Dev, AI/ML, DevOps, Mobile, etc.)

### 🎮 Gamification & Achievements

- **Achievement Badges** - Unlock badges based on your activity
  - Polyglot (Bronze/Silver/Gold)
  - Night Owl / 🐦 Early Bird
  - Open Source Hero
  - Consistent Coder
  - Star Collector
  - Early Adopter
  - Collaborator
  - Issue Hunter
- **Skill Radar Chart** - 6-dimensional visualization of technical expertise
- **Tech Stack Badges** - Auto-generated shields.io badges for your README

### 🤖 AI-Powered Features

- **Career Insights** - Personalized career advice from Google Gemini AI
- **6-Month Learning Roadmap** - Customized skill development plan
- **Strengths & Growth Areas** - Identify what you excel at and where to improve
- **Project Recommendations** - AI-suggested projects to build next
- **Career Paths** - Job titles and specializations matched to your profile

### 🎨 Social & Sharing

- **Share Cards** - Generate beautiful 1200x630 images for social media
- **Bookmarks** - Save favorite profiles for quick access

### 🎨 Social & Sharing

- **Share Cards** - Generate beautiful 1200x630 images for social media
- **Bookmarks** - Save favorite profiles for quick access
- **Search History** - Track recently viewed profiles
- **PDF Export** - Download comprehensive reports

### 🔌 Browser Extension

- **Chrome Extension** - Analyze profiles directly from GitHub pages
- **One-Click Analysis** - Quick access from any GitHub profile or repo
- **Context Menu Integration** - Right-click any GitHub link to analyze
- **Smart Detection** - Auto-detects usernames from current page
- **Recent History** - Quick access to recently analyzed profiles

## 🛠️ Tech Stack

**Frontend:**

- React 19 + Vite
- React Router
- Shadcn/UI + Radix UI
- Tailwind CSS
- Recharts (for analytics charts)
- Axios
- Socket.io-client

**Backend:**

- Node.js + Express
- MongoDB + Mongoose
- Socket.io
- JWT + bcrypt
- Razorpay
- Cloudinary
- Ethers.js
- Axios + Cheerio (GitHub trending scrape)
- Node-Cache (in-memory cache for GitHub API)

---

## 📦 Setup

### Prerequisites

- Node.js 18+
- MongoDB running (local or Atlas)
- GitHub personal access token (optional, for higher rate limits)

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd Github
```

### 2. Install dependencies

**Server:**

```bash
cd server
npm install
```

**Client:**

```bash
cd client
npm install
```

### 3. Configure environment variables

Create `server/.env`:

```bash
PORT=8000
CORS_ORIGIN=http://localhost:5173
MONGODB_URI=mongodb://localhost:27017/need_for_code
JWT_SECRET=your_jwt_secret
REFRESH_TOKEN_SECRET=your_refresh_secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_EXPIRY=7d

# Optional: GitHub token for higher rate limits (5000/hr vs 60/hr)
GITHUB_TOKEN=ghp_YourPersonalAccessToken

```

Create `client/.env`:

```bash
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

### 4. Run the application

**Option A: Use the batch script (Windows)**

```bash
start_dev.bat
```

**Option B: Run manually**

Terminal 1 (server):

```bash
cd server
npm run dev
```

Terminal 2 (client):

```bash
cd client
npm run dev
```

### 5. Open in browser

- Client: http://localhost:5173
- Server: http://localhost:8000/api/v1/healthcheck
- GitHub Insights: http://localhost:5173/github-insights

---

## 📊 GitHub Insights Usage

1. Navigate to `/github-insights` in the app
2. Enter any public GitHub username (e.g., `octocat`, `torvalds`, `gaearon`)
3. Click **Analyze**
4. View:
   - **Profile Summary**: avatar, bio, followers, domain classification
   - **Top Languages**: pie chart with percentages
   - **Most Starred/Active Repos**: ranked lists
   - **Popular Topics**: tag cloud
   - **Commit Timing**: hourly bar chart + profile badge (early-bird / night-coder)
   - **Weekly Activity**: recent events by week
   - **Recommendations**:
     - Trending projects that match your skills
     - Personal project ideas based on your top topics
     - Today's trending repos

**Tips:**

- Add a `GITHUB_TOKEN` to `.env` for higher API rate limits (5000/hr)
- Without a token, public API allows 60 requests/hour
- Results are cached for 5 minutes server-side to reduce API calls

---

## 🔌 Chrome Extension

### Quick Setup

1. **Build the extension:**

   ```bash
   cd client
   npm run build:extension
   ```

2. **Load in Chrome:**

   - Open `chrome://extensions/`
   - Enable **Developer mode** (top-right toggle)
   - Click **Load unpacked**
   - Select the `chrome-extension` folder
   - Extension loaded! 🎉

3. **Use it:**
   - Click extension icon to analyze any GitHub username
   - Visit GitHub profiles → See "Analyze with en-git" button
   - Visit repos → See "Deep Dive" button
   - Right-click GitHub links → "Analyze with en-git"

📖 **Full documentation:** See `chrome-extension/SETUP.md`

---

## 🧩 Project Structure

```
Github/
├── client/            # React frontend
│   ├── src/
│   │   ├── components/   # UI components (shadcn)
│   │   ├── pages/        # Routes (Home, Dashboard, GitHubInsights, etc.)
│   │   ├── lib/          # axios, github, auth, utils
│   │   └── ...
│   └── package.json
├── server/            # Express backend
│   ├── src/
│   │   ├── controllers/  # Route handlers
│   │   ├── routes/       # Express routes
│   │   ├── models/       # Mongoose schemas
│   │   ├── services/     # External APIs (github.service.js)
│   │   ├── utils/        # Helpers (githubAnalytics, skillDomain, etc.)
│   │   └── app.js
│   └── package.json
├── README.md
└── start_dev.bat
```

---
