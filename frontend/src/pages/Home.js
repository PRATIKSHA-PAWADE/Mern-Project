import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ButterPaneer from '../images/Butter Paneer Masla.jpg';
import MangoSmoothie from '../images/Mango-smoothie.jpg';
import PavBhaji from '../images/Pav Bhaji.jpg';
import ChanaMasala from '../images/Chana-Masala.jpg';
import PuranPoli from '../images/Puran Poli.jpg';
import VegetableBiryani from '../images/Vegetable Biryani.jpg';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newRecipe, setNewRecipe] = useState({ name: "", description: "", ingredients: "", image: "" });
  const [review, setReview] = useState("");

  useEffect(() => {
    setRecipes([
      { id: 1, name: "Paneer Butter Masala", image: ButterPaneer, time: "40 min", likes: 0, reviews: [] },
      { id: 2, name: "Mango Smoothie", image: MangoSmoothie, time: "10 min", likes: 0, reviews: [] },
      { id: 3, name: "Pav Bhaji", image: PavBhaji, time: "35 min", likes: 0, reviews: [] },
      { id: 4, name: "Chana Masala", image: ChanaMasala, time: "30 min", likes: 0, reviews: [] },
      { id: 5, name: "Puran Poli", image: PuranPoli, time: "50 min", likes: 0, reviews: [] },
      { id: 6, name: "Vegetable Biryani", image: VegetableBiryani, time: "60 min", likes: 0, reviews: [] },
    ]);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNewRecipeChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const handleAddRecipe = (e) => {
    e.preventDefault();
    if (!newRecipe.name || !newRecipe.description || !newRecipe.ingredients || !newRecipe.image) {
      alert("Please fill all the fields!");
      return;
    }

    const newRecipeData = {
      id: recipes.length + 1,
      name: newRecipe.name,
      description: newRecipe.description,
      ingredients: newRecipe.ingredients.split(","),
      image: newRecipe.image,
      time: "30 min",  // Default time, or allow user to input time
      likes: 0,
      reviews: []
    };

    setRecipes([...recipes, newRecipeData]);
    setNewRecipe({ name: "", description: "", ingredients: "", image: "" });
  };

  const handleLike = (id) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === id ? { ...recipe, likes: recipe.likes + 1 } : recipe
      )
    );
  };

  const handleDelete = (id) => {
    setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
  };

  const handleAddReview = (id, reviewText) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === id
          ? { ...recipe, reviews: [...recipe.reviews, reviewText] }
          : recipe
      )
    );
    setReview(""); // Clear review input after submitting
  };

  return (
    <div style={styles.container}>
      <Header />
      <Navbar />

      {/* Hero Section */}
      <div style={styles.hero}>
        <h2>Explore Delicious Recipes 🍜</h2>
        <p>Find easy, quick, and tasty recipes curated just for you.</p>
        <button style={styles.browseBtn}>Browse Recipes</button>
      </div>

      {/* Search Bar */}
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for a recipe..."
          style={styles.searchInput}
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Add Recipe Form */}
      <div style={styles.addRecipeForm}>
        <h3>Add a New Recipe</h3>
        <form onSubmit={handleAddRecipe} style={styles.recipeForm}>
          <input
            type="text"
            name="name"
            value={newRecipe.name}
            onChange={handleNewRecipeChange}
            placeholder="Recipe Name"
            style={styles.input}
            required
          />
          <input
            type="text"
            name="description"
            value={newRecipe.description}
            onChange={handleNewRecipeChange}
            placeholder="Description"
            style={styles.input}
            required
          />
          <input
            type="text"
            name="ingredients"
            value={newRecipe.ingredients}
            onChange={handleNewRecipeChange}
            placeholder="Ingredients (comma-separated)"
            style={styles.input}
            required
          />
          <input
            type="text"
            name="image"
            value={newRecipe.image}
            onChange={handleNewRecipeChange}
            placeholder="Image URL"
            style={styles.input}
            required
          />
          <button type="submit" style={styles.submitBtn}>Add Recipe</button>
        </form>
      </div>

      {/* Recipe Cards */}
      <div style={styles.recipeGrid}>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} style={styles.recipeCard}>
              <img
                src={recipe.image}
                alt={recipe.name}
                style={styles.recipeImg}
                onError={(e) => (e.target.src = `${process.env.PUBLIC_URL}/images/default.png`)} // Fallback for missing images
              />
              <h3>{recipe.name}</h3>
              <p>⏳ {recipe.time}</p>
              <p>👍 {recipe.likes} Likes</p>

              {/* Action Buttons */}
              <div style={styles.actionBtns}>
                <button onClick={() => handleLike(recipe.id)} style={styles.likeBtn}>Like</button>
                <button onClick={() => handleDelete(recipe.id)} style={styles.deleteBtn}>Delete</button>
                <Link to={`/edit/${recipe.id}`} style={styles.editBtn}>Edit</Link>
                <Link to={`/recipe/${recipe.id}`} style={styles.viewBtn}>View Recipe</Link>
              </div>

              {/* Review Section */}
              <div>
                <h4>Reviews</h4>
                {recipe.reviews.length > 0 ? (
                  <ul>
                    {recipe.reviews.map((review, index) => (
                      <li key={index}>{review}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No reviews yet.</p>
                )}
                <input
                  type="text"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Add a review"
                  style={styles.input}
                />
                <button
                  onClick={() => handleAddReview(recipe.id, review)}
                  style={styles.reviewBtn}
                >
                  Add Review
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
    background: "linear-gradient(to bottom, #ff6f00, #d50000)",
    color: "white",
    textAlign: "center",
  },
  hero: {
    margin: "40px 0",
  },
  browseBtn: {
    background: "white",
    color: "#ff6f00",
    padding: "12px 20px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "10px",
    fontSize: "16px",
  },
  searchContainer: {
    textAlign: "center",
    margin: "20px 0",
  },
  searchInput: {
    width: "50%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "16px",
    color: "black",
  },
  addRecipeForm: {
    margin: "30px 0",
    textAlign: "center",
  },
  recipeForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    maxWidth: "400px",
    margin: "auto",
  },
  input: {
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "16px",
    width: "100%",
    marginBottom: "10px",
  },
  submitBtn: {
    background: "#ff6f00",
    color: "white",
    padding: "12px 20px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
  },
  recipeGrid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    padding: "20px",
  },
  recipeCard: {
    background: "white",
    color: "black",
    width: "250px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    padding: "15px",
  },
  recipeImg: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
  likeBtn: {
    background: "green",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    margin: "5px",
  },
  deleteBtn: {
    background: "red",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    margin: "5px",
  },
  editBtn: {
    background: "blue",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    textDecoration: "none",
    margin: "5px",
  },
  viewBtn: {
    background: "orange",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    textDecoration: "none",
    margin: "5px",
  },
  reviewBtn: {
    background: "purple",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    margin: "5px",
  },
  actionBtns: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  },
};
