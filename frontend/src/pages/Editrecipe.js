// // // // // // EditRecipe.js
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { useParams, useNavigate } from 'react-router-dom';

// // // // // const EditRecipe = () => {
// // // // //   const { id } = useParams(); // Get the recipe ID from the URL
// // // // //   const navigate = useNavigate();
  
// // // // //   // Dummy data for the recipe (replace with your own data management)
// // // // //   const [recipe, setRecipe] = useState({
// // // // //     name: '',
// // // // //     time: '',
// // // // //     image: '',
// // // // //   });

// // // // //   useEffect(() => {
// // // // //     // Fetch the recipe data based on the ID (this would be a real API call or data fetching)
// // // // //     const fetchedRecipe = {
// // // // //       id: id,
// // // // //       name: "Paneer Butter Masala",
// // // // //       time: "40 min",
// // // // //       image: '/images/Butter Paneer Masla.jpg',
// // // // //     };
// // // // //     setRecipe(fetchedRecipe);
// // // // //   }, [id]);

// // // // //   const handleChange = (e) => {
// // // // //     setRecipe({
// // // // //       ...recipe,
// // // // //       [e.target.name]: e.target.value,
// // // // //     });
// // // // //   };

// // // // //   const handleSubmit = (e) => {
// // // // //     e.preventDefault();
// // // // //     // Save the edited recipe (e.g., send it to an API or update state)
// // // // //     console.log('Updated recipe:', recipe);
// // // // //     navigate('/'); // Redirect to home after saving
// // // // //   };

// // // // //   return (
// // // // //     <div style={styles.container}>
// // // // //       <h2>Edit Recipe</h2>
// // // // //       <form onSubmit={handleSubmit}>
// // // // //         <input
// // // // //           type="text"
// // // // //           name="name"
// // // // //           value={recipe.name}
// // // // //           onChange={handleChange}
// // // // //           placeholder="Recipe Name"
// // // // //           style={styles.input}
// // // // //         />
// // // // //         <input
// // // // //           type="text"
// // // // //           name="time"
// // // // //           value={recipe.time}
// // // // //           onChange={handleChange}
// // // // //           placeholder="Cooking Time"
// // // // //           style={styles.input}
// // // // //         />
// // // // //         <input
// // // // //           type="text"
// // // // //           name="image"
// // // // //           value={recipe.image}
// // // // //           onChange={handleChange}
// // // // //           placeholder="Image URL"
// // // // //           style={styles.input}
// // // // //         />
// // // // //         <button type="submit" style={styles.button}>Save Recipe</button>
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // const styles = {
// // // // //   container: {
// // // // //     fontFamily: 'Arial, sans-serif',
// // // // //     margin: '20px auto',
// // // // //     width: '60%',
// // // // //     padding: '20px',
// // // // //     background: '#f4f4f4',
// // // // //     borderRadius: '8px',
// // // // //     textAlign: 'center',
// // // // //   },
// // // // //   input: {
// // // // //     width: '80%',
// // // // //     padding: '10px',
// // // // //     margin: '10px',
// // // // //     fontSize: '16px',
// // // // //     borderRadius: '5px',
// // // // //     border: '1px solid #ccc',
// // // // //   },
// // // // //   button: {
// // // // //     padding: '10px 20px',
// // // // //     background: '#ff6f00',
// // // // //     color: 'white',
// // // // //     borderRadius: '5px',
// // // // //     border: 'none',
// // // // //     fontWeight: 'bold',
// // // // //     cursor: 'pointer',
// // // // //   },
// // // // // };

// // // // // export default EditRecipe;
// // // // // import React, { useState, useEffect } from "react";
// // // // // import { Link } from "react-router-dom";
// // // // // import ButterPaneer from '../images/Butter Paneer Masla.jpg';
// // // // // import MangoSmoothie from '../images/Mango-smoothie.jpg';
// // // // // import PavBhaji from '../images/Pav Bhaji.jpg';
// // // // // import ChanaMasala from '../images/Chana-Masala.jpg';
// // // // // import PuranPoli from '../images/Puran Poli.jpg';
// // // // // import VegetableBiryani from '../images/Vegetable Biryani.jpg';
// // // // // import Navbar from '../components/Navbar';
// // // // // import Header from '../components/Header';
// // // // // import Footer from '../components/Footer';

// // // // // export default function Home() {
// // // // //   const [recipes, setRecipes] = useState([]);
// // // // //   const [searchTerm, setSearchTerm] = useState("");
// // // // //   const [newRecipe, setNewRecipe] = useState({
// // // // //     name: "",
// // // // //     description: "",
// // // // //     ingredients: "",
// // // // //     image: "",
// // // // //   });
// // // // //   const [review, setReview] = useState("");

// // // // //   useEffect(() => {
// // // // //     setRecipes([
// // // // //       { id: 1, name: "Paneer Butter Masala", image: ButterPaneer, time: "40 min", likes: 0, reviews: [] },
// // // // //       { id: 2, name: "Mango Smoothie", image: MangoSmoothie, time: "10 min", likes: 0, reviews: [] },
// // // // //       { id: 3, name: "Pav Bhaji", image: PavBhaji, time: "35 min", likes: 0, reviews: [] },
// // // // //       { id: 4, name: "Chana Masala", image: ChanaMasala, time: "30 min", likes: 0, reviews: [] },
// // // // //       { id: 5, name: "Puran Poli", image: PuranPoli, time: "50 min", likes: 0, reviews: [] },
// // // // //       { id: 6, name: "Vegetable Biryani", image: VegetableBiryani, time: "60 min", likes: 0, reviews: [] },
// // // // //     ]);
// // // // //   }, []);

// // // // //   const handleSearchChange = (e) => {
// // // // //     setSearchTerm(e.target.value);
// // // // //   };

// // // // //   const filteredRecipes = recipes.filter((recipe) =>
// // // // //     recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
// // // // //   );

// // // // //   const handleNewRecipeChange = (e) => {
// // // // //     setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
// // // // //   };

// // // // //   const handleAddRecipe = (e) => {
// // // // //     e.preventDefault();
// // // // //     if (!newRecipe.name || !newRecipe.description || !newRecipe.ingredients || !newRecipe.image) {
// // // // //       alert("Please fill all the fields!");
// // // // //       return;
// // // // //     }

// // // // //     const newRecipeData = {
// // // // //       id: recipes.length + 1,
// // // // //       name: newRecipe.name,
// // // // //       description: newRecipe.description,
// // // // //       ingredients: newRecipe.ingredients.split(","),
// // // // //       image: newRecipe.image,
// // // // //       time: "30 min", // Default time, or allow user to input time
// // // // //       likes: 0,
// // // // //       reviews: []
// // // // //     };

// // // // //     setRecipes([...recipes, newRecipeData]);
// // // // //     setNewRecipe({ name: "", description: "", ingredients: "", image: "" });
// // // // //   };

// // // // //   const handleLike = (id) => {
// // // // //     setRecipes((prevRecipes) =>
// // // // //       prevRecipes.map((recipe) =>
// // // // //         recipe.id === id ? { ...recipe, likes: recipe.likes + 1 } : recipe
// // // // //       )
// // // // //     );
// // // // //   };

// // // // //   const handleDelete = (id) => {
// // // // //     setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
// // // // //   };

