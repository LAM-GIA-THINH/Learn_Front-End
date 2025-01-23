import { catsData } from './data.js'

const emotionRadios = document.getElementById('emotion-radios')

emotionRadios.addEventListener('change', highlightCheckedOption)

function highlightCheckedOption(e){
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
/*
Thử thách:
1. highlightCheckedOption cần kiểm soát radio input được chọn 
   và thêm lớp CSS "highlight" vào danh sách lớp của nó.
*/
/*
Thử thách:
2. Thay đổi mã ở dòng 8 để chúng ta thêm 
   lớp 'highlight' vào phần tử cha của 
   radio input được chọn.
*/
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




