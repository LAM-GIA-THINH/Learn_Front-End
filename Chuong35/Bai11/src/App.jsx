import Joke from "./Joke"

/**
 * Thử thách: Suy nghĩ kỹ - làm thế nào bạn có thể truyền một prop 
 * không phải kiểu dữ liệu chuỗi.
 * 
 * Ví dụ: Giả sử bạn muốn mỗi thành phần Joke nhận các prop "upvotes" 
 * và "downvotes" là số, cùng với một prop là mảng các bình luận, 
 * và một boolean để xác định liệu câu chuyện cười có phải là chơi chữ 
 * hay không (`isPun`).
 */

export default function App() {
    return (
        <main>
            <Joke
                punchline="It's hard to explain puns to kleptomaniacs because they always take things literally."
                upvotes={10}
                isPun={true}
                comments={[
                    {author: "", text: "", title: ""},
                    {author: "", text: "", title: ""}
                ]}
            />
            <Joke
                setup="How did the hacker escape the police?"
                punchline="He just ransomware!"
                isPun={true}
            />
            <Joke
                setup="Why don't pirates travel on mountain roads?"
                punchline="Scurvy."
                isPun={true}
            />
            <Joke
                setup="Why do bees stay in the hive in the winter?"
                punchline="Swarm."
                isPun={true}
            />
            <Joke
                setup="What's the best thing about Switzerland?"
                punchline="I don't know, but the flag is a big plus!"
                isPun={false}
            />
        </main>
    )
}
