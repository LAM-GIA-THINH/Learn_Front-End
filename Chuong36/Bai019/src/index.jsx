import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Thử thách: thêm một nhãn và một ô nhập liệu khác cho trường mật khẩu
 */

function App() {
  return (
    <section>
      <h1>Signup form</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        
        <button>Submit</button>
        
      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);