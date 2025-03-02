import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/Recipedetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddRecipe from "./pages/Addrecipe";
import EditRecipe from "./pages/Editrecipe";
import Profile from "./pages/Profile";
import About from "./pages/About";

function App() {
   return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Addrecipe" element={<AddRecipe />} />
        <Route path="/Editrecipe" element={<EditRecipe />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;