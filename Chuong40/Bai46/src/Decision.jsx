import React from "react"
/**
 * Thử thách: tìm ra cách xử lý với `render`
 */
export default function Decision({ render }) {
    const [goingOut, setGoingOut] = React.useState(false)

    function toggleGoingOut() {
        setGoingOut(prev => !prev)
    }

    return (
        <div>
            <button onClick={toggleGoingOut}>Change mind</button>
            {render(goingOut)}
        </div>
    )
}