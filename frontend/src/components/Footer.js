// src/components/Footer.js
import React from 'react';

const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.section}>
      <h3 style={styles.title}>Contact Us</h3>
      <p style={styles.text}>📧 Email: <a href="mailto:support@foodieshub.com" style={styles.link}>support@foodieshub.com</a></p>
      <p style={styles.text}>📞 Phone: <a href="tel:+1234567890" style={styles.link}>+123 456 7890</a></p>
    </div>

    <div style={styles.section}>
      <h4 style={styles.title}>Quick Links</h4>
      <ul style={styles.list}>
        <li><a href="/terms" style={styles.link}>Terms</a></li>
        <li><a href="/privacy" style={styles.link}>Privacy</a></li>
        <li><a href="/faq" style={styles.link}>FAQs</a></li>
      </ul>
    </div>

    <div style={styles.footerBottom}>
      <p style={styles.footerText}>© 2025 Foodies Hub. All Rights Reserved.</p>
    </div>
  </footer>
);

const styles = {
  footer: {
    background: "#333", color: "white", padding: "20px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
  },
  section: { flex: "1", marginBottom: "20px" },
  title: { fontSize: "18px", fontWeight: "bold", marginBottom: "10px" },
  text: { fontSize: "16px", marginBottom: "8px" },
  link: { color: "#ff6f00", textDecoration: "none" },
  list: { listStyle: "none", padding: "0" },
  socialLinks: { display: "flex", justifyContent: "space-between", marginTop: "10px" },
  socialIcon: { color: "white", textDecoration: "none", margin: "0 10px", fontSize: "16px", fontWeight: "bold" },
  footerBottom: { width: "100%", borderTop: "1px solid #ddd", paddingTop: "10px", textAlign: "center" },
  footerText: { fontSize: "12px" }
};

export default Footer;
