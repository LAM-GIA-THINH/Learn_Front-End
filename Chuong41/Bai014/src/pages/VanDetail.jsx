import React from "react"
import { useParams } from "react-router-dom"
export default function VanDetail() {
    const params = useParams()
    console.log(params)
    /**
     * Import useParam và consolelog object ra
     */
    return <h1>Van detail page goes here</h1>
}