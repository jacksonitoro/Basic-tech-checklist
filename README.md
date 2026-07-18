# Tech Checklist

Tech Checklist is a lightweight full-stack web application designed to help aspiring software engineers and DevOps professionals organize, track, and visualize their learning journey. It provides a central place to manage technologies, projects, learning tasks, certifications, and personal learning goals while offering a clear view of completed achievements, current focus areas, and future objectives.

## Why I Built This

I built Tech Checklist to solve a problem I experienced during my own learning journey. As I learned new technologies, completed projects, and earned certifications, it became increasingly difficult to keep track of what I had already learned, what I was currently studying, and what I wanted to learn next.

Instead of relying on scattered notes and multiple tools, I wanted a single application that could organize my learning progress and serve as both a personal productivity tool and a practical full-stack software engineering project.

## Features

Tech Checklist helps users organize and monitor their software engineering learning journey through the following features:

### Dashboard
- View learning progress at a glance
- Track completed technologies, projects, and tasks
- Monitor current learning activities
- View upcoming learning goals and priorities

### Technology Management
- Add new technologies
- Update existing technologies
- Delete technologies
- Mark technologies as completed

### Organization
- Organize technologies by category
- Search technologies
- Filter technologies by category or learning status

### Learning Progress
- Track completed, ongoing, and planned learning
- Monitor personal learning goals


## Tech Stack

The project is built using modern web development and DevOps technologies to simulate a production-ready full-stack application.

### Frontend
- React
- Vite
- JavaScript

### Backend
- Express.js

### Database
- SQLite

### DevOps
- Docker
- Docker Compose
- Nginx
- GitHub Actions


## Project Structure

tech-checklist/
├── .github/            # GitHub Actions workflows
├── public/             # Static assets
├── src/
│   ├── assets/         # Images, icons, fonts
│   ├── components/     # Reusable UI components
│   ├── constants/      # Application constants
│   ├── layouts/        # Shared layouts
│   ├── pages/          # Application pages
│   ├── services/       # API communication
│   ├── styles/         # Global and component styles
│   ├── utils/          # Helper functions
│   ├── App.jsx
│   └── main.jsx
├── Dockerfile
├── package.json
└── README.md


## Getting Started

### Prerequisites

- Node.js 20+
- npm
- Git

### Installation

Clone the repository:

```bash
git clone <repository-url>