import React from "react"

export default function App(props) {
    const [starWarsData, setStarWarsData] = React.useState(null)
    //áp dụng useEffect
    
    React.useEffect(function() {
        console.log("Effect ran")
        fetch("https://swapi.py4e.com/api/people/1")
            .then(res => res.json())
            // .then(data => setStarWarsData(data))
    })
    
    console.log("Rendered!")
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}