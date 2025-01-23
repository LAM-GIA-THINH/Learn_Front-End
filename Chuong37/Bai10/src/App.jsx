import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)
    
    console.log("Rendered!")
    
    // React.useEffect(function() {
    //     console.log("Effect ran")
    //     fetch("https://swapi.py4e.com/api/people/1")
    //         .then(res => res.json())
    //         .then(data => setStarWarsData(data))
    // }, [count]) //thử dùng 0 thay vì count
    /**
     * Thử thách: viết lại useEffect
     * Nó nên chạy mỗi khi `count` thay đổi
     * Hiện tại, chỉ cần console.log("Hàm hiệu ứng đã chạy")
     */
    React.useEffect(() => {
        console.log("Effect function ran")
    }, [count])    
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}