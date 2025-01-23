import React from 'react';
import ReactDOM from 'react-dom/client';
import Product from "./Product"
import productsData from "./data"

/**  
 * Thử thách: Sử dụng những gì bạn đã học về React.memo(),  
 * cải thiện hiệu suất của ứng dụng này khi bộ đếm (`counter`) thay đổi.  
 * Vì các sản phẩm không quan tâm đến giá trị của `count`,  
 * nên chúng không cần phải render lại khi `count` thay đổi.  
 */  

function App() {
  const [count, setCount] = React.useState(0)
  const [darkMode, setDarkMode] = React.useState(false)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <>
      <h1>The current count is {count}</h1>
      <button className="button" onClick={decrement}>-</button>
      <button className="button" onClick={increment}>+</button>
      <br />
      <br />
      <button
        className="button"
        onClick={() => setDarkMode(prev => !prev)}
      >
        {darkMode ? "Light" : "Dark"}
      </button>
      <br />
      <br />
      <div className="products-list">
        {
          productsData.map(product => (
            <Product
              key={product.id}
              product={product}
              darkMode={darkMode}
            />
          ))
        }
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);