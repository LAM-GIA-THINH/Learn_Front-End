import React from "react"
// props spreading
export default function Button(props) {
    return (
        <button {...props}>
            {props.children}
        </button>
    )
}