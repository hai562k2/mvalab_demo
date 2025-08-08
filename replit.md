# Overview

MVA Lab is a modern Vietnamese educational technology platform focused on industrial automation and modern industrialization training. The platform serves as a comprehensive learning management system offering specialized courses in PC Control, machine vision, frontend development, and industrial automation technologies. Built with React and Express.js, it provides an interactive learning experience with animated UI components and a professional industrial design aesthetic.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with vanilla JavaScript implementation (no build tools)
- **UI Library**: Tailwind CSS for styling with custom design system
- **Animations**: Framer Motion for smooth transitions and interactions
- **Component Structure**: Modular component-based architecture with dedicated sections
- **Styling Approach**: CSS-in-JS with Tailwind utility classes and custom CSS for specialized effects
- **State Management**: React hooks (useState, useEffect) for local component state
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts

## Backend Architecture
- **Server Framework**: Express.js 5.x with minimal configuration
- **Static File Serving**: Direct static file serving from root directory
- **Routing Strategy**: Single-page application with catch-all routing for React Router compatibility
- **Architecture Pattern**: Simple server setup focused on serving the React application

## Component Design Patterns
- **Atomic Design**: Components organized by functionality (Header, HeroSection, CoursesSection, etc.)
- **Animation Integration**: Intersection Observer API for scroll-triggered animations
- **Custom Hooks**: Reusable hooks for common functionality like intersection observation
- **Data Management**: Static data files for course information and content management

## Development Approach
- **No Build Process**: Direct browser execution using CDN-loaded libraries
- **Hot Development**: Simple file watching through static server
- **Styling Strategy**: Combination of Tailwind utilities and custom CSS for specialized industrial theming

# External Dependencies

## CDN Libraries
- **React & React DOM**: Version 18 via unpkg CDN for core framework functionality
- **Babel Standalone**: For JSX transpilation in the browser
- **Framer Motion**: Animation library for smooth UI transitions and effects
- **Tailwind CSS**: Utility-first CSS framework via CDN
- **Font Awesome**: Icon library for UI iconography
- **Google Fonts**: Inter font family for typography

## Node.js Dependencies
- **Express**: Web server framework for static file serving and routing
- **CORS**: Cross-Origin Resource Sharing middleware for API compatibility

## Browser APIs
- **Intersection Observer**: For scroll-triggered animations and visibility detection
- **Request Animation Frame**: For smooth counter animations and performance optimization

## Design Resources
- **Custom CSS**: Industrial-themed styling with circuit patterns and glass effects
- **Gradient System**: Custom color palette focused on teal/primary and orange accent colors
- **Typography**: Inter font family with multiple weights for professional appearance