// // // // //   const handleAddReview = (id, reviewText) => {
// // // // //     setRecipes((prevRecipes) =>
// // // // //       prevRecipes.map((recipe) =>
// // // // //         recipe.id === id
// // // // //           ? { ...recipe, reviews: [...recipe.reviews, reviewText] }
// // // // //           : recipe
// // // // //       )
// // // // //     );
// // // // //     setReview(""); // Clear review input after submitting
// // // // //   };

// // // // //   return (
// // // // //     <div style={styles.container}>
// // // // //       <Header />
// // // // //       <Navbar />

// // // // //       {/* Hero Section */}
// // // // //       <div style={styles.hero}>
// // // // //         <h2>Explore Delicious Recipes 🍜</h2>
// // // // //         <p>Find easy, quick, and tasty recipes curated just for you.</p>
// // // // //         <button style={styles.browseBtn}>Browse Recipes</button>
// // // // //       </div>

// // // // //       {/* Search Bar */}
// // // // //       <div style={styles.searchContainer}>
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="Search for a recipe..."
// // // // //           style={styles.searchInput}
// // // // //           value={searchTerm}
// // // // //           onChange={handleSearchChange}
// // // // //         />
// // // // //       </div>

// // // // //       {/* Add Recipe Form */}
// // // // //       <div style={styles.addRecipeForm}>
// // // // //         <h3>Add a New Recipe</h3>
// // // // //         <form onSubmit={handleAddRecipe} style={styles.recipeForm}>
// // // // //           <input
// // // // //             type="text"
// // // // //             name="name"
// // // // //             value={newRecipe.name}
// // // // //             onChange={handleNewRecipeChange}
// // // // //             placeholder="Recipe Name"
// // // // //             style={styles.input}
// // // // //             required
// // // // //           />
// // // // //           <input
// // // // //             type="text"
// // // // //             name="description"
// // // // //             value={newRecipe.description}
// // // // //             onChange={handleNewRecipeChange}
// // // // //             placeholder="Description"
// // // // //             style={styles.input}
// // // // //             required
// // // // //           />
// // // // //           <input
// // // // //             type="text"
// // // // //             name="ingredients"
// // // // //             value={newRecipe.ingredients}
// // // // //             onChange={handleNewRecipeChange}
// // // // //             placeholder="Ingredients (comma-separated)"
// // // // //             style={styles.input}
// // // // //             required
// // // // //           />
// // // // //           <input
// // // // //             type="text"
// // // // //             name="image"
// // // // //             value={newRecipe.image}
// // // // //             onChange={handleNewRecipeChange}
// // // // //             placeholder="Image URL"
// // // // //             style={styles.input}
// // // // //             required
// // // // //           />
// // // // //           <button type="submit" style={styles.submitBtn}>Add Recipe</button>
// // // // //         </form>
// // // // //       </div>

// // // // //       {/* Recipe Cards */}
// // // // //       <div style={styles.recipeGrid}>
// // // // //         {filteredRecipes.length > 0 ? (
// // // // //           filteredRecipes.map((recipe) => (
// // // // //             <div key={recipe.id} style={styles.recipeCard}>
// // // // //               <img
// // // // //                 src={recipe.image}
// // // // //                 alt={recipe.name}
// // // // //                 style={styles.recipeImg}
// // // // //                 onError={(e) => (e.target.src = `${process.env.PUBLIC_URL}/images/default.png`)} // Fallback for missing images
// // // // //               />
// // // // //               <h3>{recipe.name}</h3>
// // // // //               <p>⏳ {recipe.time}</p>
// // // // //               <p>👍 {recipe.likes} Likes</p>

// // // // //               {/* Action Buttons */}
// // // // //               <div style={styles.actionBtns}>
// // // // //                 <button onClick={() => handleLike(recipe.id)} style={styles.likeBtn}>Like</button>
// // // // //                 <button onClick={() => handleDelete(recipe.id)} style={styles.deleteBtn}>Delete</button>
// // // // //                 <Link to={`/edit/${recipe.id}`} style={styles.editBtn}>Edit</Link>
// // // // //                 <Link to={`/recipe/${recipe.id}`} style={styles.viewBtn}>View Recipe</Link>
// // // // //               </div>

// // // // //               {/* Review Section */}
// // // // //               <div>
// // // // //                 <h4>Reviews</h4>
// // // // //                 {recipe.reviews.length > 0 ? (
// // // // //                   <ul>
// // // // //                     {recipe.reviews.map((review, index) => (
// // // // //                       <li key={index}>{review}</li>
// // // // //                     ))}
// // // // //                   </ul>
// // // // //                 ) : (
// // // // //                   <p>No reviews yet.</p>
// // // // //                 )}
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   value={review}
// // // // //                   onChange={(e) => setReview(e.target.value)}
// // // // //                   placeholder="Add a review"
// // // // //                   style={styles.input}
// // // // //                 />
// // // // //                 <button
// // // // //                   onClick={() => handleAddReview(recipe.id, review)}
// // // // //                   style={styles.reviewBtn}
// // // // //                 >
// // // // //                   Add Review
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))
// // // // //         ) : (
// // // // //           <p>No recipes found</p>
// // // // //         )}
// // // // //       </div>

