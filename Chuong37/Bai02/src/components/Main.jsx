import { useState } from "react"
// Thử thách: Chuyển thông tin meme được mã hóa cứng (hardcoded) vào trong state của React. 
// Sử dụng một đối tượng với các thuộc tính `topText`, `bottomText` và `imageUrl`, 
// và đặt các giá trị ban đầu giống như các giá trị được mã hóa cứng bên dưới.

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
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