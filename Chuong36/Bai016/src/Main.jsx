import React from "react"
/**
Thử thách: Cập nhật ứng dụng của chúng ta sao cho khi người dùng nhập một
nguyên liệu mới và gửi form, nó sẽ thêm nguyên liệu mới đó vào danh sách! */
export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        /**
        Giống như trước, đừng lo lắng về phần FormData này ngay bây giờ.
        Chỉ cần sử dụng newIngredient dưới đây để giúp bạn hoàn thành
        thử thách này. */
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
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