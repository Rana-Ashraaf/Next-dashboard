# Admin Dashboard

A simple admin dashboard built with Next.js, TailwindCSS, and React Context for state management.

## Features

- **Static Login**: Simple username/password authentication (just checks if both fields are filled)
- **Protected Routes**: Middleware-based route protection
- **Responsive Sidebar Layout**: Clean navigation with dashboard, products, and settings
- **Products Management**: Full CRUD operations with mock API integration
- **Cookie-based Authentication**: Secure token storage and management

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Login
- Navigate to `/login`
- Enter any username and password (both fields must be filled)
- You'll be redirected to the dashboard

### Dashboard
- Welcome page with overview cards and quick actions
- Access via `/dashboard`

### Products
- View, add, edit, and delete products
- Data is fetched from: https://62fb62afe4bcaf5351837ac1.mockapi.io/product
- Access via `/products`

### Settings
- Empty page as requested
- Access via `/settings`

### Logout
- Click the logout button in the sidebar
- Removes authentication token and redirects to login

## Project Structure

```
src/
├── app/
│   ├── dashboard/
│   ├── login/
│   ├── products/
│   ├── settings/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── DashboardLayout.tsx
│   ├── ProductModal.tsx
│   └── Sidebar.tsx
├── contexts/
│   └── AuthContext.tsx
├── types/
│   └── product.ts
└── middleware.ts
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety
- **TailwindCSS**: Utility-first CSS framework
- **React Context**: State management
- **Heroicons**: Icon library
- **js-cookie**: Cookie management
- **Mock API**: External product data source
