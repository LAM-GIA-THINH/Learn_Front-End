import React from "react"
//destructuring props
export default function Button({children, ...rest}) {
    return (
        <button {...rest}>
            {children}
        </button>
    )
}