// // // // //       <Footer />
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // const styles = {
// // // // //   container: {
// // // // //     fontFamily: "Arial, sans-serif",
// // // // //     margin: 0,
// // // // //     padding: 0,
// // // // //     background: "linear-gradient(to bottom, #ffb74d, #ff7043)", // Softer gradient
// // // // //     color: "white",
// // // // //     textAlign: "center",
// // // // //   },
// // // // //   hero: {
// // // // //     margin: "60px 0",
// // // // //     padding: "20px",
// // // // //     backgroundColor: "#ff6f00",
// // // // //     color: "white",
// // // // //     borderRadius: "8px",
// // // // //     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
// // // // //   },
// // // // //   browseBtn: {
// // // // //     background: "white",
// // // // //     color: "#ff6f00",
// // // // //     padding: "12px 20px",
// // // // //     borderRadius: "6px",
// // // // //     border: "none",
// // // // //     cursor: "pointer",
// // // // //     fontWeight: "bold",
// // // // //     marginTop: "15px",
// // // // //     fontSize: "16px",
// // // // //     transition: "all 0.3s ease",
// // // // //   },
// // // // //   searchContainer: {
// // // // //     margin: "40px 0",
// // // // //   },
// // // // //   searchInput: {
// // // // //     width: "60%",
// // // // //     padding: "12px",
// // // // //     borderRadius: "6px",
// // // // //     border: "1px solid #ddd",
// // // // //     fontSize: "16px",
// // // // //     color: "black",
// // // // //     margin: "auto",
// // // // //   },
// // // // //   addRecipeForm: {
// // // // //     margin: "50px 0",
// // // // //     textAlign: "center",
// // // // //     padding: "20px",
// // // // //     backgroundColor: "white",
// // // // //     borderRadius: "8px",
// // // // //     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
// // // // //   },
// // // // //   recipeForm: {
// // // // //     display: "flex",
// // // // //     flexDirection: "column",
// // // // //     alignItems: "center",
// // // // //     gap: "15px",
// // // // //     maxWidth: "500px",
// // // // //     margin: "auto",
// // // // //   },
// // // // //   input: {
// // // // //     padding: "12px",
// // // // //     borderRadius: "6px",
// // // // //     border: "1px solid #ddd",
// // // // //     fontSize: "16px",
// // // // //     width: "100%",
// // // // //     marginBottom: "15px",
// // // // //   },
// // // // //   submitBtn: {
// // // // //     background: "#ff6f00",
// // // // //     color: "white",
// // // // //     padding: "12px 20px",
// // // // //     borderRadius: "6px",
// // // // //     border: "none",
// // // // //     cursor: "pointer",
// // // // //     fontWeight: "bold",
// // // // //     fontSize: "16px",
// // // // //     transition: "all 0.3s ease",
// // // // //   },
// // // // //   recipeGrid: {
// // // // //     display: "grid",
// // // // //     gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Responsive grid
// // // // //     gap: "20px",
// // // // //     padding: "20px",
// // // // //   },
// // // // //   recipeCard: {
// // // // //     background: "white",
// // // // //     color: "black",
// // // // //     borderRadius: "12px",
// // // // //     overflow: "hidden",
// // // // //     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
// // // // //     textAlign: "center",
// // // // //     padding: "15px",
// // // // //     transition: "all 0.3s ease",
// // // // //   },
// // // // //   recipeImg: {
// // // // //     width: "100%",
// // // // //     height: "180px",
// // // // //     objectFit: "cover",
// // // // //     borderRadius: "6px",
// // // // //   },
// // // // //   likeBtn: {
// // // // //     background: "green",
// // // // //     color: "white",
// // // // //     padding: "8px 12px",
// // // // //     border: "none",
// // // // //     borderRadius: "6px",
// // // // //     cursor: "pointer",
// // // // //     fontSize: "14px",
// // // // //     margin: "5px",
// // // // //     transition: "all 0.3s ease",
// // // // //   },
// // // // //   deleteBtn: {
// // // // //     background: "red",
// // // // //     color: "white",
// // // // //     padding: "8px 12px",
// // // // //     border: "none",
// // // // //     borderRadius: "6px",
// // // // //     cursor: "pointer",
// // // // //     fontSize: "14px",
// // // // //     margin: "5px",
// // // // //     transition: "all 0.3s ease",
// // // // //   },
// // // // //   editBtn: {
// // // // //     background: "blue",
// // // // //     color: "white",
// // // // //     padding: "8px 12px",
// // // // //     border: "none",
// // // // //     borderRadius: "6px",
// // // // //     cursor: "pointer",
// // // // //     fontSize: "14px",
// // // // //     textDecoration: "none",
// // // // //     margin: "5px",
// // // // //     transition: "all 0.3s ease",
// // // // //   },
// // // // //   viewBtn: {
// // // // //     background: "orange",
// // // // //     color: "white",
// // // // //     padding: "8px 12px",
// // // // //     border: "none",
// // // // //     borderRadius: "6px",
// // // // //     cursor: "pointer",
// // // // //     fontSize: "14px",
// // // // //     textDecoration: "none",
// // // // //     margin: "5px",
// // // // //     transition: "all 0.3s ease",
// // // // //   },
// // // // //   reviewBtn: {
// // // // //     background: "purple",
// // // // //     color: "white",
// // // // //     padding: "8px 12px",
// // // // //     border: "none",
// // // // //     borderRadius: "6px",
// // // // //     cursor: "pointer",
// // // // //     fontSize: "14px",
// // // // //     margin: "5px",
// // // // //     transition: "all 0.3s ease",
// // // // //   },
// // // // //   actionBtns: {
// // // // //     display: "flex",
// // // // //     justifyContent: "center",
// // // // //     gap: "10px",
// // // // //     marginTop: "10px",
// // // // //   },
// // // // // };


// // // // import React, { useState, useEffect } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import ButterPaneer from '../images/Butter Paneer Masla.jpg';
// // // // import MangoSmoothie from '../images/Mango-smoothie.jpg';
// // // // import PavBhaji from '../images/Pav Bhaji.jpg';
// // // // import ChanaMasala from '../images/Chana-Masala.jpg';
// // // // import PuranPoli from '../images/Puran Poli.jpg';
// // // // import VegetableBiryani from '../images/Vegetable Biryani.jpg';
// // // // import Navbar from '../components/Navbar';
// // // // import Header from '../components/Header';
// // // // import Footer from '../components/Footer';

// // // // export default function Home() {
// // // //   const [recipes, setRecipes] = useState([]);
// // // //   const [searchTerm, setSearchTerm] = useState("");
// // // //   const [newRecipe, setNewRecipe] = useState({
// // // //     name: "",
// // // //     description: "",
// // // //     ingredients: "",
// // // //     image: "",
// // // //   });
// // // //   const [review, setReview] = useState("");

// // // //   // Populate recipes
// // // //   useEffect(() => {
// // // //     setRecipes([
// // // //       { id: 1, name: "Paneer Butter Masala", image: ButterPaneer, time: "40 min", likes: 0, reviews: [] },
// // // //       { id: 2, name: "Mango Smoothie", image: MangoSmoothie, time: "10 min", likes: 0, reviews: [] },
// // // //       { id: 3, name: "Pav Bhaji", image: PavBhaji, time: "35 min", likes: 0, reviews: [] },
// // // //       { id: 4, name: "Chana Masala", image: ChanaMasala, time: "30 min", likes: 0, reviews: [] },
// // // //       { id: 5, name: "Puran Poli", image: PuranPoli, time: "50 min", likes: 0, reviews: [] },
// // // //       { id: 6, name: "Vegetable Biryani", image: VegetableBiryani, time: "60 min", likes: 0, reviews: [] },
// // // //     ]);
// // // //   }, []);

// // // //   // Handle search term
// // // //   const handleSearchChange = (e) => {
// // // //     setSearchTerm(e.target.value);
// // // //   };

// // // //   const filteredRecipes = recipes.filter((recipe) =>
// // // //     recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
// // // //   );

// // // //   // Handle new recipe submission
// // // //   const handleNewRecipeChange = (e) => {
// // // //     setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleAddRecipe = (e) => {
// // // //     e.preventDefault();
// // // //     if (!newRecipe.name || !newRecipe.description || !newRecipe.ingredients || !newRecipe.image) {
// // // //       alert("Please fill all fields!");
// // // //       return;
// // // //     }

// // // //     const newRecipeData = {
// // // //       id: recipes.length + 1,
// // // //       name: newRecipe.name,
// // // //       description: newRecipe.description,
// // // //       ingredients: newRecipe.ingredients.split(","),
// // // //       image: newRecipe.image,
// // // //       time: "30 min", // Default time
// // // //       likes: 0,
// // // //       reviews: [],
// // // //     };

// // // //     setRecipes([...recipes, newRecipeData]);
// // // //     setNewRecipe({ name: "", description: "", ingredients: "", image: "" });
// // // //   };

// // // //   // Handle like functionality
// // // //   const handleLike = (id) => {
// // // //     setRecipes((prevRecipes) =>
// // // //       prevRecipes.map((recipe) =>
// // // //         recipe.id === id ? { ...recipe, likes: recipe.likes + 1 } : recipe
// // // //       )
// // // //     );
// // // //   };

