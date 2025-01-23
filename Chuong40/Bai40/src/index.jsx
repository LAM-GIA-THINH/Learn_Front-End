import React from 'react'
import ReactDOM from 'react-dom/client'
// Refs cũng giống như state, chỉ khác là việc thay đổi chúng không gây ra việc render lại. 
// Chúng thường được sử dụng cho việc thao tác DOM thủ công.
function Main() {
  const [on, setOn] = React.useState(false)
  const renderCount = React.useRef(0)

  function forceRender() {
    setOn(prevOn => !prevOn)
  }
  
  function incrementRenderCount() {
    renderCount.current++
  }
  
  React.useEffect(() => {
    renderCount.current++
  })

  return (
    <>
      <h3>Understanding refs</h3>
      <button onClick={forceRender}>Force re-render w/ state change</button>
      <button onClick={incrementRenderCount}>Increment Ref Count</button>
      <h4>Render count: {renderCount.current}</h4>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);