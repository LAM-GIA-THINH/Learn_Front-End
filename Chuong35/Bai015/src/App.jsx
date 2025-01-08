export default function App() {
    
/**
 * Thử thách: thủ công biến mảng chuỗi này thành một mảng 
 * các phần tử JSX bằng cách bao quanh mỗi ninja rùa với một thẻ <h2>
 */
    
    // const ninjaTurtles = ["Donatello", "Michaelangelo", "Rafael", "Leonardo"]
    // return (
    //     <main>
    //         {ninjaTurtles}
    //     </main>
    // )
    const ninjaTurtles = [
        <h2>Donatello</h2>, 
        <h2>Michaelangelo</h2>,
        <h2>Rafael</h2>,
        <h2>Leonardo</h2>
    ]
    return (
        <main>
            {ninjaTurtles}
        </main>
    )
}
