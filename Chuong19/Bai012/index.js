import { catsData } from './data.js'

const emotionRadios = document.getElementById('emotion-radios')

function getEmotionsArray(cats) {
    const emotionsArray = []

    for (let cat of cats) {
        for (let emotion of cat.emotionTags) {
/*
Thách thức:
1. Tái cấu trúc vòng lặp lồng nhau này sao cho một cảm xúc chỉ được thêm vào mảng emotionsArray
   nếu nó chưa có trong mảng emotionsArray.
   Điểm cộng nếu bạn sử dụng toán tử "phủ định logic" (logical not) - đừng ngần ngại tìm kiếm nó trên Google!
*/


            if (!emotionsArray.includes(emotion)) {
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}


function renderEmotionsRadios(cats) {

    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions) {
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
        </div>`
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)