// // // //   // Handle recipe deletion
// // // //   const handleDelete = (id) => {
// // // //     setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
// // // //   };

// // // //   // Handle adding reviews
// // // //   const handleAddReview = (id, reviewText) => {
// // // //     setRecipes((prevRecipes) =>
// // // //       prevRecipes.map((recipe) =>
// // // //         recipe.id === id
// // // //           ? { ...recipe, reviews: [...recipe.reviews, reviewText] }
// // // //           : recipe
// // // //       )
// // // //     );
// // // //     setReview(""); // Reset review input after submitting
// // // //   };

// // // //   return (
// // // //     <div className="home-container">
// // // //       <Header />
// // // //       <Navbar />

// // // //       {/* Hero Section */}
// // // //       <div className="hero-section">
// // // //         <h2>Explore Delicious Recipes 🍜</h2>
// // // //         <p>Find easy, quick, and tasty recipes curated just for you.</p>
// // // //         <button className="browse-btn">Browse Recipes</button>
// // // //       </div>

// // // //       {/* Search Bar */}
// // // //       <div className="search-bar">
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Search for a recipe..."
// // // //           value={searchTerm}
// // // //           onChange={handleSearchChange}
// // // //           className="search-input"
// // // //         />
// // // //       </div>

// // // //       {/* Add Recipe Form */}
// // // //       <div className="add-recipe-form">
// // // //         <h3>Add a New Recipe</h3>
// // // //         <form onSubmit={handleAddRecipe} className="recipe-form">
// // // //           <input
// // // //             type="text"
// // // //             name="name"
// // // //             value={newRecipe.name}
// // // //             onChange={handleNewRecipeChange}
// // // //             placeholder="Recipe Name"
// // // //             className="form-input"
// // // //             required
// // // //           />
// // // //           <input
// // // //             type="text"
// // // //             name="description"
// // // //             value={newRecipe.description}
// // // //             onChange={handleNewRecipeChange}
// // // //             placeholder="Description"
// // // //             className="form-input"
// // // //             required
// // // //           />
// // // //           <input
// // // //             type="text"
// // // //             name="ingredients"
// // // //             value={newRecipe.ingredients}
// // // //             onChange={handleNewRecipeChange}
// // // //             placeholder="Ingredients (comma-separated)"
// // // //             className="form-input"
// // // //             required
// // // //           />
// // // //           <input
// // // //             type="text"
// // // //             name="image"
// // // //             value={newRecipe.image}
// // // //             onChange={handleNewRecipeChange}
// // // //             placeholder="Image URL"
// // // //             className="form-input"
// // // //             required
// // // //           />
// // // //           <button type="submit" className="submit-btn">Add Recipe</button>
// // // //         </form>
// // // //       </div>

// // // //       {/* Recipe Cards Section */}
// // // //       <div className="recipe-cards">
// // // //         {filteredRecipes.length > 0 ? (
// // // //           filteredRecipes.map((recipe) => (
// // // //             <div key={recipe.id} className="recipe-card">
// // // //               <img
// // // //                 src={recipe.image}
// // // //                 alt={recipe.name}
// // // //                 className="recipe-img"
// // // //                 onError={(e) => (e.target.src = "/images/default.png")} // Fallback image
// // // //               />
// // // //               <h3>{recipe.name}</h3>
// // // //               <p>⏳ {recipe.time}</p>
// // // //               <p>👍 {recipe.likes} Likes</p>

// // // //               <div className="recipe-actions">
// // // //                 <button onClick={() => handleLike(recipe.id)} className="like-btn">Like</button>
// // // //                 <button onClick={() => handleDelete(recipe.id)} className="delete-btn">Delete</button>
// // // //                 <Link to={`/edit/${recipe.id}`} className="edit-btn">Edit</Link>
// // // //                 <Link to={`/recipe/${recipe.id}`} className="view-btn">View Recipe</Link>
// // // //               </div>

// // // //               {/* Review Section */}
// // // //               <div className="review-section">
// // // //                 <h4>Reviews</h4>
// // // //                 {recipe.reviews.length > 0 ? (
// // // //                   <ul>
// // // //                     {recipe.reviews.map((review, index) => (
// // // //                       <li key={index}>{review}</li>
// // // //                     ))}
// // // //                   </ul>
// // // //                 ) : (
// // // //                   <p>No reviews yet.</p>
// // // //                 )}
// // // //                 <input
// // // //                   type="text"
// // // //                   value={review}
// // // //                   onChange={(e) => setReview(e.target.value)}
// // // //                   placeholder="Add a review"
// // // //                   className="form-input"
// // // //                 />
// // // //                 <button
// // // //                   onClick={() => handleAddReview(recipe.id, review)}
// // // //                   className="review-btn"
// // // //                 >
// // // //                   Add Review
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           ))
// // // //         ) : (
// // // //           <p>No recipes found</p>
// // // //         )}
// // // //       </div>

// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // }

// // // import React, { useState, useEffect } from "react";
// // // import { Link } from "react-router-dom";
// // // import ButterPaneer from '../images/Butter Paneer Masla.jpg';
// // // import MangoSmoothie from '../images/Mango-smoothie.jpg';
// // // import PavBhaji from '../images/Pav Bhaji.jpg';
// // // import ChanaMasala from '../images/Chana-Masala.jpg';
// // // import PuranPoli from '../images/Puran Poli.jpg';
// // // import VegetableBiryani from '../images/Vegetable Biryani.jpg';
// // // import Navbar from '../components/Navbar';
// // // import Header from '../components/Header';
// // // import Footer from '../components/Footer';
// // // import './Home.css'; // Importing the CSS for styling

