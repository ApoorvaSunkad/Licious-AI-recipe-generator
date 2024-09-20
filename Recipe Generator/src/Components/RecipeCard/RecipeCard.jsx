import React from 'react'
import "./RecipeCard.css"; 

export const RecipeCard = ({ recipe, onViewRecipe }) => {
  return (
    <div className="recipe-card">
    <img src={recipe.image} alt={recipe.name} className="recipe-image" />
    <div className="recipe-details">
      <h3>{recipe.name}</h3>
      <button className="like-button">
        <i className="fa-solid fa-heart"></i>
      </button>
      <button className="view-recipe-button" onClick={() => onViewRecipe(recipe)}>
        View Recipe
      </button>
    </div>
  </div>
  );
};
