import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddRecipe() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [time, setTime] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleAddRecipe = (e) => {
    e.preventDefault();
    console.log("Recipe Added:", name, image, time, ingredients, instructions);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the image as base64 string
      };
      reader.readAsDataURL(file); // Convert the file to base64
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Add a New Recipe</h2>
        <form onSubmit={handleAddRecipe}>
          <input
            type="text"
            placeholder="Recipe Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={styles.input}
          />
          {image && (
            <div style={styles.imagePreview}>
              <img src={image} alt="Recipe" style={styles.image} />
            </div>
          )}
          <input
            type="text"
            placeholder="Cooking Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={styles.input}
          />
          <textarea
            placeholder="Ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            style={styles.textarea}
          />
          <textarea
            placeholder="Instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            style={styles.textarea}
          />
          <button type="submit" style={styles.button}>Add Recipe</button>
        </form>
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
  formContainer: {
    background: "#fff",
    padding: "40px 60px",
    borderRadius: "12px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "100%",
    maxWidth: "600px",
    minHeight: "500px",
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
  textarea: {
    width: "100%",
    padding: "15px",
    margin: "15px 0",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "18px",
    boxSizing: "border-box",
    height: "150px",
    resize: "none",
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
  backText: { 
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
  imagePreview: {
    marginTop: "15px",
    marginBottom: "15px",
  },
  image: {
    width: "100%",
    maxHeight: "300px",
    objectFit: "contain",
    borderRadius: "8px",
  },
};


          