// // // export default function Home() {
// // //   const [recipes, setRecipes] = useState([]);
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [newRecipe, setNewRecipe] = useState({
// // //     name: "",
// // //     description: "",
// // //     ingredients: "",
// // //     image: "",
// // //   });
// // //   const [review, setReview] = useState("");

// // //   // Populate recipes
// // //   useEffect(() => {
// // //     setRecipes([
// // //       { id: 1, name: "Paneer Butter Masala", image: ButterPaneer, time: "40 min", likes: 0, reviews: [] },
// // //       { id: 2, name: "Mango Smoothie", image: MangoSmoothie, time: "10 min", likes: 0, reviews: [] },
// // //       { id: 3, name: "Pav Bhaji", image: PavBhaji, time: "35 min", likes: 0, reviews: [] },
// // //       { id: 4, name: "Chana Masala", image: ChanaMasala, time: "30 min", likes: 0, reviews: [] },
// // //       { id: 5, name: "Puran Poli", image: PuranPoli, time: "50 min", likes: 0, reviews: [] },
// // //       { id: 6, name: "Vegetable Biryani", image: VegetableBiryani, time: "60 min", likes: 0, reviews: [] },
// // //     ]);
// // //   }, []);

// // //   // Handle search term
// // //   const handleSearchChange = (e) => {
// // //     setSearchTerm(e.target.value);
// // //   };

// // //   const filteredRecipes = recipes.filter((recipe) =>
// // //     recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
// // //   );

// // //   // Handle new recipe submission
// // //   const handleNewRecipeChange = (e) => {
// // //     setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
// // //   };

// // //   const handleAddRecipe = (e) => {
// // //     e.preventDefault();
// // //     if (!newRecipe.name || !newRecipe.description || !newRecipe.ingredients || !newRecipe.image) {
// // //       alert("Please fill all fields!");
// // //       return;
// // //     }

// // //     const newRecipeData = {
// // //       id: recipes.length + 1,
// // //       name: newRecipe.name,
// // //       description: newRecipe.description,
// // //       ingredients: newRecipe.ingredients.split(","),
// // //       image: newRecipe.image,
// // //       time: "30 min", // Default time
// // //       likes: 0,
// // //       reviews: [],
// // //     };

// // //     setRecipes([...recipes, newRecipeData]);
// // //     setNewRecipe({ name: "", description: "", ingredients: "", image: "" });
// // //   };

// // //   // Handle like functionality
// // //   const handleLike = (id) => {
// // //     setRecipes((prevRecipes) =>
// // //       prevRecipes.map((recipe) =>
// // //         recipe.id === id ? { ...recipe, likes: recipe.likes + 1 } : recipe
// // //       )
// // //     );
// // //   };

// // //   // Handle recipe deletion
// // //   const handleDelete = (id) => {
// // //     setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
// // //   };

// // //   // Handle adding reviews
// // //   const handleAddReview = (id, reviewText) => {
// // //     setRecipes((prevRecipes) =>
// // //       prevRecipes.map((recipe) =>
// // //         recipe.id === id
// // //           ? { ...recipe, reviews: [...recipe.reviews, reviewText] }
// // //           : recipe
// // //       )
// // //     );
// // //     setReview(""); // Reset review input after submitting
// // //   };

// // //   return (
// // //     <div className="home-container">
// // //       <Header />
// // //       <Navbar />

// // //       {/* Hero Section */}
// // //       <div className="hero-section">
// // //         <h2>Explore Delicious Recipes 🍜</h2>
// // //         <p>Find easy, quick, and tasty recipes curated just for you.</p>
// // //         <button className="browse-btn">Browse Recipes</button>
// // //       </div>

// // //       {/* Search Bar */}
// // //       <div className="search-bar">
// // //         <input
// // //           type="text"
// // //           placeholder="Search for a recipe..."
// // //           value={searchTerm}
// // //           onChange={handleSearchChange}
// // //           className="search-input"
// // //         />
// // //       </div>

// // //       {/* Add Recipe Form */}
// // //       <div className="add-recipe-form">
// // //         <h3>Add a New Recipe</h3>
// // //         <form onSubmit={handleAddRecipe} className="recipe-form">
// // //           <input
// // //             type="text"
// // //             name="name"
// // //             value={newRecipe.name}
// // //             onChange={handleNewRecipeChange}
// // //             placeholder="Recipe Name"
// // //             className="form-input"
// // //             required
// // //           />
// // //           <input
// // //             type="text"
// // //             name="description"
// // //             value={newRecipe.description}
// // //             onChange={handleNewRecipeChange}
// // //             placeholder="Description"
// // //             className="form-input"
// // //             required
// // //           />
// // //           <input
// // //             type="text"
// // //             name="ingredients"
// // //             value={newRecipe.ingredients}
// // //             onChange={handleNewRecipeChange}
// // //             placeholder="Ingredients (comma-separated)"
// // //             className="form-input"
// // //             required
// // //           />
// // //           <input
// // //             type="text"
// // //             name="image"
// // //             value={newRecipe.image}
// // //             onChange={handleNewRecipeChange}
// // //             placeholder="Image URL"
// // //             className="form-input"
// // //             required
// // //           />
// // //           <button type="submit" className="submit-btn">Add Recipe</button>
// // //         </form>
// // //       </div>

// // //       {/* Recipe Cards Section */}
// // //       <div className="recipe-cards">
// // //         {filteredRecipes.length > 0 ? (
// // //           filteredRecipes.map((recipe) => (
// // //             <div key={recipe.id} className="recipe-card">
// // //               <img
// // //                 src={recipe.image}
// // //                 alt={recipe.name}
// // //                 className="recipe-img"
// // //                 onError={(e) => (e.target.src = "/images/default.png")} // Fallback image
// // //               />
// // //               <h3>{recipe.name}</h3>
// // //               <p>⏳ {recipe.time}</p>
// // //               <p>👍 {recipe.likes} Likes</p>

// // //               <div className="recipe-actions">
// // //                 <button onClick={() => handleLike(recipe.id)} className="like-btn">Like</button>
// // //                 <button onClick={() => handleDelete(recipe.id)} className="delete-btn">Delete</button>
// // //                 <Link to={`/edit/${recipe.id}`} className="edit-btn">Edit</Link>
// // //                 <Link to={`/recipe/${recipe.id}`} className="view-btn">View Recipe</Link>
// // //               </div>

// // //               {/* Review Section */}
// // //               <div className="review-section">
// // //                 <h4>Reviews</h4>
// // //                 {recipe.reviews.length > 0 ? (
// // //                   <ul>
// // //                     {recipe.reviews.map((review, index) => (
// // //                       <li key={index}>{review}</li>
// // //                     ))}
// // //                   </ul>
// // //                 ) : (
// // //                   <p>No reviews yet.</p>
// // //                 )}
// // //                 <input
// // //                   type="text"
// // //                   value={review}
// // //                   onChange={(e) => setReview(e.target.value)}
// // //                   placeholder="Add a review"
// // //                   className="form-input"
// // //                 />
// // //                 <button
// // //                   onClick={() => handleAddReview(recipe.id, review)}
// // //                   className="review-btn"
// // //                 >
// // //                   Add Review
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           ))
// // //         ) : (
// // //           <p>No recipes found</p>
// // //         )}
// // //       </div>

// // //       <Footer />
// // //     </div>
// // //   );
// // // }

// // import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import ButterPaneer from '../images/Butter Paneer Masla.jpg';
// // import MangoSmoothie from '../images/Mango-smoothie.jpg';
// // import PavBhaji from '../images/Pav Bhaji.jpg';
// // import ChanaMasala from '../images/Chana-Masala.jpg';
// // import PuranPoli from '../images/Puran Poli.jpg';
// // import VegetableBiryani from '../images/Vegetable Biryani.jpg';
// // import Navbar from '../components/Navbar';
// // import Header from '../components/Header';
// // import Footer from '../components/Footer';

// // export default function Home() {
// //   const [recipes, setRecipes] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [newRecipe, setNewRecipe] = useState({
// //     name: "",
// //     description: "",
// //     ingredients: "",
// //     image: "",
// //   });
// //   const [review, setReview] = useState("");

// //   // Populate recipes
// //   useEffect(() => {
// //     setRecipes([
// //       { id: 1, name: "Paneer Butter Masala", image: ButterPaneer, time: "40 min", likes: 0, reviews: [] },
// //       { id: 2, name: "Mango Smoothie", image: MangoSmoothie, time: "10 min", likes: 0, reviews: [] },
// //       { id: 3, name: "Pav Bhaji", image: PavBhaji, time: "35 min", likes: 0, reviews: [] },
// //       { id: 4, name: "Chana Masala", image: ChanaMasala, time: "30 min", likes: 0, reviews: [] },
// //       { id: 5, name: "Puran Poli", image: PuranPoli, time: "50 min", likes: 0, reviews: [] },
// //       { id: 6, name: "Vegetable Biryani", image: VegetableBiryani, time: "60 min", likes: 0, reviews: [] },
// //     ]);
// //   }, []);

