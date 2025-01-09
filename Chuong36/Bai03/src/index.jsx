import ReactDOM from 'react-dom/client';
/**
 * Thử thách 1: Thêm chức năng mới của chúng ta vào nút bấm
 */

/**
 * Thử thách 2: Ghi log một thông báo ra console khi con trỏ chuột
 * di chuyển qua hình ảnh
 */
function App() {
  
  function handleClick() {
    console.log("I was clicked!")
  }
  
  function handleMouseOver() {
    console.log("I was hovered!")
  }
  
  return (
    <main className="container">
      <img
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
        onMouseOver={handleMouseOver}
      />
      <button onClick={handleClick}>Click me</button>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);