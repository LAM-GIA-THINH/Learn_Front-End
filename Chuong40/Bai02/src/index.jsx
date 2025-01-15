import React from 'react';
import ReactDOM from 'react-dom/client';
import Marquee from "./Marquee"

function App() {
  return (
    <main>
      {/* children trong reactjs */}
      <Marquee>🧛‍♀️ Welcome to Horrorville 🧛‍♀️</Marquee>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);