// //   // Handle search term
// //   const handleSearchChange = (e) => {
// //     setSearchTerm(e.target.value);
// //   };

// //   const filteredRecipes = recipes.filter((recipe) =>
// //     recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   // Handle new recipe submission
// //   const handleNewRecipeChange = (e) => {
// //     setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
// //   };

// //   const handleAddRecipe = (e) => {
// //     e.preventDefault();
// //     if (!newRecipe.name || !newRecipe.description || !newRecipe.ingredients || !newRecipe.image) {
// //       alert("Please fill all fields!");
// //       return;
// //     }

// //     const newRecipeData = {
// //       id: recipes.length + 1,
// //       name: newRecipe.name,
// //       description: newRecipe.description,
// //       ingredients: newRecipe.ingredients.split(","),
// //       image: newRecipe.image,
// //       time: "30 min", // Default time
// //       likes: 0,
// //       reviews: [],
// //     };

// //     setRecipes([...recipes, newRecipeData]);
// //     setNewRecipe({ name: "", description: "", ingredients: "", image: "" });
// //   };

// //   // Handle like functionality
// //   const handleLike = (id) => {
// //     setRecipes((prevRecipes) =>
// //       prevRecipes.map((recipe) =>
// //         recipe.id === id ? { ...recipe, likes: recipe.likes + 1 } : recipe
// //       )
// //     );
// //   };

// //   // Handle recipe deletion
// //   const handleDelete = (id) => {
// //     setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
// //   };

// //   // Handle adding reviews
// //   const handleAddReview = (id, reviewText) => {
// //     setRecipes((prevRecipes) =>
// //       prevRecipes.map((recipe) =>
// //         recipe.id === id
// //           ? { ...recipe, reviews: [...recipe.reviews, reviewText] }
// //           : recipe
// //       )
// //     );
// //     setReview(""); // Reset review input after submitting
// //   };

// //   return (
// //     <div className="home-container">
// //       <style>
// //         {`
// //           .home-container {
// //             font-family: Arial, sans-serif;
// //             padding: 20px;
// //           }

// //           .hero-section {
// //             text-align: center;
// //             margin-bottom: 30px;
// //           }

// //           .search-bar {
// //             text-align: center;
// //             margin-bottom: 20px;
// //           }

// //           .recipe-cards {
// //             display: flex;
// //             flex-wrap: wrap;
// //             gap: 20px;
// //             justify-content: center;
// //           }

// //           .recipe-card {
// //             border: 1px solid #ddd;
// //             padding: 15px;
// //             width: 200px;
// //             text-align: center;
// //           }

// //           .recipe-actions {
// //             margin-top: 10px;
// //           }

// //           .like-btn, .delete-btn, .edit-btn, .view-btn {
// //             padding: 5px 10px;
// //             margin: 5px;
// //           }

// //           .review-section {
// //             margin-top: 20px;
// //           }

// //           .review-btn {
// //             padding: 5px 10px;
// //           }

// //           .form-input {
// //             width: 100%;
// //             padding: 8px;
// //             margin: 10px 0;
// //             border: 1px solid #ddd;
// //           }

// //           .submit-btn {
// //             padding: 10px 20px;
// //             background-color: #28a745;
// //             color: white;
// //             border: none;
// //             cursor: pointer;
// //           }

// //           .browse-btn {
// //             padding: 10px 20px;
// //             background-color: #007bff;
// //             color: white;
// //             border: none;
// //             cursor: pointer;
// //           }
// //         `}
// //       </style>
      
// //       <Header />
// //       <Navbar />

// //       {/* Hero Section */}
// //       <div className="hero-section">
// //         <h2>Explore Delicious Recipes 🍜</h2>
// //         <p>Find easy, quick, and tasty recipes curated just for you.</p>
// //         <button className="browse-btn">Browse Recipes</button>
// //       </div>

// //       {/* Search Bar */}
// //       <div className="search-bar">
// //         <input
// //           type="text"
// //           placeholder="Search for a recipe..."
// //           value={searchTerm}
// //           onChange={handleSearchChange}
// //           className="search-input"
// //         />
// //       </div>

// //       {/* Add Recipe Form */}
// //       <div className="add-recipe-form">
// //         <h3>Add a New Recipe</h3>
// //         <form onSubmit={handleAddRecipe} className="recipe-form">
// //           <input
// //             type="text"
// //             name="name"
// //             value={newRecipe.name}
// //             onChange={handleNewRecipeChange}
// //             placeholder="Recipe Name"
// //             className="form-input"
// //             required
// //           />
// //           <input
// //             type="text"
// //             name="description"
// //             value={newRecipe.description}
// //             onChange={handleNewRecipeChange}
// //             placeholder="Description"
// //             className="form-input"
// //             required
// //           />
// //           <input
// //             type="text"
// //             name="ingredients"
// //             value={newRecipe.ingredients}
// //             onChange={handleNewRecipeChange}
// //             placeholder="Ingredients (comma-separated)"
// //             className="form-input"
// //             required
// //           />
// //           <input
// //             type="text"
// //             name="image"
// //             value={newRecipe.image}
// //             onChange={handleNewRecipeChange}
// //             placeholder="Image URL"
// //             className="form-input"
// //             required
// //           />
// //           <button type="submit" className="submit-btn">Add Recipe</button>
// //         </form>
// //       </div>

// //       {/* Recipe Cards Section */}
// //       <div className="recipe-cards">
// //         {filteredRecipes.length > 0 ? (
// //           filteredRecipes.map((recipe) => (
// //             <div key={recipe.id} className="recipe-card">
// //               <img
// //                 src={recipe.image}
// //                 alt={recipe.name}
// //                 className="recipe-img"
// //                 onError={(e) => (e.target.src = "/images/default.png")} // Fallback image
// //               />
// //               <h3>{recipe.name}</h3>
// //               <p>⏳ {recipe.time}</p>
// //               <p>👍 {recipe.likes} Likes</p>

// //               <div className="recipe-actions">
// //                 <button onClick={() => handleLike(recipe.id)} className="like-btn">Like</button>
// //                 <button onClick={() => handleDelete(recipe.id)} className="delete-btn">Delete</button>
// //                 <br></br>
// //                 <Link to={`/edit/${recipe.id}`} className="edit-btn">Edit</Link>
// //                 <Link to={`/recipe/${recipe.id}`} className="view-btn">View Recipe</Link>
// //               </div>

// //               {/* Review Section */}
// //               <div className="review-section">
// //                 <h4>Reviews</h4>
// //                 {recipe.reviews.length > 0 ? (
// //                   <ul>
// //                     {recipe.reviews.map((review, index) => (
// //                       <li key={index}>{review}</li>
// //                     ))}
// //                   </ul>
// //                 ) : (
// //                   <p>No reviews yet.</p>
// //                 )}
// //                 <input
// //                   type="text"
// //                   value={review}
// //                   onChange={(e) => setReview(e.target.value)}
// //                   placeholder="Add a review"
// //                   className="form-input"
// //                 />
// //                 <button
// //                   onClick={() => handleAddReview(recipe.id, review)}
// //                   className="review-btn"
// //                 >
// //                   Add Review
// //                 </button>
// //               </div>
// //             </div>
// //           ))
// //         ) : (
// //           <p>No recipes found</p>
// //         )}
// //       </div>

