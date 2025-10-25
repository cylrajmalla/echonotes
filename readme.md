Voice Notes App Layout Component
This React component provides the layout structure for a voice notes application, featuring a header, main content area, and a bottom navigation bar. It utilizes React Router for navigation and the Lucide icon set for visual elements.

Features
Header: Displays the app title "Voice Notes" with a microphone icon and subtitle "Record & Remember".

Responsive Navigation: Bottom navigation with two main sections—Notes and Record—highlighting the active page.

Styling: Gradient backgrounds, smooth transitions, and animation effects using Tailwind CSS classes and custom CSS variables.

React Router Integration: Uses useLocation and Link from react-router-dom for client-side routing.

Iconography: Uses the Lucide React icons (Mic, List, Plus) for a clean UI.

Installation
Ensure you have the following dependencies:

react

react-router-dom

lucide-react

Tailwind CSS for styling

Install via npm or yarn if needed:

bash
npm install react react-router-dom lucide-react
or

bash
yarn add react react-router-dom lucide-react
Usage
Import and use the Layout component to wrap your page contents and provide consistent navigation and styling:

jsx
import Layout from './Layout';

function App() {
  return (
    <Layout currentPageName="Notes">
      {/* Your page content here */}
    </Layout>
  );
}
Component Breakdown
navItems: An array defining navigation links including the name, icon component, and path.

useLocation: React Router hook used to determine the current path for active link styling.

CSS Variables: Defined for primary colors used in gradients and themes.

Navigation Styling: Active links have a gradient background, shadow, scaling, and icon animation.

Customization
Modify the navItems array to add or remove navigation options.

Change colors in the CSS variables for different theme effects.

Extend the header or footer sections as needed.
