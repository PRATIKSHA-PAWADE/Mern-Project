import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>🍕 Foodies Hub</h1>

      {/* Mobile Menu Button */}
      <button style={styles.menuBtn} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <div style={{ ...styles.navLinks, display: isOpen ? "flex" : "flex" }}>
        {/* Left side links */}
        <ul style={styles.leftLinks}>
          <li>
            <Link to="/Addrecipe" style={styles.link} onClick={() => setIsOpen(false)}>
              Add Recipe
            </Link>
          </li>
          <li>
            <Link to="/EditRecipe" style={styles.link} onClick={() => setIsOpen(false)}>
              Edit Recipe
            </Link>
          </li>
          <li>
            <Link to="/Profile" style={styles.link} onClick={() => setIsOpen(false)}>
              Profile
            </Link>
          </li>
        </ul>

        {/* Right side links */}
        <ul style={styles.rightLinks}>
          <li>
            <Link to="/" style={styles.link} onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" style={styles.link} onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// ✅ Custom Inline Styles
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px", // Adjust padding for better spacing
    background: "#ff7043",
    color: "white",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    position: "relative",
    zIndex: 100,
  },
  logo: {
    fontSize: "2rem", // Bigger font size for a more prominent title
    fontWeight: "bold",
    cursor: "pointer",
    textTransform: "uppercase", // Make the title uppercase
    letterSpacing: "2px", // Add letter spacing for a cleaner look
  },
  navLinks: {
    display: "flex", // Use flex to align left and right links horizontally
    justifyContent: "space-between", // Ensure links are spread out to both sides
    width: "60%", // Limiting the width to prevent it from being too broad
    background: "#ff7043",
    flexDirection: "row", // Align the links horizontally
    padding: "10px 0",
  },
  leftLinks: {
    display: "flex",
    flexDirection: "row", // Horizontal links on the left
    alignItems: "center", // Align links horizontally on the left side
    gap: "30px", // Add space between links
    listStyle: "none", // Remove list styles
    margin: "0", // Remove default margin
  },
  rightLinks: {
    display: "flex",
    flexDirection: "row", // Horizontal links on the right
    alignItems: "center", // Align links horizontally on the right side
    gap: "30px", // Add space between links
    listStyle: "none", // Remove list styles
    margin: "0", // Remove default margin
  },
  link: {
    display: "block",
    textDecoration: "none",
    color: "white",
    fontSize: "1.2rem",
    padding: "10px 20px",
    transition: "0.3s ease-in-out",
  },
  menuBtn: {
    fontSize: "2rem",
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
    display: "none",  // Hidden by default on desktop
  },

  // Mobile Styles
  "@media (max-width: 768px)": {
    navbar: {
      flexDirection: "column",
      justifyContent: "center",
    },
    menuBtn: {
      display: "block", // Show menu button on small screens
    },
    navLinks: {
      display: "flex",  // Show nav links in a column on mobile
      flexDirection: "column",
      width: "100%",
      position: "absolute",
      top: "60px",
      left: "0",
      backgroundColor: "#ff7043",
      padding: "15px 0",
    },
    leftLinks: {
      alignItems: "center", // Center the left side links on mobile
    },
    rightLinks: {
      alignItems: "center", // Center the right side links on mobile
    },
  },
};

export default Navbar;
