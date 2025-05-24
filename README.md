Issue Tracker App

A clean and efficient Issue Tracker built with Next.js, MySQL, and Prisma. This app helps you manage and track project issues and tasks with ease.

Features

Create, update, and delete issues

Track issue statuses (Open, In Progress, Closed)

Filter and search issues

Responsive and modern UI

Backend API routes with Next.js

Uses MySQL (hosted on Aiven) with Prisma ORM


Tech Stack

Frontend: Next.js, React, Tailwind CSS

Backend: Next.js API Routes

Database: MySQL (Aiven)

ORM: Prisma


Installation

# Clone the repository
git clone https://github.com/yourusername/issue-tracker-app.git
cd issue-tracker-app

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Fill in your MySQL database connection string

# Run the development server
npx prisma generate
npm run dev

Environment Variables

Create a .env file and add the following:

DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"

> Replace with your actual Aiven MySQL credentials.



Database Setup

Run Prisma migrations to set up the database schema:

npx prisma migrate dev --name init

Folder Structure

/pages         - Next.js pages and API routes
/components    - Reusable UI components
/prisma        - Prisma schema and client
/styles        - Tailwind CSS styles
/public        - Static assets

Future Enhancements

Add user authentication

Add comments for each issue

Notifications for status updates

Sort and advanced filters