// //       <Footer />
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import ButterPaneer from '../images/Butter Paneer Masla.jpg';
// import MangoSmoothie from '../images/Mango-smoothie.jpg';
// import PavBhaji from '../images/Pav Bhaji.jpg';
// import ChanaMasala from '../images/Chana-Masala.jpg';
// import PuranPoli from '../images/Puran Poli.jpg';
// import VegetableBiryani from '../images/Vegetable Biryani.jpg';
// import Navbar from '../components/Navbar';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// export default function Home() {
//   const [recipes, setRecipes] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [newRecipe, setNewRecipe] = useState({
//     name: "",
//     description: "",
//     ingredients: "",
//     image: "",
//   });
//   const [review, setReview] = useState("");

//   // Populate recipes
//   useEffect(() => {
//     setRecipes([
//       { id: 1, name: "Paneer Butter Masala", image: ButterPaneer, time: "40 min", likes: 0, reviews: [] },
//       { id: 2, name: "Mango Smoothie", image: MangoSmoothie, time: "10 min", likes: 0, reviews: [] },
//       { id: 3, name: "Pav Bhaji", image: PavBhaji, time: "35 min", likes: 0, reviews: [] },
//       { id: 4, name: "Chana Masala", image: ChanaMasala, time: "30 min", likes: 0, reviews: [] },
//       { id: 5, name: "Puran Poli", image: PuranPoli, time: "50 min", likes: 0, reviews: [] },
//       { id: 6, name: "Vegetable Biryani", image: VegetableBiryani, time: "60 min", likes: 0, reviews: [] },
//     ]);
//   }, []);

