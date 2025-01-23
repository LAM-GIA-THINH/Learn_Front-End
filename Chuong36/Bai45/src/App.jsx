import React from "react"
import padsData from "./pads"
import Pad from "./Pad"

export default function App() {
    const [pads, setPads] = React.useState(padsData)
    
    /**
     * Thách thức: Tạo một hàm toggle() để log 
     * "clicked!" ra console.
     * 
     * Truyền hàm đó xuống từng Pad component
     * và thiết lập để khi các pad được nhấn, hàm này sẽ chạy.
     */
    
    function toggle() {
        console.log("Clicked!")
    }
    
    const buttonElements = pads.map(pad => (
        <Pad toggle={toggle} key={pad.id} color={pad.color} on={pad.on}/>
    ))
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
