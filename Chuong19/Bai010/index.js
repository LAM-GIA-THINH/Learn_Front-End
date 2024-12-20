import { catsData } from './data.js'

const emotionRadios = document.getElementById('emotion-radios')

function getEmotionsArray(cats){
    const emotionsArray = []
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            emotionsArray.push(emotion)
        }
    }
    return emotionsArray
}

function renderEmotionsRadios(cats){
    
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
/*
Thách thức:
1. Thay thế `<p>${emotion}</p>` bằng HTML
   sẽ render một input radio cho mỗi
   cảm xúc. Hãy nhớ sử dụng các thuộc tính "type", "id", 
   "value", và "name" cho mỗi radio.
   ("id" và "value" có thể được đặt thành
   "emotion").
2. Hãy nhớ gán nhãn cho mỗi radio.
   (Thuộc tính nào cần có cho nhãn?)
3. Đặt mỗi input radio trong div này:
   <div class="radio">
      **RADIO Ở ĐÂY**
   </div>
*/ 

        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
                type="radio"
                id="${emotion}"
                value="${emotion}"
                name="emotions"
                >
        </div>
        ` 
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)




