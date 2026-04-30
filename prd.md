Tentu, ini adalah Product Requirements Document (PRD) yang disusun khusus untuk proyek web portofolio kamu, menggabungkan keahlian teknis kamu di Full-stack development dengan estetika desain yang bold dan performa yang optimal.

PRD: Personal Portfolio Website 2026
1. Project Overview
Project Name: Personal Portfolio Web (Professional & Modern)

Target Audience: Recruiters, potential freelance clients, and the tech community.

Objective: Menampilkan skillset sebagai Full-stack Developer dan Informatics Teacher, memamerkan proyek-proyek utama, serta mendemonstrasikan keahlian dalam optimasi performa web.

2. Technical Stack
Frontend: Next.js (App Router) + TypeScript.

Styling: Tailwind CSS (Modern, Bold, High-Contrast UI).

Animations: Framer Motion atau Magic UI.

Content Management: MDX (untuk blog/proyek tanpa database eksternal agar tetap ringan).

Deployment: Vercel.

Performance Goal: Google PageSpeed Score > 90 (Fokus pada LCP < 2.5s).

3. Core Features & Requirements
A. Hero Section (Visual Impact)
Feature: Header dengan animasi tipografi yang bold.

Requirement: Menampilkan profil singkat yang menonjolkan peran sebagai Developer & Educator.

UX: Tombol CTA "Download CV" dan "View My Work" yang responsif.

B. Project Showcase (Dynamic Cards)
Feature: List proyek (seperti Portal Sekolah, GenZSport, dll).

Requirement: Setiap kartu proyek harus memiliki:

Thumbnail dengan aspek rasio yang konsisten.

Tech stack badges (React, Laravel, Filament).

Deskripsi singkat tantangan teknis yang diselesaikan.

Link eksternal ke GitHub dan Live Demo.

C. Skill & Tech Orbit
Feature: Grid atau visualisasi interaktif dari skillset.

Requirement: Kategorisasi yang jelas (Frontend, Backend, Tools). Masukkan spesialisasi spesifik seperti Performance Optimization dan Technical Troubleshooting.

D. Experience & Education Timeline
Feature: Timeline vertikal yang bersih.

Requirement: Detail pengalaman mengajar di SMA Pertiwi Medan dan riwayat pendidikan S1 Sistem Informasi.

E. Micro-Blog / Knowledge Base
Feature: Halaman statis berisi artikel teknis singkat.

Requirement: Integrasi MDX untuk kemudahan penulisan artikel tentang troubleshooting atau optimasi web.

4. UI/UX Design Guidelines
Theme: Dark Mode secara default (dengan opsi Toggle Light Mode jika diperlukan).

Color Palette: High-contrast (Contoh: Background #000000, Text #FFFFFF, Accent #00FF00 atau #7C3AED).

Typography: Sans-serif yang modern dan tegas (seperti Inter atau Geist).

Accessibility: Kontras warna harus memenuhi standar WCAG agar tetap nyaman dibaca meskipun bold.

5. Non-Functional Requirements (Performance)
SEO: Implementasi Metadata API di Next.js untuk setiap halaman.

Image Optimization: Menggunakan komponen next/image untuk format WebP dan lazy loading.

Caching: Memanfaatkan Static Site Generation (SSG) agar waktu muat mendekati instan.

6. Success Metrics
Berhasil ter-deploy di Vercel tanpa error.

Skor Largest Contentful Paint (LCP) di bawah 2 detik pada perangkat mobile.

Navigasi yang lancar (Zero layout shift)