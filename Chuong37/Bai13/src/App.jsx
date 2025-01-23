import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    
    /**
     * Thách thức phần 1:
     * Lấy dữ liệu từ URL này: "https://swapi.py4e.com/api/people/1"
     * và lưu nó vào state starWarsData. Hãy chắc chắn rằng bạn
     * không bị rơi vào vòng lặp render vô hạn!
     */

    /**
     * Thách thức phần 2:
     * Kết hợp state "count" với URL yêu cầu
     * để khi nhấn nút "Get next character",
     * một nhân vật mới từ API Star Wars sẽ được lấy.
     * Hãy nhớ xem xét mảng dependencies!
     */
    
    React.useEffect(() => {
        fetch(`https://swapi.py4e.com/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])
    
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get next character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}