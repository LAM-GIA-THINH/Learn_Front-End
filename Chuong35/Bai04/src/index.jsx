import ReactDOM from 'react-dom/client';
/**
 * Thử thách 1: hoàn thiện thẻ h1 bên dưới để nó hiển thị "Hello Joe Schmoe"
 */
// function App() {
//   const firstName = "Joe"
//   const lastName = "Schmoe"
  
//   return (
//     <h1>Hello {firstName} {lastName}</h1>
//   )
// }

/**
 * Thử thách 2: thay đổi chuỗi "night" được mã hóa cứng để hiển thị 
 * văn bản mà chúng ta đã xác định từ logic ở trên.
 */

function App() {
    const hours = new Date().getHours()
    let timeOfDay
  
    if (hours < 12) {
      timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
    } else if (hours < 21) {
      timeOfDay = "evening"
    } else {
      timeOfDay = "night"
    }
    
    return (
      <h1>Good {timeOfDay}</h1>
    )
  }

ReactDOM.createRoot(document.getElementById('root')).render(<App />);