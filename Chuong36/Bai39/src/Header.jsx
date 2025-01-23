import avatar from "./icons/user.png"
/**
 * Thách thức:
 * Nâng state lên một cấp và truyền nó xuống cả hai component 
 * Header và Body thông qua props.
 */
// const [userName, setUserName] = React.useState("Joe")

// return (
//     <header>
//         <img src={avatar} />
//         <p>{userName}</p>
//     </header>
export default function Header(props) {
    return (
        <header>
            <img src={avatar} />
            <p>{props.userName}</p>
        </header>
    )
}
