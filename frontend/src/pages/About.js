import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div style={styles.container}>
      <div style={styles.contentContainer}>
        <h2 style={styles.title}>About Our Recipe Sharing Platform</h2>
        <p style={styles.description}>
          Welcome to our Recipe Sharing Platform! This platform allows food
          enthusiasts to share their favorite recipes with others. Whether you
          are a seasoned chef or just starting in the kitchen, you’ll find
          inspiration and support from our community of passionate home cooks.
        </p>
        <h3 style={styles.subtitle}>Our Mission</h3>
        <p style={styles.description}>
          Our mission is to bring people together through the joy of cooking and
          sharing. We believe food is more than just sustenance—it’s a way to
          connect with others, celebrate cultures, and create lasting memories.
        </p>
        <h3 style={styles.subtitle}>What We Offer</h3>
        <ul style={styles.list}>
          <li>Easy-to-follow recipes for all skill levels</li>
          <li>A community where you can share your culinary creations</li>
          <li>Helpful tips and tricks to improve your cooking skills</li>
          <li>Step-by-step video guides and photos</li>
        </ul>
        <p style={styles.backText}>
          <Link to="/" style={styles.link}>Back to Home</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(to bottom, #FF512F, #DD2476)",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    padding: "0 20px",
  },
  contentContainer: {
    background: "#fff",
    padding: "40px 60px",
    borderRadius: "12px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "100%",
    maxWidth: "800px",
    minHeight: "400px",
    transition: "transform 0.3s ease",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  description: {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "30px",
    color: "#333",
  },
  list: {
    textAlign: "left",
    margin: "20px 0",
    paddingLeft: "20px",
  },
  backText: {
    marginTop: "20px",
    fontSize: "16px",
    color: "#666",
  },
  link: {
    color: "#ff6f00",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  },
};
