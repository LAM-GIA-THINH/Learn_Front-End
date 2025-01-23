import React from 'react';
import ReactDOM from 'react-dom/client';
import Product from "./Product"
import productsData from "./data"

function App() {
  const [count, setCount] = React.useState(0)
  const [darkMode, setDarkMode] = React.useState(false)
  const [selectedProduct, setSelectedProduct] = React.useState(null)
  
/**
 * Thách thức - Phần 1: Hãy thử truyền `setSelectedProduct` (hàm setter
 * trạng thái mà React tạo trong useState) xuống component Product. 
 * Thiết lập để khi `div#product-card` được nhấp, nó sẽ đặt selectedProduct
 * thành id của sản phẩm cụ thể đó.
 * 
 * Sau khi thực hiện, hãy kiểm tra xem có vấn đề hiệu năng nào phát sinh 
 * từ việc truyền một hàm xuống component con hay không. Tại sao hoặc 
 * tại sao không?
 */

/**
 * Thách thức - Phần 2: Tạo hàm của riêng bạn, `chooseProduct`, nhận một tham 
 * số id và đầu tiên log "New product selected" lên console, SAU ĐÓ gọi 
 * `setSelectedProduct` với id đó. Sau đó kiểm tra hiệu năng.
 */

/**
 * Thách thức - Phần 3: Lưu vào bộ nhớ đệm (cache) hàm `chooseProduct` để nó 
 * không bị tái tạo trong mỗi lần render. Kiểm tra lại xem hiệu năng có được 
 * cải thiện sau đó hay không.
 */

  
  function chooseProduct(id) {
    console.log("New product selected")
    setSelectedProduct(id)
  }
  
  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  const productStyles = React.useMemo(() => {
    return {
      backgroundColor: darkMode ? "#2b283a" : "whitesmoke",
      color: darkMode ? "white" : "#2b283a"
    }
  }, [darkMode])

  const selectedStyles = {
    backgroundColor: "#93c47d"
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
          productsData.map(product => {
            const isSelected = product.id === selectedProduct
            return <Product
              key={product.id}
              product={product}
              style={isSelected ? { ...productStyles, ...selectedStyles } : productStyles}
              chooseProduct={chooseProduct}
            />
          })
        }
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);