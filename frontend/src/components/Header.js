// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>🍴 Recipe Hub</h1>
      <div style={styles.navLinks}>
        <Link to="/login" style={styles.authBtn}>Login</Link>
        <Link to="/signup" style={styles.authBtn}>Sign Up</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    background: "#5a2d0c",  
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    fontSize: "28px",  
    fontWeight: "bold",
    color: "white",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",  
    fontWeight: "bold",
  },
  authBtn: {
    background: "white",
    color: "#5a2d0c",
    padding: "8px 16px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "14px",
  },
};

export default Header;
