# Chucks Kitchen 🍽️

A modern food delivery web application built with React, designed to deliver authentic Nigerian cuisine through a seamless and intuitive user experience.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack Used](#tech-stack-used)
- [Project Structure](#project-structure)
- [Design Interpretation](#design-interpretation)
- [Assumptions Made](#assumptions-made)
- [Current Limitations](#current-limitations)
- [Future Improvements](#future-improvements)
- [Getting Started](#getting-started)
- [License](#license)
- [For Future Contributors](#for-future-contributors)

## Project Overview

Chucks Kitchen is a frontend-focused food delivery platform that allows users to:

- Onboard into the platform
- Sign up and log in
- Browse Nigerian dishes
- Add meals to cart
- Modify cart quantities
- Proceed through checkout
- View order summary

The application represents a modern restaurant ordering system optimized for both mobile and desktop users.

The goal of this project was to implement a clean UI, smooth navigation flow, and structured component architecture while following a Figma-based design system.

## Features

- Responsive layout (mobile-first design)
- User authentication UI
- Food browsing interface
- Add to cart functionality
- Quantity adjustment
- Order summary display
- Clean and modern UI transitions

## Tech Stack Used

### Frontend Framework
- **React 19.2.0**: Used for building reusable UI components and managing application state efficiently.

### Build Tool
- **Vite 7.3.1**: Chosen for fast development server startup and optimized production builds.

### Styling
- **Tailwind CSS 4.1.18**: Used for utility-first styling to ensure rapid UI development and consistent design implementation.

### Routing
- **React Router DOM 7.13.0**: Handles client-side routing and page navigation without full page reloads.

### Icons
- **Lucide React 0.564.0**: Used for lightweight and customizable SVG icons.

### Language
- **JavaScript (ES6+)**

### Package Manager
- **npm**

## Project Structure

```
src/
├── Components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── Chef.jsx
│
├── Pages/
│   ├── Onboarding.jsx
│   ├── Login.jsx
│   ├── SignUp.jsx
│   ├── Home.jsx
│   ├── CartPage.jsx
│   └── OrderSummary.jsx
│
├── App.jsx
└── main.jsx
```

### Structure Explanation

#### Components Folder
Contains reusable UI components shared across multiple pages.
- **Navbar.jsx**: Handles navigation between routes and displays cart access.
- **Footer.jsx**: Displays footer content and branding.
- **Chef.jsx**: Responsible for rendering menu items dynamically.

#### Pages Folder
Contains route-based page components.
- **Onboarding.jsx**: Entry page introducing users to the platform.
- **Login.jsx / SignUp.jsx**: Authentication interfaces.
- **Home.jsx**: Main food listing page where users browse menu items.
- **CartPage.jsx**: Displays cart items and allows quantity management.
- **OrderSummary.jsx**: Displays final order confirmation details.

#### Core Files
- **App.jsx**: Defines application routes and layout structure.
- **main.jsx**: Application entry point where React is mounted to the DOM.

## Design Interpretation

The UI was implemented based on a Figma design system emphasizing:

- Orange-based color palette
- Clean card layout for food items
- Minimalist typography
- Rounded buttons and containers
- Smooth spacing hierarchy

### Translation Approach
- Converted Figma spacing system into Tailwind utility classes.
- Implemented consistent padding and margin scales.
- Used reusable card layouts for food items.
- Maintained design consistency across breakpoints.
- Used Flexbox and Grid for layout structuring.

## Assumptions Made

Due to missing design details:

- No backend API was provided, so food data is statically managed.
- Authentication is currently frontend-only (no real validation or database).
- Order tracking is simulated.
- No loading states or error boundaries were defined in design, so minimal handling was implemented.

## Current Limitations

- No backend integration
- No persistent cart (state resets on refresh)
- No real authentication system
- No payment gateway integration
- No global state management (e.g., Context API or Redux)
- No API data fetching (static data only)

## Future Improvements

If given more time, the following improvements would be implemented:

1.  **Backend Integration**
    - Connect to a Node/Express or Supabase backend.
    - Store users, orders, and cart data in a database.
2.  **State Management Upgrade**
    - Introduce Context API or Redux for scalable state handling.
3.  **Persistent Cart**
    - Use `localStorage` or backend session storage.
4.  **Authentication System**
    - Implement JWT authentication.
    - Add protected routes.
5.  **Payment Integration**
    - Integrate Paystack or Stripe.
6.  **Performance Optimization**
    - Lazy loading routes
    - Code splitting
    - Memoization for expensive components
7.  **UI/UX Enhancements**
    - Loading skeletons
    - Toast notifications
    - Error boundaries
    - Dark mode support

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation
```bash
git clone <repository-url>
cd chucks-kitchen
npm install
npm run dev
```

Open your browser to:
`http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## License

[MIT License](LICENSE)

## For Future Contributors

This project follows a component-based architecture.

If extending the project:

- Keep components reusable.
- Maintain Tailwind design consistency.
- Avoid inline styles.
- Separate logic from UI where possible.
- Introduce centralized state management before scaling features.