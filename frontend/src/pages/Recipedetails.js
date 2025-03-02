import { useParams } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();

  return (
    <div className="recipe-details">
      <h1>🍽 Recipe {id}</h1>
      <p>More details about the recipe will go here.</p>
    </div>
  );
}

export default RecipeDetails;
