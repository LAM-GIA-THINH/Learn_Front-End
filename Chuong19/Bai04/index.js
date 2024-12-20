const catsData = [
    {
        emotionTags: ["moody"],
        isGif: false,
        image: "angry.jpeg",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["moody", "insomniac"],
        isGif: false,
        image: "angry2.jpeg",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["moody"],
        isGif: false,
        image: "angry3.jpeg",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["confused", "sad"],
        isGif: false,
        image: "confused.jpeg",
        alt: "A cat looking confused",
    },
    {
        emotionTags: ["dominant", "moody"],
        isGif: false,
        image: "dominant.jpeg",
        alt: "A cat looking dominant",
    },
    {
        emotionTags: ["happy", "relaxed"],
        isGif: false,
        image: "happy.jpeg",
        alt: "A cat looking happy",
    },
    {
        emotionTags: ["hungry"],
        isGif: false,
        image: "hungry.jpeg",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["hungry"],
        isGif: false,
        image: "hungry1.jpeg",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["insomniac"],
        isGif: false,
        image: "insomnia.jpeg",
        alt: "A cat looking insomniac",
    },
    {
        emotionTags: ["insomniac"],
        isGif: false,
        image: "insomnia1.jpeg",
        alt: "A cat looking insomniac",
    },
    {
        emotionTags: ["relaxed"],
        isGif: false,
        image: "lazy.jpeg",
        alt: "A cat looking lazy",
    },
    {
        emotionTags: ["scared"],
        isGif: false,
        image: "nervous.jpeg",
        alt: "A cat looking nervous",
    },
    {
        emotionTags: ["sad"],
        isGif: false,
        image: "sad.jpeg",
        alt: "A cat looking sad",
    },
    {
        emotionTags: ["sad", "moody"],
        isGif: false,
        image: "sad1.jpeg",
        alt: "A cat looking sad",
    },
    {
        emotionTags: ["moody"],
        isGif: true,
        image: "angry.gif",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["moody"],
        isGif: true,
        image: "angry2.gif",
        alt: "A cat looking angry",
    },
    {
        emotionTags: ["confused"],
        isGif: true,
        image: "confused2.gif",
        alt: "A cat looking confused",
    },
    {
        emotionTags: ["dominant"],
        isGif: true,
        image: "dominant.gif",
        alt: "A cat looking dominant",
    },
    {
        emotionTags: ["happy"],
        isGif: true,
        image: "happy.gif",
        alt: "A cat looking happy",
    },
    {
        emotionTags: ["hungry", "sad", "confused"],
        isGif: true,
        image: "confused.gif",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["hungry"],
        isGif: true,
        image: "hungry.gif",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["hungry"],
        isGif: true,
        image: "hungry2.gif",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["insomniac", "scared"],
        isGif: true,
        image: "insomnia2.gif",
        alt: "A cat looking insomniac",
    },
    {
        emotionTags: ["relaxed"],
        isGif: true,
        image: "lazy.gif",
        alt: "A cat looking relaxed",
    },
    {
        emotionTags: ["relaxed"],
        isGif: true,
        image: "relaxed2.gif",
        alt: "A cat looking relaxed",
    },
    {
        emotionTags: ["scared", "sad"],
        isGif: true,
        image: "nervous.gif",
        alt: "A cat looking nervous",
    },
    {
        emotionTags: ["scared"],
        isGif: true,
        image: "nervous2.gif",
        alt: "A cat looking scared",
    },
    {
        emotionTags: ["sad"],
        isGif: true,
        image: "sad.gif",
        alt: "A cat looking sad",
    },
]

function getEmotionsArray(cats){
/*
Thử thách:
1. Thiết lập một hằng số và khởi tạo nó với một 
   mảng trống.
2. Thay vì ghi log từng cảm xúc, hãy thêm từng 
   cảm xúc vào mảng mới.
3. Cuối hàm, ghi log hằng số chứa mảng mới.
*/
    const emotionsArray = []
    
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            emotionsArray.push(emotion)
        }
        
    }
//     console.log(emotionsArray)
// }

// getEmotionsArray(catsData)
    return emotionsArray
}

/*
Thử thách:
1. Thêm một vòng lặp "for...of" lồng nhau để chỉ ghi log 
   các cảm xúc từ mảng emotionTags trong mỗi đối tượng.
*/