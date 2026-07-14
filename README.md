# DevSquad — Collaborative Team Building & Hackathon Matchmaking Platform

A modern full stack platform designed for developers to discover squads, form dream teams, showcase technical skills, and collaborate on projects or hackathons. Skip the solo grind and start building with experts.

The platform includes secure authentication, role based access control, interactive project tools, real time validations (like restricting owners and admins from applying to squads), dynamic data visualization, and a responsive SaaS inspired dark interface built with Next.js and Tailwind CSS.

---

## 🌐 Live Project

🔗 **Live Site:** [View Live Site](https://dev-squad-hazel.vercel.app)


### Source Code

- **GitHub ClientSide Repo:** [View Client Side Project Repo](https://github.com/HSBHasib/DevSquad)
- **GitHub ServerSide Repository:** [View Server Side Project Repo](https://github.com/HSBHasib/DevSquad-Server)

---

# 📸 Project Demo
<img width="1400" height="768" alt="DevSquad" src="https://github.com/user-attachments/assets/8eb1d3ba-acb7-4f18-a5e9-690d396d05dd" />

---

# 🛠️ Technologies Used

## Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (Advanced Animations)
- Swiper.js (Smooth Autoplay Banner Carousel)
- Recharts (Data Visualizations)
- React Icons

## Backend
- Node.js
- Express.js
- TypeScript (Strict Type Checking)

## Authentication & Security
- BetterAuth
- MongoDB Atlas (Secure Session Storage)
- Role-Based Access Control (RBAC)
- Client-Side Validation & Guard Rails

## Database
- MongoDB Atlas
- MongoDB Aggregation Pipeline

---

# ✨ Core Features

## 🔐 Authentication & Authorization
- BetterAuth multi-provider integration
- Role-Based Access Control (Admin, Owner, Member roles)
- Safe user session handling

## 🤝 Squad Management & Application Guard Rails
- **Dynamic Squad Exploration:** Users can browse public squads, see tech stacks, and check current member limits.
- **Smart Validation Messages:** 
  - Displays a dedicated warning state if the squad has reached its maximum member capacity (`isFull`).
  - Restricts administrators (`user.role === 'admin'`) from applying to squads with an amber-tinted notification UI.
  - Detects if an applicant is the creator of the squad (`applicantId === ownerId`) and blocks the application with a premium crown-badge alert.
- **Strict UI Protections:** Buttons are dynamically disabled (`disabled={condition}`) and actions are blocked at the code level, turning off interactive Framer Motion hover states and swapping to a `cursor-not-allowed` style.

## 👥 Member & Admin Operations
- **Admin Safety Guard:** In the user management panel, the delete button (`GoTrash`) is automatically locked if `user.role === 'admin'` to prevent accidental deletion of administrative accounts.
- **Dynamic Styling:** Hover animations safely separate normal users (triggering red-tinted warning shadows) from protected admins.

## 🎨 Interactive User Experience
- **Smooth Banner Slider:** Powered by `Swiper.js` with zero manual controls for an uninterrupted, automatic right-to-left transition showing platform statistics, study groups, and SaaS targets.
- **Staggered Animations:** Framer Motion orchestrates sub-elements popping onto the viewport seamlessly.
- **Social Connectors:** Clean inline contact elements linking directly to GitHub, LinkedIn, and portfolios using secure `_blank` navigation layouts.

## 📊 Analytics & Visualizations
- Interactive team charts using `Recharts`
- Real-time squad limit track bars

---

# 📦 Major Dependencies

### Frontend
- next
- react
- react-dom
- typescript
- tailwindcss
- framer-motion
- swiper
- react-icons
- charts

### Backend
- express
- mongodb
- better-auth
- cors
- dotenv
- typescript

---

# 🚀 Run Locally

## 1. Clone the repository

### Frontend
```bash
git clone https://github.com/HSBHasib/DevSquad
cd DevSquad
```
### Backend
```bash
git clone https://github.com/HSBHasib/DevSquad-Server
cd DevSquad-Server
```

## 2. Install dependencies & Run Backend
```bash
npm install
npm run dev
```

## 3. Install dependencies & Run Frontend
```bash
npm install
npm run dev
```

## 4. Open the application
```bash
http://localhost:3000
```

# 🎯 Learning Outcomes

During this project, I pushed my technical limits and gained practical experience with real world troubleshooting:

- **TypeScript Compiler & Vercel Fixes:** Encountered and solved tough TypeScript compilation errors (`TS5108`) by diving deep into `tsconfig.json` and changing module resolution settings to `Node16`. I also bypassed an internal Vercel compiler bug (`readFile` error with older TS versions) by compiling the code to clean JavaScript (`dist/index.js`) locally before deployment.
- **Monorepo & Sub folder Deployments:** Mastered deploying a backend server located inside a sub folder. I configured custom `vercel.json` serverless routing rules so that Vercel recognizes the isolated Node.js environment without looking for static public folders.
- **Advanced UI State Guards:** Handled strict role based and ownership conditions on the frontend. I built logic that blocks actions at the code level disabling clicks, stopping animations dynamically, and switching cursors—whenever an admin or the squad owner attempts to apply.
- **Fluent Component Animations:** Got much more comfortable blending third party tools like `Swiper.js` with `Framer Motion`. I learned how to orchestrate automatic sliding wrappers while safely maintaining entry animations whenever data changes, keeping the user interface smooth and bug free.
---

## 👨‍💻 Developed By

**Hasibur Rahman**
- Mern Stack Developer & Aspiring Software Engineer
- Gazipur, Dhaka, Bangladesh
- GitHub: [@HSBHasib](https://github.com/HSBHasib)
