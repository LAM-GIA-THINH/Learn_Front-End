// export default function App() {
//     /**
//     Thử thách: Thay thế câu lệnh if/else dưới đây bằng một biểu thức điều kiện ba ngôi
//     để xác định văn bản sẽ hiển thị trên trang */
//     const isGoingOut = true
    
//     let answer  // 👈 Sử dụng biểu thức điều kiện ba ngôi ở đây
    
//     // Xóa mã bên dưới 👇 khi biểu thức ba ngôi đã hoàn thành
//     if(isGoingOut === true) {
//         answer = "Yes"
//     } else {
//         answer = "No"
//     }
    
//     return (
//         <main>
//             <h1 className="title">Do I feel like going out tonight?</h1>
//             <button className="value">{answer}</button>
//         </main>
//     )
// }

// export default function App() {
//     /**
//     Thử thách: di chuyển biểu thức điều kiện ba ngôi trực tiếp vào bên trong JSX
//     để xác định "Yes" và "No" ngay bên trong thẻ <h1>
//     Gợi ý: bạn sẽ không còn cần đến biến answer nữa */
//     const isGoingOut = true
//     const answer = isGoingOut ? "Yes" : "No"
    
//     return (
//         <main>
//             <h1 className="title">Do I feel like going out tonight?</h1>
//             <button className="value">{answer}</button>
//         </main>
//     )
// }

export default function App() {
    const isGoingOut = true
    
    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value">{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}
