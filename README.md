# My profolio

[https://www.yesid.dev/](https://www.yesid.dev/)

## Description

This portfolio is a reflection of my interest in the app development industry. It showcases my journey and life events
concerning my love for programming. The portfolio displays the technologies I use, showcases some of my work, and
includes a contact form for further communication.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Deployment](#deployment)

## Technologies Used

- React
- Framer Motion
- React Three Fiber
- React Parallax Tilt
- React Responsive
- React Router DOM
- React TSParticles
- React Vertical Timeline Component
- TypeScript
- Tailwind CSS
- Vite
- EmailJS

## Installation

To install the necessary dependencies, run the following command:

```bash
npm install
```

## Environment Variables

Copy `.env.example` to `.env` and fill in your EmailJS credentials:

```bash
cp .env.example .env
```

The following variables are required:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Usage

To start the application, run:

```bash
npm run dev
```

The application will be served at `http://localhost:5173`.

## Deployment

To build the application for production, run:

```bash
npm run build
```

To deploy the application to GitHub Pages, run:

```bash
npm run deploy
```

