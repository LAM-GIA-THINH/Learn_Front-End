import { catsData } from './data.js'

const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')

emotionRadios.addEventListener('change', highlightCheckedOption)

getImageBtn.addEventListener('click', getMatchingCatsArray)

function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}


function getMatchingCatsArray(){
    const isGif = gifsOnlyOption.checked
    console.log(isGif)
    
/*
Thử thách:
1. Kiểm soát checkbox "gifs only".
2. Thiết lập một hằng số trong hàm getMatchingCatsArray để lưu trữ 
   một giá trị boolean, giá trị này sẽ được đặt là true nếu tùy chọn 
   "gifs only" được chọn và false nếu không. (Hãy nghĩ một tên hợp lý 
   cho hằng số này.)
3. Hiển thị giá trị của hằng số để kiểm tra xem nó có hoạt động không.
*/
     
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        console.log(selectedEmotion)  
    }  
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




