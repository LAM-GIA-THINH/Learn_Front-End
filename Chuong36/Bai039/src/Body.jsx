// import React from "react"

// export default function Body() {
//     return (
//         <section>
//             <h1>Welcome back, ___!</h1>
//         </section>
//     )
// }
export default function Body(props) {
    return (
        <section>
            <h1>Welcome back, {props.userName}!</h1>
        </section>
    )
}
