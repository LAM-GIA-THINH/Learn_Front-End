import React from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from "./components/ClaudeRecipe"
import { getRecipeFromChefClaude, getRecipeFromMistral } from "./ai"
/**
 * Thử thách: Lấy một công thức từ AI!
 * 
 * Đây sẽ là một thử thách khó hơn một chút, yêu cầu bạn phải
 * suy nghĩ phản biện và tổng hợp các kỹ năng mà bạn đã học
 * và thực hành cho đến thời điểm này.
 * 
 * Sử dụng hàm `getRecipeFromChefClaude` hoặc hàm 
 * `getRecipeFromMistral`, hãy làm sao để khi người dùng
 * nhấn vào "Get a recipe" (Lấy công thức), phản hồi dạng văn bản
 * từ AI sẽ được hiển thị trong thành phần <ClaudeRecipe>.
 * 
 * Hiện tại, chỉ cần hiển thị markdown thô mà AI trả về,
 * chưa cần làm cho nó trông đẹp. (Chúng ta sẽ sử dụng một
 * gói để render markdown sau.)
 */
export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
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

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}