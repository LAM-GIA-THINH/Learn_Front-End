// src/components/IngredientsList.jsx
import React from 'react';

export default function IngredientsList({ ingredients, toggleRecipeShown }) {
    return (
        <section className="ingredients-section">
            <h2>Current ingredients:</h2>
            <ul className="ingredients-list">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <button onClick={toggleRecipeShown}>
                Get Recipe from Claude
            </button>
        </section>
    );
}

// src/components/ClaudeRecipe.jsx
import React, { useState, useEffect } from 'react';
import { sendMessageToClaude } from '../config/claude';

export default function ClaudeRecipe({ ingredients }) {
    const [recipe, setRecipe] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getRecipe() {
            try {
                setLoading(true);
                const prompt = `Create a recipe using these ingredients: ${ingredients.join(', ')}. 
                              Please provide step by step instructions and suggest any additional ingredients that might enhance the dish.`;
                const response = await sendMessageToClaude(prompt);
                setRecipe(response);
            } catch (err) {
                setError('Failed to get recipe from Claude. Please try again.');
                console.error('Error:', err);
            } finally {
                setLoading(false);
            }
        }
        getRecipe();
    }, [ingredients]);

    if (loading) return <div>Loading recipe...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <section className="recipe-section">
            <h2>Claude's Recipe Suggestion</h2>
            <div className="recipe-content">
                {recipe}
            </div>
        </section>
    );
}

// src/Main.jsx
import React from "react";
import IngredientsList from "./components/IngredientsList";
import ClaudeRecipe from "./components/ClaudeRecipe";

export default function Main() {
    const [ingredients, setIngredients] = React.useState([
        "all the main spices",
        "pasta",
        "ground beef",
        "tomato paste"
    ]);
    const [recipeShown, setRecipeShown] = React.useState(false);

    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown);
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 && (
                <IngredientsList
                    ingredients={ingredients}
                    toggleRecipeShown={toggleRecipeShown}
                />
            )}

            {recipeShown && <ClaudeRecipe ingredients={ingredients} />}
        </main>
    );
}