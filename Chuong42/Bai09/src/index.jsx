import React from "react"
import ReactDOM from "react-dom/client"
// import ProductsList from "./ProductsList"
/**
 * Thử thách: Thêm lại dynamic import của component ProductsList 
 * 
 * 1. Sử dụng `React.lazy()` để tạo một component trì hoãn
 *    chỉ render khi cần thiết
 * 2. Sử dụng dynamic `import()` như là giá trị trả về bên trong
 *    `React.lazy()`
 * 3. Sử dụng component `<React.Suspense>` với prop `fallback`
 *    để cho React một thứ gì đó để render trong khi
 *    nó đang tải toàn bộ code cho component bị
 *    trì hoãn.
 */

const ProductsList = React.lazy(() => {
  return import("./ProductsList")
})

function App() {
  const [count, setCount] = React.useState(0)
  const [showProducts, setShowProducts] = React.useState(false)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <>
      <h1>The current count is {count}</h1>
      <button className="button" onClick={decrement}>
        -
            </button>
      <button className="button" onClick={increment}>
        +
            </button>
      <br />
      <br />
      <button
        className="button"
        onClick={() => setShowProducts(prev => !prev)}
      >
        Show Products
            </button>
      <br />
      <br />
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <div className="products-list">
          {showProducts && <ProductsList />}
        </div>
      </React.Suspense>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
