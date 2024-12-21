import { catsData } from './data.js'

const emotionRadios = document.getElementById('emotion-radios')

emotionRadios.addEventListener('change', highlightCheckedOption)

function highlightCheckedOption(e){
/*
Thử thách:
1. Tạo một mảng gồm tất cả các phần tử có 
   lớp "radio".
2. Lặp qua mảng này và xóa lớp 
   "highlight" khỏi từng phần tử.
*/

    const radios = document.getElementsByClassName('radio')
    
    for (let radio of radios){
        radio.classList.remove('highlight')
    }

    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

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




