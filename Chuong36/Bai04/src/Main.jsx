 /**
 * Thử thách 1:
 * Duyệt qua danh sách các nguyên liệu và hiển thị chúng dưới dạng các mục trong danh sách
 * 
 * Lưu ý: Chúng ta đang làm theo cách hơi kỳ lạ ở đây. Đừng lo,
 * chúng ta sẽ dần học cách làm đúng 🙂
 */

 /**
 * Thử thách 2:
 * Thêm một trình lắng nghe sự kiện `onSubmit` vào biểu mẫu. 
 * Hiện tại, hãy để hàm chỉ đơn giản là console.log("Form submitted!") thôi.
 */

 /**
 * Thử thách 3:
 * Thêm nguyên liệu mới vào mảng các nguyên liệu. Đồng thời, thêm một 
 * console.log(ingredients) sau khi thêm nguyên liệu, vì 
 * **cảnh báo**: bạn sẽ không thấy trang được cập nhật đâu!
 * 
 * Gợi ý: Đây là một giải pháp chỉ cần một dòng, nên đừng suy nghĩ quá phức tạp 😅
 */
export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
    }
    
    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}