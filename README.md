# Complaint_Portal

### Online complaint management for a college campus

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-000?logo=express&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)

Students used to file hostel and campus maintenance complaints on paper. This portal moves the whole process online for 5,000+ students: students raise and track complaints, workers are assigned, and admins see everything in one place.

## Features

- Student sign-in with **OTP verification**
- Raise complaints by category and track their status
- Workers are assigned to complaints and update progress
- Request validation with Zod on the backend

## Architecture

```mermaid
flowchart LR
    S["Student"] --> FE["React + Vite frontend<br/>StudentPortal · ContactInfo"]
    FE -->|REST · axios| BE["Express + TypeScript API<br/>user · complaint · worker · otp"]
    BE --> V["Zod validation"]
    BE --> DB[("PostgreSQL · Prisma<br/>user · complaint · worker")]
```

## Getting started

```bash
# Backend
cd Backend && npm install
npx prisma migrate dev
npx tsc && node dist/index.js

# Frontend
cd Frontend/Complaint-Portal && npm install && npm run dev
```
