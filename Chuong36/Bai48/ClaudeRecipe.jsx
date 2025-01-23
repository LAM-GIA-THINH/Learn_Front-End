import { useState, useEffect } from 'react';
import { sendMessageToClaude } from '../config/claude';

export default function ClaudeRecipe({ ingredients }) {
    const [recipe, setRecipe] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getRecipeFromClaude() {
            try {
                setLoading(true);
                const prompt = `
                    Act as a chef and create a recipe using these ingredients: ${ingredients.join(', ')}.
                    Please format the response as follows:
                    1. Start with a brief introduction
                    2. Give the recipe a name
                    3. List all ingredients including quantities
                    4. Provide step-by-step cooking instructions
                    5. Optional: suggest garnishes or serving recommendations
                    
                    Please maintain HTML formatting with appropriate tags (<p>, <strong>, <ul>, <ol>, <li>).
                `;
                
                const response = await sendMessageToClaude(prompt);
                setRecipe(response);
                setError(null);
            } catch (err) {
                setError('Sorry, I couldn\'t generate a recipe right now. Please try again.');
                console.error('Error getting recipe:', err);
            } finally {
                setLoading(false);
            }
        }

        getRecipeFromClaude();
    }, [ingredients]);

    if (loading) {
        return (
            <section>
                <h2>Chef Claude is thinking...</h2>
                <div className="loading-recipe">
                    <p>Creating your perfect recipe...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section>
                <h2>Oops!</h2>
                <div className="error-message">
                    <p>{error}</p>
                    <button onClick={() => window.location.reload()}>Try Again</button>
                </div>
            </section>
        );
    }

    return (
        <section>
            <h2>Chef Claude Recommends:</h2>
            <article 
                className="suggested-recipe-container" 
                aria-live="polite"
                dangerouslySetInnerHTML={{ __html: recipe }}
            />
        </section>
    );
}