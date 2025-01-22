import React from "react"

export default function Timer() {
    const [seconds, setSeconds] = React.useState(0)
    // React.useEffect(() => {
    //     setInterval(() => {
    //         setSeconds(prevSeconds => prevSeconds + 1)
    //         // console.log("Timer is running")
    //     }, 1000)
    // }, [])
/**
 * Thử thách: dọn dẹp interval như là phần cuối cùng của
 * useEffect. */    
    React.useEffect(() => {
        const id = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1)
            console.log("Timer is running")
        }, 1000)
        return () => clearInterval(id)
    }, [])

    return (
        <h2>{seconds} seconds</h2>
    )
}