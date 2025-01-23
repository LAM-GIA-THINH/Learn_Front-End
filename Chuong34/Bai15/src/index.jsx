import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))
/**

Thử thách nhỏ:
Di chuyển phần tử header từ component Page vào
một component riêng gọi là "Header".
Sau đó render một instance của component Header bên trong
component Page tại vị trí mà header đã được sử dụng. 
Di chuyển phần tử main vào một component riêng gọi là "MainContent"
và render component đó bên trong component Page.
Làm tương tự với phần tử footer, di chuyển nó vào một component mới
gọi là "Footer".*/
function Header() {
    return (
        <header>
            <img src="./src/react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

function MainContent() {
    return (
        <main>
            <h1>Reason I am excited to learn React</h1>
            <ol>
                <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                <li>I am more likely to get a job as a front end developer if I know React</li>
            </ol>
        </main>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2024 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

root.render(
    <Page />
)
