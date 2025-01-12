import { useState, useEffect } from "react"

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = useState([])
    /**
     * Thách thức:
     * Lấy một mảng các memes từ API imgflip ngay khi
     * component này được render lần đầu tiên.
     * Kiểm tra tài liệu của imgflip để tìm URL chính xác.
     * Lưu mảng memes (không phải toàn bộ dữ liệu phản hồi)
     * vào state. (Trong ứng dụng này, chúng ta sẽ chọn ngẫu nhiên
     * một meme từ mảng này khi người dùng nhấn nút
     * "Get a new meme image", nhưng việc đó sẽ được thực hiện
     * trong một thách thức khác.)
     * 
     * Gợi ý: Hiện tại, đừng cố sử dụng hàm async/await.
     * Thay vào đó, sử dụng `.then()` để xử lý các promises
     * từ việc dùng `fetch`. Chúng ta sẽ tìm hiểu lý do sau thách thức này.
     */
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function handleChange(event) {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}