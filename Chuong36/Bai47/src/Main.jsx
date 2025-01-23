import React from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from "./components/ClaudeRecipe"
/**
 * Thách thức: Dọn dẹp mã nguồn của chúng ta!
 * Hãy tạo một vài component mới để làm mã nguồn sạch hơn.
 * (Lưu ý: Tôi không nói những gì chúng ta có bây giờ là sai hay xấu. 
 * Tôi chủ yếu đang tìm lý do để thực hành thực tế 🙂)
 * 
 * 1. Chuyển toàn bộ <section> công thức vào một component riêng 
 *    có tên là ClaudeRecipe.
 * 2. Chuyển danh sách nguyên liệu <section> vào một component 
 *    riêng có tên là IngredientsList.
 * 
 * Khi bạn đang xem xét cách cấu trúc mọi thứ, hãy suy nghĩ về vị trí 
 * của state, xem có hợp lý khi chuyển nó đi đâu đó hay không, 
 * làm thế nào để giao tiếp giữa các component cha/con, v.v.
 * 
 * Ứng dụng sẽ hoạt động như hiện tại khi bạn hoàn thành, 
 * vì vậy có thể sẽ có thêm một số công việc cần làm ngoài những gì tôi đã liệt kê ở trên.
 */
export default function Main() {
    const [ingredients, setIngredients] = React.useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )
    const [recipeShown, setRecipeShown] = React.useState(false)

    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
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
                    toggleRecipeShown={toggleRecipeShown}
                />
            }

            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}