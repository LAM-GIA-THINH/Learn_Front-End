import React from "react"
import Header from "./Header"
import Button from "./Button"
// học dùng createContext
const ThemeContext = React.createContext()

export default function App() {
    return (
        <ThemeContext.Provider value="dark">
            <div className="container dark-theme">
                <Header />
                <Button />
            </div>
        </ThemeContext.Provider>
    )
}

export { ThemeContext }