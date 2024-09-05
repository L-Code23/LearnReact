import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot

function CustomPage() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./react-logo.png" className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2024 Louder development. All rights reserved.</small>
    </footer>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React!</h1>
      <ol>
        <li>I'm excited about building web apps and custom pages with React</li>
        <li>I'm excited to be adding another skill to my tool belt</li>
      </ol>
    </div>
  );
}

// Get the root DOM element
const rootElement = document.getElementById("root");

// Ensure the root element exists before rendering
if (rootElement) {
  const root = createRoot(rootElement); // Create the root using createRoot
  root.render(<CustomPage />); // Render the app
} else {
  console.error("Target container is not a DOM element.");
}
