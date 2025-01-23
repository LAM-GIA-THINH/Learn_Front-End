import { catsData } from './data.js'

const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')

emotionRadios.addEventListener('change', highlightCheckedOption)

getImageBtn.addEventListener('click', renderCat)

function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios){
        radio.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function getMatchingCatsArray(){     
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        const isGif = gifsOnlyOption.checked
        
        const matchingCatsArray = catsData.filter(function(cat){
            
            if(isGif){
                return cat.emotionTags.includes(selectedEmotion) && cat.isGif
            }
            else{
                return cat.emotionTags.includes(selectedEmotion)
            }            
        })
        return matchingCatsArray 
    }   
}

function getSingleCatObject(){
    
    const catsArray = getMatchingCatsArray()
    
    if (catsArray.length === 1){
        console.log(catsArray[0])
    }
/*
Thử thách:
1. Bên trong hàm này, gọi getMatchingCatsArray 
   và lưu kết quả mà nó trả về vào một hằng số gọi là 
   “catsArray”.
2. Thiết lập một câu lệnh if để kiểm tra nếu chỉ có một
   đối tượng mèo trong mảng. Nếu có, hãy in ra
   đối tượng mèo đó (không phải là toàn bộ mảng!).
   {}
   Kiểm tra: "happy", chỉ chọn GIF động.
*/  
    
}

function renderCat(){
    getSingleCatObject() // temporary 
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




