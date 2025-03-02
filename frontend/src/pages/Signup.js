import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate for redirection
import { Link } from "react-router-dom"; // For navigation to login page

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigate for redirection

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Check if the user already exists
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email) {
      setError("Email already exists. Please log in.");
      return;
    }

    // Store new user data in localStorage
    const newUser = { name, email, password };
    localStorage.setItem("user", JSON.stringify(newUser));

    // Redirect to login page after successful signup
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        {error && <p style={styles.errorText}>{error}</p>}
        <p style={styles.loginText}>
          Already have an account? <Link to="/login" style={styles.link}>Login</Link>
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
  formContainer: {
    background: "#fff",
    padding: "40px 60px",
    borderRadius: "12px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "100%",
    maxWidth: "600px",
    minHeight: "400px",
    transition: "transform 0.3s ease",
  },
  title: { 
    fontSize: "28px", 
    fontWeight: "bold", 
    marginBottom: "30px", 
    color: "#333" 
  },
  input: {
    width: "100%",
    padding: "15px",
    margin: "15px 0",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "18px",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "15px",
    background: "#ff6f00",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "18px",
    transition: "background-color 0.3s ease",
  },
  loginText: { 
    marginTop: "20px", 
    fontSize: "16px", 
    color: "#666" 
  },
  link: { 
    color: "#ff6f00", 
    textDecoration: "none", 
    fontWeight: "bold",
    transition: "color 0.3s ease",
  },
  errorText: {
    color: "red",
    marginTop: "10px",
  },
};

