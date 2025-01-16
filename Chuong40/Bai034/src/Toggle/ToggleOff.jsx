import React from "react"
import { ToggleContext } from "./Toggle"
/**
 * Thử thách: Xây dựng component Toggle.Off!
 */
export default function ToggleOff({ children }) {
    const { on } = React.useContext(ToggleContext)
    
    return on ? null : children
}