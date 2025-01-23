import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))
/**

Thử thách 1:
Thêm một phần tử nav > ul > li (x3). Ba mục này nên có nội dung:
"Pricing", "About", và "Contact" */

/**

Thử thách 2:
Sử dụng flexbox, xếp các phần tử li theo chiều ngang và đặt chúng cùng hàng với logo React.
LƯU Ý: để thực hành, đừng chọn bất kỳ phần tử nào, mà hãy sử dụng class cho tất cả các kiểu dáng (styling). */

/**

Thử thách 3:
Di chuyển kiểu dáng width ra khỏi JSX và vào CSS với một className riêng trên phần tử img, 
và thay đổi chiều rộng thành 55px thay vì trước. */

function Header() {
    return (
        <header className="header">
            <img src="./src/react-logo.png" className="nav-logo" alt="React logo" />
            <nav>
                <ul className="nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                </ul>
            </nav>
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