//   // Handle search term
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredRecipes = recipes.filter((recipe) =>
//     recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Handle new recipe submission
//   const handleNewRecipeChange = (e) => {
//     setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
//   };

//   const handleAddRecipe = (e) => {
//     e.preventDefault();
//     if (!newRecipe.name || !newRecipe.description || !newRecipe.ingredients || !newRecipe.image) {
//       alert("Please fill all fields!");
//       return;
//     }

//     const newRecipeData = {
//       id: recipes.length + 1,
//       name: newRecipe.name,
//       description: newRecipe.description,
//       ingredients: newRecipe.ingredients.split(","),
//       image: newRecipe.image,
//       time: "30 min", // Default time
//       likes: 0,
//       reviews: [],
//     };

//     setRecipes([...recipes, newRecipeData]);
//     setNewRecipe({ name: "", description: "", ingredients: "", image: "" });
//   };

//   // Handle like functionality
//   const handleLike = (id) => {
//     setRecipes((prevRecipes) =>
//       prevRecipes.map((recipe) =>
//         recipe.id === id ? { ...recipe, likes: recipe.likes + 1 } : recipe
//       )
//     );
//   };

//   // Handle recipe deletion
//   const handleDelete = (id) => {
//     setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
//   };

//   // Handle adding reviews
//   const handleAddReview = (id, reviewText) => {
//     setRecipes((prevRecipes) =>
//       prevRecipes.map((recipe) =>
//         recipe.id === id
//           ? { ...recipe, reviews: [...recipe.reviews, reviewText] }
//           : recipe
//       )
//     );
//     setReview(""); // Reset review input after submitting
//   };

//   return (
//     <div className="home-container">
//       <style>
//         {`
//           .home-container {
//             font-family: Arial, sans-serif;
//             padding: 20px;
//           }

//           .hero-section {
//             text-align: center;
//             margin-bottom: 30px;
//           }

//           .search-bar {
//             text-align: center;
//             margin-bottom: 20px;
//           }

//           .recipe-cards {
//             display: flex;
//             flex-wrap: wrap;
//             gap: 20px;
//             justify-content: center;
//           }

//           .recipe-card {
//             border: 1px solid #ddd;
//             padding: 15px;
//             width: 200px;
//             text-align: center;
//           }

//           .recipe-actions {
//             margin-top: 10px;
//           }

//           .like-btn, .delete-btn, .edit-btn, .view-btn {
//             padding: 5px 10px;
//             margin: 10px;
//             background-color: #007bff;
//             color: white;
//             border: none;
//             cursor: pointer;
//             border-radius: 4px;
//           }

//           .like-btn:hover, .delete-btn:hover, .edit-btn:hover, .view-btn:hover {
//             background-color: #0056b3;
//           }

//           .review-section {
//             margin-top: 20px;
//           }

//           .review-btn {
//             padding: 5px 10px;
//             margin-top: 10px;
//             background-color: #28a745;
//             color: white;
//             border: none;
//             cursor: pointer;
//             border-radius: 4px;
//           }

//           .review-btn:hover {
//             background-color: #218838;
//           }

//           .form-input {
//             width: 100%;
//             padding: 8px;
//             margin: 10px 0;
//             border: 1px solid #ddd;
//           }

//           .submit-btn {
//             padding: 10px 20px;
//             background-color: #28a745;
//             color: white;
//             border: none;
//             cursor: pointer;
//             border-radius: 4px;
//           }

//           .browse-btn {
//             padding: 10px 20px;
//             background-color: #007bff;
//             color: white;
//             border: none;
//             cursor: pointer;
//             border-radius: 4px;
//           }

//           .submit-btn:hover, .browse-btn:hover {
//             background-color: #0056b3;
//           }

//           .add-recipe-form {
//             margin-bottom: 30px;
//           }

//           .add-recipe-form h3 {
//             text-align: center;
//             margin-bottom: 20px;
//           }

//           .recipe-form input {
//             width: 100%;
//             padding: 8px;
//             margin: 10px 0;
//             border: 1px solid #ddd;
//             border-radius: 4px;
//           }

//           .recipe-form button {
//             width: 100%;
//             padding: 10px 20px;
//             background-color: #28a745;
//             color: white;
//             border: none;
//             cursor: pointer;
//             border-radius: 4px;
//           }
//         `}
//       </style>
      
//       <Header />
//       <Navbar />

//       {/* Hero Section */}
//       <div className="hero-section">
//         <h2>Explore Delicious Recipes 🍜</h2>
//         <p>Find easy, quick, and tasty recipes curated just for you.</p>
//         <button className="browse-btn">Browse Recipes</button>
//       </div>

//       {/* Search Bar */}
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search for a recipe..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="search-input"
//         />
//       </div>

//       {/* Add Recipe Form */}
//       <div className="add-recipe-form">
//         <h3>Add a New Recipe</h3>
//         <form onSubmit={handleAddRecipe} className="recipe-form">
//           <input
//             type="text"
//             name="name"
//             value={newRecipe.name}
//             onChange={handleNewRecipeChange}
//             placeholder="Recipe Name"
//             className="form-input"
//             required
//           />
//           <input
//             type="text"
//             name="description"
//             value={newRecipe.description}
//             onChange={handleNewRecipeChange}
//             placeholder="Description"
//             className="form-input"
//             required
//           />
//           <input
//             type="text"
//             name="ingredients"
//             value={newRecipe.ingredients}
//             onChange={handleNewRecipeChange}
//             placeholder="Ingredients (comma-separated)"
//             className="form-input"
//             required
//           />
//           <input
//             type="text"
//             name="image"
//             value={newRecipe.image}
//             onChange={handleNewRecipeChange}
//             placeholder="Image URL"
//             className="form-input"
//             required
//           />
//           <button type="submit" className="submit-btn">Add Recipe</button>
//         </form>
//       </div>

//       {/* Recipe Cards Section */}
//       <div className="recipe-cards">
//         {filteredRecipes.length > 0 ? (
//           filteredRecipes.map((recipe) => (
//             <div key={recipe.id} className="recipe-card">
//               <img
//                 src={recipe.image}
//                 alt={recipe.name}
//                 className="recipe-img"
//                 onError={(e) => (e.target.src = "/images/default.png")} // Fallback image
//               />
//               <h3>{recipe.name}</h3>
//               <p>⏳ {recipe.time}</p>
//               <p>👍 {recipe.likes} Likes</p>

//               <div className="recipe-actions">
//                 <button onClick={() => handleLike(recipe.id)} className="like-btn">Like</button>
//                 <button onClick={() => handleDelete(recipe.id)} className="delete-btn">Delete</button>
//                 <br></br>
//                 <Link to={`/edit/${recipe.id}`} className="edit-btn">Edit</Link>
//                 <Link to={`/recipe/${recipe.id}`} className="view-btn">View Recipe</Link>
//               </div>

//               {/* Review Section */}
//               <div className="review-section">
//                 <h4>Reviews</h4>
//                 {recipe.reviews.length > 0 ? (
//                   <ul>
//                     {recipe.reviews.map((review, index) => (
//                       <li key={index}>{review}</li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p>No reviews yet.</p>
//                 )}
//                 <input
//                   type="text"
//                   value={review}
//                   onChange={(e) => setReview(e.target.value)}
//                   placeholder="Add a review"
//                   className="form-input"
//                 />
//                 <button
//                   onClick={() => handleAddReview(recipe.id, review)}
//                   className="review-btn"
//                 >
//                   Add Review
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No recipes found</p>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// }
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
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    description: "",
    ingredients: "",
    image: "",
  });
  const [review, setReview] = useState("");

  // Populate recipes
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

  // Handle search term
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle new recipe submission
  const handleNewRecipeChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const handleAddRecipe = (e) => {
    e.preventDefault();
    if (!newRecipe.name || !newRecipe.description || !newRecipe.ingredients || !newRecipe.image) {
      alert("Please fill all fields!");
      return;
    }

    const newRecipeData = {
      id: recipes.length + 1,
      name: newRecipe.name,
      description: newRecipe.description,
      ingredients: newRecipe.ingredients.split(","),
      image: newRecipe.image,
      time: "30 min", // Default time
      likes: 0,
      reviews: [],
    };

    setRecipes([...recipes, newRecipeData]);
    setNewRecipe({ name: "", description: "", ingredients: "", image: "" });
  };

  // Handle like functionality
  const handleLike = (id) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === id ? { ...recipe, likes: recipe.likes + 1 } : recipe
      )
    );
  };

  // Handle recipe deletion
  const handleDelete = (id) => {
    setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
  };

  // Handle adding reviews
  const handleAddReview = (id, reviewText) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === id
          ? { ...recipe, reviews: [...recipe.reviews, reviewText] }
          : recipe
      )
    );
    setReview(""); // Reset review input after submitting
  };

  return (
    <div className="home-container">
      <style>
        {`
          .home-container {
            font-family: Arial, sans-serif;
            padding: 20px;
          }

          .hero-section {
            text-align: center;
            margin-bottom: 30px;
          }

          .search-bar {
            text-align: center;
            margin-bottom: 20px;
          }

          .recipe-cards {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
          }

          .recipe-card {
            border: 1px solid #ddd;
            padding: 15px;
            width: 200px;
            text-align: center;
          }

          .recipe-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: space-between;
          }

          .recipe-actions button {
            width: 48%; /* To allow two buttons per line */
            padding: 5px 10px;
            background-color: #007bff;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 4px;
          }

          .recipe-actions button:hover {
            background-color: #0056b3;
          }

          .review-section {
            margin-top: 20px;
          }

          .review-btn {
            padding: 5px 10px;
            margin-top: 10px;
            background-color: #28a745;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 4px;
          }

          .review-btn:hover {
            background-color: #218838;
          }

          .form-input {
            width: 100%;
            padding: 8px;
            margin: 10px 0;
            border: 1px solid #ddd;
          }

          .submit-btn {
            padding: 10px 20px;
            background-color: #28a745;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 4px;
          }

          .browse-btn {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 4px;
          }

          .submit-btn:hover, .browse-btn:hover {
            background-color: #0056b3;
          }

          .add-recipe-form {
            margin-bottom: 30px;
          }

          .add-recipe-form h3 {
            text-align: center;
            margin-bottom: 20px;
          }

          .recipe-form input {
            width: 100%;
            padding: 8px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
          }

          .recipe-form button {
            width: 100%;
            padding: 10px 20px;
            background-color: #28a745;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 4px;
          }
        `}
      </style>

      <Header />
      <Navbar />

      {/* Hero Section */}
      <div className="hero-section">
        <h2>Explore Delicious Recipes 🍜</h2>
        <p>Find easy, quick, and tasty recipes curated just for you.</p>
        <button className="browse-btn">Browse Recipes</button>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      {/* Add Recipe Form */}
      <div className="add-recipe-form">
        <h3>Add a New Recipe</h3>
        <form onSubmit={handleAddRecipe} className="recipe-form">
          <input
            type="text"
            name="name"
            value={newRecipe.name}
            onChange={handleNewRecipeChange}
            placeholder="Recipe Name"
            className="form-input"
            required
          />
          <input
            type="text"
            name="description"
            value={newRecipe.description}
            onChange={handleNewRecipeChange}
            placeholder="Description"
            className="form-input"
            required
          />
          <input
            type="text"
            name="ingredients"
            value={newRecipe.ingredients}
            onChange={handleNewRecipeChange}
            placeholder="Ingredients (comma-separated)"
            className="form-input"
            required
          />
          <input
            type="text"
            name="image"
            value={newRecipe.image}
            onChange={handleNewRecipeChange}
            placeholder="Image URL"
            className="form-input"
            required
          />
          <button type="submit" className="submit-btn">Add Recipe</button>
        </form>
      </div>

      {/* Recipe Cards Section */}
      <div className="recipe-cards">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="recipe-img"
                onError={(e) => (e.target.src = "/images/default.png")} // Fallback image
              />
              <h3>{recipe.name}</h3>
              <p>⏳ {recipe.time}</p>
              <p>👍 {recipe.likes} Likes</p>

              <div className="recipe-actions">
                <button onClick={() => handleLike(recipe.id)} className="like-btn">Like</button>
                <br></br>
                <button onClick={() => handleDelete(recipe.id)} className="delete-btn">Delete</button>
                <br></br>
                <Link to={`/edit/${recipe.id}`} className="edit-btn">Edit</Link>
                <Link to={`/recipe/${recipe.id}`} className="view-btn">View Recipe</Link>
              </div>

              {/* Review Section */}
              <div className="review-section">
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
                  className="form-input"
                />
                <button
                  onClick={() => handleAddReview(recipe.id, review)}
                  className="review-btn"
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
