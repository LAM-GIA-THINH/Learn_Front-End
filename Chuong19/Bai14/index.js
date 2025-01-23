import { catsData } from './data.js'

const emotionRadios = document.getElementById('emotion-radios')

/*
Thách thức:
1. Thêm một eventListener vào emotionRadios để lắng nghe bất kỳ sự thay đổi nào 
   trên các nút radio. Khi phát hiện sự thay đổi, nó sẽ log ra id của phần tử 
   đã được chọn.
⚠️️ Cảnh báo: Điều này sẽ không hoạt động nếu eventListener đang lắng nghe sự kiện 
   'click'. Tìm hiểu sự kiện nào cần lắng nghe - tôi đã đưa cho bạn một gợi ý!
*/


emotionRadios.addEventListener('change', function(e){
    console.log(e.target.id)
})

function getEmotionsArray(cats){
    const emotionsArray = []    
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if (!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}


function renderEmotionsRadios(cats){
        
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
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




