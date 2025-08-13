# Frontend Mentor - Time tracking dashboard

![Design preview for the Time tracking dashboard coding challenge](./preview.jpg)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How I Built It](#how-i-built-it)
  - [HTML Structure](#html-structure)
  - [CSS Structure](#css-structure)
  - [JavaScript Structure](#javascript-structure)
  - [Biggest Challenge](#biggest-challenge)
- [Deploy](#deploy)

---

## Overview

This project is a **Time Tracking Dashboard** displaying multiple activities: **Work**, **Play**, **Study**, **Exercise**, **Social**, and **Self-care**.  
For each activity, the dashboard shows the hours spent based on three timeframes: **Daily**, **Weekly**, and **Monthly**.

It is based on the [Frontend Mentor](https://www.frontendmentor.io) challenge and works on both desktop and mobile layouts.  
The timeframe can be changed by clicking directly on the text labels (“Daily”, “Weekly”, “Monthly”).  
Data is written directly in the HTML and updated via JavaScript (no external JSON storage in this version).

---

## Features

| Feature                | Description                                                              |
| ---------------------- | ------------------------------------------------------------------------ |
| Responsive Layout      | CSS Grid for the main dashboard and Flexbox for internal card alignment  |
| Timeframe Switching    | Click on **Daily**, **Weekly**, or **Monthly** text to update the hours  |
| Active State Styling   | Highlights the currently selected timeframe                              |
| Mobile Text Adaptation | Changes **"Preview"** text to **"Last"** on mobile view using JavaScript |

---

## Tech Stack

- **HTML5**
- **CSS3** (CSS Grid, Flexbox, Media Queries)
- **JavaScript** (DOM manipulation, event handling)

---

## How I Built It

### HTML Structure

- Used semantic `<section>` only for the **profile card**.
- All activity cards are wrapped inside `<div>` elements.
- The `.dashboard` class is the main container for the grid layout.

### CSS Structure

- `.dashboard` uses **CSS Grid** to organize the profile and activity cards.
- **Flexbox** is used:
  - In `body` to center content
  - In `.profile-info` to align profile details
  - In `.time-filters` for spacing the Daily/Weekly/Monthly options
  - In `.card-header` and inside `.card` for vertical and horizontal alignment
- Color variables and breakpoints are used for maintainability.

### JavaScript Structure

- Selects clickable elements (Daily, Weekly, Monthly) by class.
- Variables store the corresponding hour elements for each timeframe: `.daily`, `.weekly`, `.monthly`.
- `show(period)` function:
  - Hides all other timeframes
  - Displays only the selected one
  - Updates the hours accordingly
- Mobile-specific behavior:
  - Replaces “Preview” text with “Last” dynamically using DOM methods.

### Biggest Challenge

The main challenge was linking each activity’s hours to its corresponding timeframe without code repetition.
Another challenge was dynamically replacing “Preview” with “Last” only on mobile, which required precise DOM targeting and conditional checks.

You can view the live demo here: [Live Site](https://time-tracking-dashboard-m.netlify.app/)
