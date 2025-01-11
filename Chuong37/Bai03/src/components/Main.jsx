import { useState } from "react"
// Thử thách: Cập nhật giá trị `topText` trong đối tượng state của meme mỗi khi hộp nhập liệu `topText` được thay đổi.

// Lưu ý: Không cần quan tâm đến `bottomText` ở giai đoạn này.
export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    
    function handleChange(event) {
        const {value} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            topText: value
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
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
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